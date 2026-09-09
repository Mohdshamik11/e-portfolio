# e-portfolio

Personal IT e-portfolio for **Mohamed Shamik**. Projects are not hardcoded — the
owner adds them through an admin form and they appear on the live site
automatically.

## Tech stack

- **Next.js** (App Router) — frontend and backend (server actions / route handlers)
- **Supabase** — Postgres database + Storage for project images
- **Vercel** — hosting, auto-deploys on push to `main`

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Environment variables go in `.env.local` (git-ignored). See `.env.local.example`
for the required keys once it exists.

## Scripts

| Command         | Description                 |
| --------------- | -------------------------- |
| `npm run dev`   | Start the dev server       |
| `npm run build` | Production build           |
| `npm run start` | Serve the production build |
| `npm run lint`  | Run ESLint                 |

## Project context

The full build plan and current status live in the `eportfolio-project-context`
skill under `.claude/skills/`.
