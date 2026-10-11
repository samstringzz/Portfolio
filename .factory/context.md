# .factory/context.md

## What this repo is and who uses it

Oluwatosin's personal portfolio website. Visitors are prospective clients and employers. A good change keeps the site fast, readable and accurate, and does not alter personal facts, project claims or contact details unless the issue says so.

## Stack and how to run, test and build

Next.js (app router), Tailwind CSS, Node 22, npm.
- Install: `npm ci --ignore-scripts`
- Dev: `npm run dev`
- Build: `npm run build`
- Quick check: `node harness/ci.mjs --quick` (build only)
- Full check: `node harness/ci.mjs` (build, serve the production build, request every route)
There is no lint or unit test setup yet.

## Where things live

`src/` holds the app: routes, components and project data. `public/` holds static assets. Config sits at the repository root. `harness/` is the gate and `factory/` is the vendored engine. Neither is edited by the factory.

## The contract or spec for the main deliverable type

A change is a small, reviewable edit to pages, components or content that still builds and still serves every route with a 200 response and a page title.

## Domain rules

- Do not invent project details, employers, dates or testimonials.
- Do not change contact details, social links or analytics ids unless the issue names them.
- Do not add dependencies without a stated reason in the pull request.
- UK English. No em dash or en dash.
