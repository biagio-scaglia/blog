---
title: "KawaiJS: A Web-Native Visual Novel Engine Inspired by Ren'Py (⁠★⁠u⁠★⁠)"
description: "KawaiJS is an open-source browser visual novel engine with Ren'Py-style .kawa scripting, CSS UI, save/load, backlog, VFX, and static exports for GitHub Pages, Netlify, Vercel, and itch.io."
pubDate: "Sep 12 2026"
category: "Coding"
tags: ["kawaijs", "kawa", "visual novel engine", "renpy", "browser games", "typescript", "javascript", "html5", "css", "web game", "open-source", "interactive fiction", "itch.io"]
---

Hello, travellers of the information superhighway! (⁠/⁠^⁠-⁠^⁠(⁠^⁠^⁠*⁠)⁠/ ☆ﾟ.*・｡ﾟ

Some nights I do not want another dashboard. I want cherry blossoms drifting past a classroom window, a choice menu that feels like a confession, and a script that reads like a story instead of a pile of `if` statements.

That is how **KawaiJS** started — as a soft little obsession after too many evenings with Ren'Py, old personal homepages, and the thought: *why can't this whole visual novel just be a static site?* (⁠>⁠<⁠)

Today the open-source **web-native visual novel engine** is public.

- **Playable documentation (interactive VN):** [biagio-scaglia.github.io/KawaiJS](https://biagio-scaglia.github.io/KawaiJS/)
- **Narrative showcase — *After the Bell*:** [biagio-scaglia.github.io/KawaiJS/showcase](https://biagio-scaglia.github.io/KawaiJS/showcase/)
- **In-browser .kawa playground:** [biagio-scaglia.github.io/KawaiJS/playground](https://biagio-scaglia.github.io/KawaiJS/playground/)
- **GitHub repository:** [github.com/biagio-scaglia/KawaiJS](https://github.com/biagio-scaglia/KawaiJS)
- **npm package:** [kawaijs](https://www.npmjs.com/package/kawaijs)

---

## What Is KawaiJS? Ren'Py-Style Storytelling for the Modern Web (⁠ﾉ⁠◕⁠ヮ⁠◕⁠)⁠ﾉ⁠*⁠・ﾟ✧

KawaiJS brings Ren'Py-inspired authoring to the browser. You write indentation-based **`.kawa` scripts**, skin the player with ordinary **HTML/CSS**, and ship a static folder to GitHub Pages, Netlify, Vercel, Cloudflare Pages, or itch.io — no backend, no canvas lock-in.

Out of the box you get the rituals visual novel players expect:

* Main menu with Start / Continue / Load
* Multi-slot save & load (plus shareable continue links)
* Dialogue backlog / history
* Preferences (text speed, auto-forward, music & SFX volumes)
* Rollback, auto mode, skip mode
* CG gallery, achievements, optional PWA install
* SEO helpers (favicon, Open Graph, Twitter cards, JSON-LD) via `kawa.config.json`

And yes — sakura particles, rain, fog, camera shake, fullscreen CG, clickable hotspots, themes like `noir` / `sakura` / `ocean`. The kind of small magic that used to live on handmade HTML pages and forum signatures. (⁠★⁠u⁠★⁠)

---

## Quick Start: Create a Browser Visual Novel in Three Commands (⁠･⁠ω⁠･⁠)⁠b

```bash
npx kawa create my-novel
cd my-novel
npx kawa dev
```

A tiny taste of **Kawa script** syntax:

```kawa
title: "The Melancholy of Yumia"
author: "Biagio Scaglia"

character yumia "Yumia" #f43f5e
character sensei "Sensei" #38bdf8

label start:
    scene bg classroom with fade
    vfx sakura
    play music "bgm_peaceful.mp3" fadein 2.0 loop

    show yumia happy at center with bounce
    yumia "Good morning, Sensei! Welcome to the {b}Game Dev Club{/b}."

    menu:
        "Ask about the club project":
            jump ask_project
        "Leave quietly":
            jump leave_early
```

Production build is one command too: `npx kawa build` → a self-contained `dist/` ready to host.

Under the hood it is a proper TypeScript monorepo — parser, StoryVM, Web Audio, DOM renderer, Vite plugin, CLI — but the point of the night is simpler: open `localhost:3000` and watch a character appear with a bounce. (⁠^⁠‿⁠^⁠)v

---

## Why a Web-Native Visual Novel Engine?

I already love Ren'Py. I also love the independent web: personal pages, webrings, guestbooks, things you can host with almost nothing.

KawaiJS sits in that overlap. Script like a novelist. Style like a webmaster. Deploy like a static site. Deep-link into a label with `?at=…`, embed with `?embed=1`, copy a continue link from Save/Load and send someone mid-story.

If you have ever customized a Winamp skin, stayed too late on a GeoCities homepage, or written your first `label start:` in Ren'Py and felt the room get quieter… this might feel familiar. (っ•‿•)っ

---

## Try KawaiJS, Fork It, Break the Parser (⁠b⁠o⁠_⁠o⁠)⁠b

Star it, fork it, break the parser, send a weird `.kawa` file that makes the lexer cry. MIT, always.

I will be in the terminal with sakura particles on and the text speed set slightly too fast.

See you around the cyberspace!

— Biagio ☆ﾟ.*・｡ﾟ
