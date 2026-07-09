# 🛸 Biagio Cyberspace

A personal blog built with [Astro](https://astro.build), inspired by the charm of the independent web of the late '90s and early 2000s. This is Biagio Scaglia's small corner of the Internet — a place created out of passion, curiosity, and a love for sharing, not to chase numbers or algorithms.

**Live:** [biagiocyberspace.it](https://biagiocyberspace.it/)

## ✨ Features

- 🖥️ **Retro-inspired design** — Window-style UI components, 88x31 badges, hit counter, shoutbox, guestbook, webring, and a music player that evokes the GeoCities era
- 📝 **Blog with Markdown & MDX** — Content collections with typed frontmatter
- 🗺️ **SEO-friendly** — Canonical URLs, Open Graph, sitemap, and RSS feed
- 🤖 **LLM-discoverable** — `llms.txt` and `llms-full.txt` for AI crawlers
- 🎨 **SCSS design system** — Variables, patterns, and a global stylesheet
- 🚀 **Automated deploy** — GitHub Actions CI/CD to GitHub Pages

## 🗂️ Project Structure

```text
├── public/                  # Static assets (favicons, manifest, robots.txt, llms.txt)
├── src/
│   ├── assets/              # Fonts & images processed by Astro
│   ├── components/
│   │   ├── Header.astro         # Site header & navigation
│   │   ├── Footer.astro         # Site footer
│   │   ├── Sidebar.astro        # Retro sidebar with widgets
│   │   ├── Window.astro         # Draggable window-style container
│   │   ├── MusicPlayer.astro    # Embedded music player widget
│   │   ├── Shoutbox.astro       # Shoutbox widget
│   │   ├── Guestbook.astro      # Guestbook widget
│   │   ├── Badge88x31.astro     # Classic 88x31 pixel badge
│   │   ├── HitCounter.astro     # Retro hit counter
│   │   ├── MoodWidget.astro     # Current mood widget
│   │   ├── Webring.astro        # Webring navigation
│   │   ├── ArticleCard.astro    # Blog post card
│   │   ├── BaseHead.astro       # <head> with meta, OG, fonts
│   │   └── ...
│   ├── content/
│   │   └── blog/            # Blog posts (Markdown)
│   ├── layouts/
│   │   └── RetroLayout.astro    # Main retro-themed layout
│   ├── pages/
│   │   ├── index.astro          # Homepage
│   │   ├── about.astro          # About page
│   │   ├── interests.astro      # Interests page
│   │   ├── blog/                # Blog listing & post pages
│   │   ├── rss.xml.js           # RSS feed endpoint
│   │   └── 404.astro            # Custom 404 page
│   ├── styles/
│   │   ├── global.scss          # Global styles
│   │   ├── _variables.scss      # SCSS variables & tokens
│   │   └── _patterns.scss       # Reusable SCSS patterns
│   ├── consts.ts            # Site title & description
│   ├── content.config.ts    # Content collection schemas
│   └── env.d.ts             # Astro client type definitions
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deploy pipeline
├── astro.config.mjs         # Astro configuration
├── tsconfig.json            # TypeScript configuration
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project:

| Command            | Action                                           |
| :----------------- | :----------------------------------------------- |
| `npm install`      | Install dependencies                             |
| `npm run dev`      | Start local dev server at `localhost:4321`        |
| `npm run build`    | Build the production site to `./dist/`            |
| `npm run preview`  | Preview the build locally before deploying        |
| `npm run deploy`   | Build and deploy to GitHub Pages via `gh-pages`   |

## 🚀 Deployment

The site deploys automatically to **GitHub Pages** on every push to `master` or `main` via a [GitHub Actions workflow](.github/workflows/deploy.yml).

You can also deploy manually with:

```sh
npm run deploy
```

This builds the site and publishes the `dist/` folder to the `gh-pages` branch.

## 🛠️ Tech Stack

- [Astro](https://astro.build) v7
- [MDX](https://mdxjs.com/) for rich content
- [SCSS](https://sass-lang.com/) for styling
- [TypeScript](https://www.typescriptlang.org/) for type safety
- [Sharp](https://sharp.pixelplumbing.com/) for image optimization

## 📄 License

This is a personal project. All blog content and original assets are © Biagio Scaglia.
