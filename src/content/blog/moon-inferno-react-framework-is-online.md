---
title: "Moon Inferno: My Custom React UI Framework is Online! (★´∀｀★)"
description: "Announcing Moon-Inferno, an accessibility-first React UI framework and design system built for retro, Y2K, CRT, cyberpunk, and pixel art web applications."
pubDate: "Aug 12 2026"
category: "Coding"
tags: ["react", "moon-inferno", "design-system", "webdev", "open-source", "accessibility"]
---

I am extremely excited to share that after weeks of late-night terminal sessions, empty coffee cups, and infinite compile-debug loops, my custom UI framework is officially online! 

It is called **Moon-Inferno** (a name inspired by classic cyber-anime and retro-gaming aesthetics), and you can check out the official documentation and demos right now:

- **Live Demo & Docs:** [biagio-scaglia.github.io/moon-inferno/](https://biagio-scaglia.github.io/moon-inferno/)
- **GitHub Repository:** [github.com/biagio-scaglia/moon-inferno](https://github.com/biagio-scaglia/moon-inferno)

Let's dive into the core philosophy behind the framework, how to get started, and some of the cool components I've built. d(^_^)b

## The Philosophy: Retro Style, Modern Accessibility (ー_ー)

Back in the early 2000s, the web had *character*. We had animated GIFs, CRT scanline effects, retro layouts, and experimental designs. But let's be honest: those pages were a nightmare for accessibility. 

I wanted to build a UI framework that reclaims that expressive, retro aesthetic without sacrificing modern standards. 

**Moon-Inferno** is an accessibility-first React UI library and design system. Every component is built from the ground up to be **WCAG 2.1 AA Compliant**. That means you get:
- High-contrast focus rings (`:focus-visible`) for all interactive elements.
- Full keyboard traversal and navigation patterns (supporting arrows, PageUp/Down, Home/End, and Escape).
- Complete WAI-ARIA roles and attributes.
- Reduced motion safety for users who prefer static pages.

```
       [ Moon-Inferno System Info ]
     ┌───────────────────────────────┐
     │ Framework: React + TypeScript │
     │ Theme Modes: Inferno, Terminal│
     │ Accessibility: WCAG 2.1 AA    │
     │ Icon Count: 34 Custom Vectors │
     └───────────────────────────────┘
```

## Getting Started (◡‿◡✿)

Moon-Inferno is managed as a clean monorepo divided into four lightweight packages. To install the ecosystem in your React project, run:

```bash
npm install @moon-inferno/core @moon-inferno/react @moon-inferno/themes @moon-inferno/icons
```

To set up the framework and apply the signature design system, import the styles and set the theme in your main entry point (e.g., `main.tsx`):

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import Moon-Inferno styles and theme engine
import '@moon-inferno/react/styles.css';
import { setTheme } from '@moon-inferno/themes';

// Initialize signature theme ('moon-inferno', 'terminal', or 'y2k')
setTheme('moon-inferno');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## Experimental Components & Custom FX (★´∀｀★)

The framework comes packed with unique component primitives that make building retro-futuristic UIs incredibly fun:

* **Text Effects & Tickers**:
  - `<GlitchText text="ERROR_404" as="h1" />` — Cyberpunk glitching title.
  - `<TypingText text="Booting..." speed={40} cursorChar="█" />` — Retro console typist effect.
  - `<NeonText text="INFERNO" flicker />` — Glowing cathode neon light.
  - `<Marquee speed={18} variant="pixel">...</Marquee>` — Classic crawling marquee banner.

* **Containers & Shaders**:
  - `HoloCard` — A 3D interactive card with cursor-based parallax tilt and holographic glare reflections.
  - `PixelContainer` — Arcade window container with stepped pixel borders and retro title bars.
  - `MatrixRain` — An ASCII rain canvas backdrop with adjustable speed and custom colors.
  - `CRTEffect` — A fullscreen retro scanline shader overlay with flicker animation.

* **Status Beacons & UI Controls**:
  - `<SignalLight status="online" pulse label="NODE_ONLINE" />` — Simple status indicators (`online`, `warning`, `busy`, `offline`).
  - `CommandPalette` — Accessible modal Cmd+K search combobox.
  - Custom themed Buttons, Inputs, Checkboxes, Switches, and Sliders.

## Open Source and Contributions

This is just the beginning for Moon-Inferno. I'm planning on adding more vintage theme presets, more custom iconography to the `@moon-inferno/icons` package, and even more visual shaders.

Check out the code, star the repository, or open a pull request on [GitHub](https://github.com/biagio-scaglia/moon-inferno). 

Let's build a more expressive web. 

See you in the next log! (◡‿◡✿)

Biagio
