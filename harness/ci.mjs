// The factory gate for this repository. One command, markers on stdout, non-zero on failure.
//   node harness/ci.mjs            full: build, serve the production build, smoke every route
//   node harness/ci.mjs --quick    build only
// Dummy environment only. No network to third parties is needed by these checks.
import { spawn, spawnSync } from "node:child_process";

const QUICK = process.argv.includes("--quick");
const PORT = process.env.GATE_PORT || "3457";
const ROUTES = ["/", "/about", "/contact", "/projects", "/projects/alutamarket", "/sitemap.xml"];

function fail(step, detail = "") {
  console.log(`GATE_FAILED step=${step} ${detail}`.trim());
  process.exit(1);
}

// 1. Build
const build = spawnSync("npx", ["next", "build"], { stdio: "inherit", shell: false });
if (build.status !== 0) fail("build");
console.log("BUILD_PASSED");

if (QUICK) {
  console.log("GATE_OK quick=1");
  process.exit(0);
}

// 2. Serve the production build and wait for it
const server = spawn("npx", ["next", "start", "-p", PORT], { stdio: "ignore" });
const stop = () => server.kill("SIGTERM");
process.on("exit", stop);

const base = `http://127.0.0.1:${PORT}`;
let up = false;
for (let i = 0; i < 60 && !up; i++) {
  try {
    up = (await fetch(base + "/")).ok;
  } catch {
    await new Promise((r) => setTimeout(r, 1000));
  }
}
if (!up) fail("serve", "app did not answer on /");
console.log(`APP_STARTED port=${PORT}`);

// 3. End to end: every route answers 200 with a document, no error screen
let steps = 0;
for (const route of ROUTES) {
  const res = await fetch(base + route);
  const body = await res.text();
  if (res.status !== 200) fail("e2e", `${route} returned ${res.status}`);
  if (route !== "/sitemap.xml" && !/<title/i.test(body)) fail("e2e", `${route} has no <title>`);
  if (/Application error|Internal Server Error/i.test(body)) fail("e2e", `${route} shows an error screen`);
  steps++;
}
console.log(`E2E_PASSED steps=${steps}`);

stop();
console.log("GATE_OK");
