# Cryptic Finds 2026 — The Grounds

A responsive React homepage for Cryptic Finds 2026, built with Vite. The opening view uses the supplied graveyard image, followed by an Event Introduction section reserved for coordinator copy and an unlinked View Objectives button. The compact participant navigation lists Home, Questions, Team, Leaderboard, Rules, and Profile. The Hunt section and unconfirmed event details are not included.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
pnpm install
pnpm dev
```

Open the local URL printed by Vite (usually [http://localhost:5173](http://localhost:5173)). If you use npm instead, run `npm install` and `npm run dev`. To create a production build, run `pnpm build` (or `npm run build`); preview it with `pnpm preview` (or `npm run preview`).

## Project structure

```text
cryptic-finds-homepage/
├── index.html
├── package.json
├── pnpm-lock.yaml
├── vite.config.js
├── public/
│   ├── cryptic-finds-2026-scene.png
│   └── graveyard-mark.svg
└── src/
    ├── App.jsx
    ├── main.jsx
    └── styles.css
```
