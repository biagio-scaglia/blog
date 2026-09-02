---
title: "HomuraJS: Rewriting Timelines with a DAG State Engine (★｀･ω･)ゞ"
description: "Announcing the release of HomuraJS, a non-destructive time-travel state engine modeled as a Directed Acyclic Graph (DAG) for JavaScript, React, and WordPress."
pubDate: "Sep 02 2026"
category: "Coding"
tags: ["homura-js", "javascript", "state-management", "react", "wordpress", "anime", "open-source"]
---

![Homura Akemi](https://i.pinimg.com/736x/c6/5c/af/c65caf927060c509c097ed0ce4d726cc.jpg)

If you've watched *Puella Magi Madoka Magica*, you know the story of Homura Akemi: jumping through endless timelines, resetting the clock, and refusing to let past actions disappear into oblivion. (★｀･ω･)ゞ

For the past several months, I've channeled that exact concept into a software architecture problem that has bugged me for years: **undo/redo state destruction**. 

Today, I am proud to announce the official release of **HomuraJS** — a non-destructive time-travel state and DAG history engine for JavaScript, React, Vue, and WordPress!

- **Official Documentation & Live Demos:** [biagio-scaglia.github.io/homura-js/](https://biagio-scaglia.github.io/homura-js/)
- **GitHub Repository:** [github.com/biagio-scaglia/homura-js](https://github.com/biagio-scaglia/homura-js)
- **NPM Package:** [@biagioscaglia/homurajs](https://www.npmjs.com/package/@biagioscaglia/homurajs)
- **WordPress.org Plugin:** [Homura Time Travel Form Recovery](https://wordpress.org/plugins/homura-time-travel-form-recovery/)

Let’s explore why standard undo/redo is fundamentally flawed, how HomuraJS solves it with graph theory, and how you can use it in your projects. (◡‿◡✿)

---

## The Fundamental Flaw of Linear History (ー_ー)

Almost every standard state management solution — from naive undo stacks to Redux-Undo — models history as a **1D linear array**. 

Here is what happens in a conventional undo/redo stack:
1. You perform Action A, Action B, and Action C.
2. You click **Undo** twice (you are back at Action A).
3. You type a new character or change a setting (Action D).
4. **Disaster strikes:** Action B and Action C are permanently sliced and deleted from memory.

In a linear array, there is only one future pointer. Applying any new mutation from a past state destroys every subsequent timeline.

```
       Conventional 1D Linear Stack (Destructive)
       ─────────────────────────────────────────►
       [State A] ──► [State B] ──► [State C] (Undo back to A)
          │
          └──► [State D]  (💥 States B & C are lost forever!)
```

In complex web applications, graphic editors, form wizards, or e-commerce checkouts, this causes silent, accidental data loss. 

---

## The Solution: A Directed Acyclic Graph (DAG) ( ﾟ，_ゝ｀)

HomuraJS completely replaces the linear stack with a **Directed Acyclic Graph (DAG)**. 

Every time you undo and perform a new action, HomuraJS doesn't overwrite the future; it simply forks a new branch. It works like **Git for application state**. You can jump back to any previous state, create experimental timeline branches, and merge them back with zero data loss.

```
            HomuraJS Non-Destructive DAG Branches
            ┌───────────────────────────────────┐
            │                                   │
            │           ┌──► [State B] ──► [C]  │ (Timeline 1 preserved)
            │           │                       │
            │ [State A] ┼──► [State D] ──► [E]  │ (Timeline 2 active)
            │           │                       │
            │           └──► [Experimental F]   │ (Timeline 3 forked)
            └───────────────────────────────────┘
```

Because all state snapshots share immutable memory references via **Copy-On-Write Proxies**, jumping between 10,000 nodes takes less than **0.002 ms** with $O(1)$ dictionary lookups!

---

## Quick Start & Code Example (d^_^)b

Getting started with HomuraJS in TypeScript or JavaScript is straightforward:

```bash
npm install @biagioscaglia/homurajs
```

Here is how you initialize the engine, perform Proxy-draft mutations, and execute non-destructive time travel:

```typescript
import { createHomura } from '@biagioscaglia/homurajs';

interface AppState {
  counter: number;
  user: { name: string; role: string };
}

// 1. Initialize engine
const homura = createHomura<AppState>({
  initialState: { counter: 0, user: { name: 'Homura', role: 'Architect' } }
});

// 2. Mutate via Copy-On-Write Proxy Draft
homura.update(draft => {
  draft.counter += 10;
  draft.user.role = 'Guardian';
}, { label: 'Increment and Promote' });

// 3. Time travel across timelines
homura.undo(); // Reverts to initial state (counter: 0)
homura.createBranch('experimental');
homura.update(draft => { draft.counter = 999; });

// Jump directly to any node ID with O(1) speed
homura.jumpTo('initial-node-uuid');
```

---

## Ecosystem & Multi-Platform Support (★´∀｀★)

HomuraJS was designed as a modular monorepo that supports modern reactive frameworks as well as static and legacy sites:

1. **React 18+ Bindings (`@homura-js/react`)**: Simple hooks like `useHomura()` integrated with `useSyncExternalStore`.
2. **Vue 3 Composition API (`@homura-js/vue`)**: Reactive composables for Vue stores.
3. **Zero-JS Static Forms (`@homura-js/vanilla`)**: Attach `data-homura-form="quote"` to any plain HTML form to get instant LocalStorage crash recovery without writing a line of JS.
4. **Official WordPress Plugin (`v1.2.5`)**: Live on [WordPress.org](https://wordpress.org/plugins/homura-time-travel-form-recovery/). Auto-attaches crash recovery to WooCommerce Checkout, Contact Form 7, WPForms, Gravity Forms, and Elementor.
5. **Embedded Diagnostic DevTools**: A floating, visual DAG tree explorer with a state scrubber and structural diff inspector.
6. **Forensic Bug Reporting (`.homura`)**: Export entire session histories from production crashes and replay them step-by-step in local environments.

---

## Final Thoughts (◡‿◡✿)

Building HomuraJS has been one of the most rewarding engineering journeys for me. It combines my love for anime aesthetics with rigorous algorithmic design and real-world utility.

Whether you're building a rich client-side dashboard, an interactive canvas tool, or just want to make sure your WordPress users never lose their checkout input after a browser crash, HomuraJS is ready for you.

Check out the [live documentation](https://biagio-scaglia.github.io/homura-js/), star the repository on [GitHub](https://github.com/biagio-scaglia/homura-js), and let's rewrite the timeline together!

Until the next compile (◡‿◡✿)

Biagio
