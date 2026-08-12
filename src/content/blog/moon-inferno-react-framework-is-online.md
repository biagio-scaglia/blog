---
title: "Moon Inferno: My Custom React Framework is Online! (★´∀｀★)"
description: "Announcing Moon Inferno, a lightweight, custom React framework designed for compiling ultra-fast static websites. Exploring the GitHub repository and live demo."
pubDate: "Aug 12 2026"
category: "Coding"
tags: ["react", "moon-inferno", "framework", "webdev", "open-source", "javascript"]
---

I am extremely excited to share that after weeks of late-night terminal sessions, empty coffee cups, and infinite compile-debug loops, my custom React framework is officially online! 

It is called **Moon Inferno** (a name inspired by classic cyber-anime and retro-gaming aesthetics), and you can check it out right now:

- **Live Demo:** [biagio-scaglia.github.io/moon-inferno/](https://biagio-scaglia.github.io/moon-inferno/)
- **GitHub Repository:** [github.com/biagio-scaglia/moon-inferno](https://github.com/biagio-scaglia/moon-inferno)

Let's dive into why I built this, how it works, and why I think the web needs a return to lightweight simplicity. d(^_^)b

## Why Build Yet Another React Framework? (ー_ー)

In 2026, the modern frontend landscape is flooded with massive, complex meta-frameworks. They are powerful, but they bring massive bundle sizes, complex hydration logs, and server-side setup overhead that feels completely unnecessary for personal sites, portfolios, or documentation nodes. 

Back in the early 2000s, we built pages with raw HTML, CSS, and maybe a dash of PHP or Perl. They loaded instantly, run on anything, and were easy to understand.

I wanted that exact same lightweight output, but with the modern developer experience of component-based design. 

**Moon Inferno** is a static-site compiler for React. It allows you to write standard, modular React components using JSX, but instead of shipping a massive JavaScript bundle to the browser, it compiles everything down to pure, semantic, static HTML and vanilla CSS. 

Zero client-side JS bloat by default. Just fast, clean pages. 

```
     [ Moon Inferno Compiler Output ]
     ┌───────────────────────────────┐
     │ Source: React + JSX + TS      │
     │ Compilation: Static HTML/CSS  │
     │ Client-Side JS: 0 KB (Clean!) │
     │ Status: online_and_serving    │
     └───────────────────────────────┘
```

## How It Works (◡‿◡✿)

Writing pages in Moon Inferno is designed to be incredibly simple and familiar if you already know React. Here is a basic example of a page component:

```jsx
// index.jsx - A simple page in Moon Inferno
import { Page, Card } from 'moon-inferno';

export default function Home() {
	return (
		<Page title="My Cyber Node">
			<main class="container">
				<h1>Welcome to the Net!</h1>
				<Card theme="blue">
					<p>This layout is compiled to pure static HTML.</p>
					<p>No client-side runtime hydration is required.</p>
				</Card>
			</main>
		</Page>
	);
}
```

Behind the scenes, the builder parses your component tree, extracts your styles, and generates static pages ready to be served from any CDN (like GitHub Pages, Vercel, or Netlify). It gives you the component encapsulation of React without forcing the end-user's device to download a heavy runtime.

## Open Source and Future Plans (★´∀｀★)

Moon Inferno is completely open source. The repository is hosted on GitHub under [biagio-scaglia/moon-inferno](https://github.com/biagio-scaglia/moon-inferno). 

This is still the initial release, and I have plenty of ideas for the future:
- Custom static asset optimization rules
- Built-in Markdown and MDX parsing for blogging
- Vintage layout presets (Win95, GeoCities templates out of the box!)

If you want to tinker with it, clone the repo, star it, or open an issue. Let's build a lighter, cleaner, independent web together. 

See you in the next log! (◡‿◡✿)

Biagio
