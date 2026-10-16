# Project: Mock Company Website (Learning Project)

## Purpose
This is a practice project for learning modern web development and deploying on Vercel with Claude Code. It is a fictional company website, not a client project. Nothing here is production data.

## About me
I'm an experienced WordPress developer (PHP, JS, CSS) learning the Next.js/React/Vercel workflow. When you introduce a new concept, explain it briefly and compare it to its WordPress equivalent where that helps (e.g. layouts vs. theme templates, MDX files vs. posts, route handlers vs. admin-ajax). Keep explanations short. Don't over-explain things I already know from web development in general.

## Tech stack
- Framework: Next.js (App Router) with TypeScript
- Styling: Tailwind CSS
- Blog content: MDX files in `/content/blog/` (no database or CMS for now)
- Hosting: Vercel (connected via Vercel MCP)
- Package manager: npm

## Site structure
| Route | Purpose |
|-------|---------|
| `/` | Homepage: hero, services overview, featured posts, call to action |
| `/about` | Company story, team, values |
| `/services` | List of services, with sections for each |
| `/blog` | Post index, sorted newest first |
| `/blog/[slug]` | Individual post rendered from MDX |
| `/contact` | Contact form and company details |

Shared header (navigation) and footer live in the root layout.

## Fictional company
Use a made-up company throughout. Placeholder name: "Summit Peak Studio" (a small digital agency). Keep copy realistic but clearly fictional. Use placeholder emails and phone numbers (e.g. hello@example.com, 555-0100). Don't use real people, real businesses, or real contact details.

## Conventions
- Use Server Components by default. Add `"use client"` only when needed (forms, interactivity), and tell me why when you do.
- Put reusable UI in `/components`. Keep page files thin.
- Use `next/image` for images and `next/link` for internal links.
- Make every page responsive (mobile first) and keep accessibility basics in place: semantic HTML, alt text, visible focus states, sufficient color contrast.
- Set page metadata (title and description) on every route.
- Keep the design clean and simple. Define colors and fonts once in the Tailwind config, not inline.

## Contact form
Build the form UI and validation first. For submission, use a Next.js route handler (`/app/api/contact/route.ts`) that validates input and logs it for now. Don't connect an email service or database until I ask. Never commit API keys or secrets. Use `.env.local` and keep it in `.gitignore`.

## Workflow
- Before making large changes (new pages, restructuring, installing packages), give me a short plan and wait for my OK.
- Build in this order: project setup, layout and navigation, homepage, about, services, blog, contact.
- After each page, run `npm run build` and `npm run lint` and fix any errors before moving on.
- Make small, focused git commits with clear messages.
- Ask before adding new dependencies. Prefer fewer packages.

## Commands
- `npm run dev`: local dev server at http://localhost:3000
- `npm run build`: production build (run before deploying)
- `npm run lint`: lint check

## Deployment (Vercel)
- Deploy through the Vercel MCP connection or Git integration. Each push to a branch should produce a preview deployment.
- Use preview deployments to check changes before merging to `main`.
- Never put secrets in the repo. Set environment variables in the Vercel project settings.
- If a deployment fails, check the build logs first, then explain what went wrong before fixing it.

## Out of scope (for now)
- Authentication or user accounts
- A database or headless CMS
- E-commerce or payments
- Analytics and third-party tracking scripts
