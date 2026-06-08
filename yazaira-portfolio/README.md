# Yazaira Luna — Portfolio

Personal portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

---

## Quick Start

```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

---

## Updating Content

All content lives in **`/content/`** — no code changes needed.

| File | What it controls |
|------|-----------------|
| `content/site.ts` | Name, email, LinkedIn, About text, Fun Facts, Currently Loving cards |
| `content/projects.ts` | All four projects — copy, images, metrics, documents |

### Update Currently Loving
1. Open `content/site.ts`
2. Edit `title`, `author`/`artist`/`brand`, `note`, `image` path
3. Drop new image into `public/images/currently-loving/`

### Add a new project
1. Open `content/projects.ts`
2. Copy an existing project object, fill in your info
3. Drop images into `public/images/works/your-project/`
4. The Work page auto-generates — no code changes needed

### Update your résumé
Replace `public/resume/resume.pdf` — same filename, instant update.

---

## Project Structure

```
yazaira-luna-portfolio/
├── content/
│   ├── site.ts            ← About, Fun Facts, Currently Loving
│   └── projects.ts        ← All case studies
├── public/
│   ├── images/
│   │   ├── photos/        ← polaroid.jpg  headshot.jpg  smiling.jpg
│   │   ├── currently-loving/  ← book.jpg  song.jpg  beauty.jpg
│   │   └── works/
│   │       ├── brfva/
│   │       └── chophouse/
│   └── resume/
│       ├── resume.pdf
│       ├── brfva-brand-guide.pdf
│       ├── chophouse-brand-guide.pdf
│       └── tazo-campaign-book.pdf
└── src/
    ├── app/
    │   ├── layout.tsx         ← Root layout + fixed nav offset
    │   ├── page.tsx           ← Landing page  (route: /)
    │   ├── about/page.tsx     ← About page    (route: /about)
    │   └── work/page.tsx      ← Work page     (route: /work)
    ├── components/
    │   ├── layout/Navbar.tsx
    │   └── sections/ContactForm.tsx
    └── styles/globals.css
```

---

## Routing

Each page is a real Next.js route — no JavaScript show/hide tricks.

| URL | Page |
|-----|------|
| `/` | Landing |
| `/about` | About |
| `/about#contact` | About, scrolled to contact |
| `/work` | Creative Work |

---

## Deploying to Vercel

### Option A — Drag & Drop (easiest, ~2 min)
1. Go to [vercel.com](https://vercel.com) → create free account
2. Click **Add New Project**
3. Drag this folder in (or connect GitHub repo)
4. Vercel auto-detects Next.js → click **Deploy**
5. Live in ~60 seconds ✓

### Option B — Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
```

### Option C — GitHub Auto-Deploy (recommended for ongoing updates)
1. Push folder to a GitHub repo
2. vercel.com → New Project → Import from GitHub
3. Select repo → Deploy
4. Every future `git push` auto-deploys ✓

### Custom Domain
Vercel Dashboard → Settings → Domains → add your domain → follow DNS instructions.

---

## Built With
- [Next.js 15](https://nextjs.org)
- [TypeScript](https://typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://framer.com/motion)
- Google Fonts: Libre Bodoni · Over the Rainbow · Montserrat · Courier Prime
