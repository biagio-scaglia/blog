---
title: "Yumia-MD: Presentations as Code — PPTX, PDF & HTML from One Source (ー_ー)"
description: "Yumia-MD is an open-source design compiler for presentations: write semantic slides once, export editable PowerPoint, vector PDF, and interactive HTML. Includes yumia explain design audits."
pubDate: "Sep 06 2026"
category: "Coding"
tags: ["yumia-md", "yumiamd", "presentations as code", "powerpoint", "pptx", "pdf", "html", "typescript", "open-source", "design compiler", "slide generator", "markdown presentations"]
---

I have spent years watching presentation tools fight the wrong problem.

PowerPoint and Keynote ask you to move rectangles. Markdown slide tools ask you to sprinkle CSS into prose. Neither one asks the only question that matters: *what are you trying to say?* (ー_ー)

So I built a compiler for that question.

Today I am releasing **Yumia-MD** (npm: `yumiamd`) — an open-source **programming language for visual documents**. You describe communicative intent; Yumia handles structure, composition, design, and multi-format export to **editable PPTX**, **vector PDF**, and **interactive HTML**.

- **Official docs & playground:** [yumiamd.org](https://yumiamd.org/)
- **Source on GitHub:** [github.com/biagio-scaglia/Yumia-MD](https://github.com/biagio-scaglia/Yumia-MD)
- **Live demo site:** [biagio-scaglia.github.io/Yumia-MD](https://biagio-scaglia.github.io/Yumia-MD/)

---

## Why Yumia-MD Beats Canvas Dragging and Screenshot Decks ( ﾟ，_ゝ｀)

Traditional slide software models a deck as absolute canvas coordinates. Resize the frame and everything breaks. Rasterize to PPTX and you get pictures of slides, not slides.

Yumia starts from a **semantic AST**. You write intent primitives like `hero`, `metric`, `compare`, `timeline`, `chart`, `card`, and `grid`. The design system places them. The renderers emit real artifacts:

```
                  CONTENT & COMMUNICATIVE INTENT
                                │
                                ▼
                       YUMIA SEMANTIC AST
                                │
                                ▼
                  DESIGN SYSTEM & COMPOSITION
                                │
        ┌───────────────────────┼───────────────────────┐
        ▼                       ▼                       ▼
 │  Editable PPTX  │   │  Vector PDF  │   │  HTML + HUD  │
 │  OpenXML shapes │   │  mm precision│   │  live inspect│
```

That last part still makes me smile late at night: PowerPoint output is **native OpenXML** — real editable shapes and charts, not screenshots glued into a deck.

---

## Quick Start: Write a .yumia Deck and Compile It (d^_^)b

```yumia
document "Q4 Financial Trajectory"
  theme "corporate"
  aspectRatio "16:9"

slide "Revenue & Growth"
  hero title="Hyper-Growth Execution" subtitle="ARR beats quarterly target by 42%" badge="Q4 Audit" align="center"

  grid columns=3 gap=20
    metric "$24.8M" label="ARR Run-Rate" diff="+142% YoY" variant="success" trend="up"
    metric "118%" label="Net Retention" diff="+4%" variant="primary" trend="up"
    metric "9.2x" label="LTV / CAC" diff="+1.8x" variant="accent" trend="up"

  chart type="bar" title="Quarterly ARR ($M)" labels="Q1,Q2,Q3,Q4" data="12.4,15.8,19.2,24.8"
```

Then:

```bash
npx yumiamd init my-deck --theme corporate
npx yumiamd dev presentation.yumia.md --open
npx yumiamd build presentation.yumia.md --out presentation.pptx
```

Same source, three surfaces. PPTX for the meeting room. PDF for the archive. HTML for the browser, with a Design HUD if you press `I` or Alt+click an element. (◡‿◡✿)

Beyond charts and metrics, Yumia also compiles **PlantUML-style sequence/class diagrams**, flow diagrams, reusable `component` macros, and KaTeX math — still from one semantic source.

---

## Design Intelligence: `yumia explain` and Visual Audits

The piece I care about most is not the exporters. It is the compiler noticing when a deck is visually tired.

```bash
yumia explain presentation.yumia
```

It reports typography scale, contrast, density, hierarchy, and awkward rhythm — the slide that suddenly has 38% more text than average, or three identical card layouts in a row. There is also `yumia check` for structured diagnostics, and `yumia schema` if you want LLMs to generate against a deterministic grammar instead of inventing broken HTML.

That was the quiet design goal: **AI-friendly because the language is unambiguous**, not because a chat box was bolted onto a canvas.

---

## Who Yumia-MD Is For

I like tools that feel like late-90s personal software: small, opinionated, built for one clear craft. Yumia is my answer to “presentations as code” without pretending Markdown alone is enough design.

Reach for it if you want:

* one source file instead of fragile pixel layouts
* native editable PowerPoint instead of screenshot PPTX
* vector PDF with real typography
* a linter that cares about visual rhythm before you present

Clone it, break it, file issues, send pull requests. MIT, as usual.

Until the next compile (★｀･ω･)ゞ

Biagio
