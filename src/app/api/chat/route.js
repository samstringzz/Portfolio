import { NextResponse } from "next/server";

export const runtime = "nodejs";

const FORMSPREE_URL =
  process.env.FORMSPREE_CHAT_URL || "https://formspree.io/f/myzyyakr";

// Best-effort limiter (per server instance): 5 messages per IP per 10 minutes.
const hits = new Map();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

const limited = (ip) => {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_HITS;
};

const clean = (value, max) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

const sendToFormspree = async ({ name, contact, message }) => {
  const res = await fetch(FORMSPREE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name,
      email: contact.includes("@") ? contact : undefined,
      contact,
      subject: "Chat bubble message",
      message,
    }),
  });
  return res.ok;
};

export async function POST(request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (limited(ip)) {
    return NextResponse.json({ error: "Too many messages. Please try again later." }, { status: 429 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field.
  if (body.website) return NextResponse.json({ ok: true });

  const name = clean(body.name, 80) || "Website visitor";
  const contact = clean(body.contact, 120);
  const message = clean(body.message, 1500);
  if (!contact || !message) {
    return NextResponse.json({ error: "Please add your contact and a message." }, { status: 400 });
  }

  const delivered = await sendToFormspree({ name, contact, message }).catch(() => false);

  if (!delivered) {
    return NextResponse.json({ error: "Could not send right now. Please use the contact page." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
