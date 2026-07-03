---
title: "Why I Still Love React in 2026 (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧"
description: "After years of framework wars, hot takes, and new shiny tools every week, React is still my favorite library. Here's why it stuck with me."
pubDate: "Jun 22 2026"
category: "Coding"
tags: ["react", "typescript", "javascript", "frontend", "webdev"]
---

Every few months, a new tweet goes semi-popular claiming that React is dead, or dying, or should be replaced by something newer and shinier. And every few months, I open my editor, write `useState`, and keep building things that work ¯\\\_(ツ)\_/¯

I've been working with **React** professionally for several years now. I've used it to build enterprise dashboards, mobile apps with React Native, and personal projects like my app **Vellum - RPG Companion**. And despite trying alternatives (I genuinely like Svelte, and Solid is fascinating), I keep coming back to React.

Here's why.

## The mental model just clicks (☞ﾟ∀ﾟ)☞

React's core idea — UI as a function of state — is one of those concepts that, once it clicks, changes how you think about interfaces forever. You describe *what* the UI should look like for a given state, and React figures out *how* to get there.

No manual DOM manipulation. No jQuery spaghetti. No imperatively toggling CSS classes and hoping everything stays in sync.

```tsx
function Greeting({ name }: { name: string }) {
  return <h1>Hello, {name}!</h1>;
}
```

This is just a function. It takes data, returns UI. That's it. That simplicity is what hooked me from day one, back when I was still building sites with plain HTML and inline JavaScript events.

## Hooks changed everything ✨

When hooks landed, it felt like the library had been reborn. Suddenly, all those awkward class component lifecycle methods (`componentDidMount`, `componentWillUnmount`, that weird `getDerivedStateFromProps` thing) could be replaced with clean, composable functions.

I remember the first time I refactored a class component into a hook-based one. The file went from 180 lines to about 60. Same functionality, a fraction of the ceremony. I literally did a small fist pump at my desk (ง •̀_•́)ง

Custom hooks are where the real magic lives. Need to debounce an input? `useDebounce`. Need to sync state with localStorage? `useLocalStorage`. Need to track if the user is online? `useOnlineStatus`. You write them once, and they become part of your personal toolkit — like a folder of scripts on a floppy disk you carry everywhere.

## TypeScript + React = ♡

If React is the engine, TypeScript is the seatbelt that keeps you from flying through the windshield. The combination of the two is, in my opinion, the best developer experience available in frontend today.

Typing your props, your state, your context, your hooks — it sounds tedious until it saves you from a production bug at 11 PM on a Friday. And then you become a convert.

```tsx
interface Post {
  id: string;
  title: string;
  publishedAt: Date;
  tags: string[];
}

function PostCard({ post }: { post: Post }) {
  return (
    <article>
      <h2>{post.title}</h2>
      <time>{post.publishedAt.toLocaleDateString()}</time>
    </article>
  );
}
```

Try passing a number where a string is expected. TypeScript will slap your hand before the code even runs. Beautiful.

## The ecosystem is unmatched

This is the pragmatic argument. React's ecosystem is enormous:

* **React Native** for cross-platform mobile apps (I built Vellum with it!)
* **Next.js** and **Remix** for full-stack web applications
* **TanStack Query** for server state management
* **Zustand**, **Jotai**, **Redux Toolkit** for client state
* **Framer Motion** for animations that actually feel good
* **React Testing Library** for tests that make sense

Whatever problem you're solving, someone has probably built a well-maintained library for it. That's not a weakness — it's a superpower.

## It's not perfect, and that's fine (´-ω-`)

React has real flaws. The `useEffect` foot-gun is real. Server Components are conceptually fascinating but practically confusing at times. Performance optimization sometimes requires arcane knowledge of `useMemo` and `useCallback`.

But every tool has trade-offs. What matters to me is that React lets me ship products, iterate quickly, and maintain codebases over years without wanting to rewrite everything from scratch.

## The real reason, though

If I'm being completely honest, the real reason I love React isn't technical. It's emotional.

React is the first library that made me feel like I could build **anything**. Before React, I was writing jQuery plugins and struggling with Backbone.js. The idea of building a complex, interactive application felt intimidating.

React made it approachable. It broke everything down into small, manageable pieces. *"Just build a component. Then another. Then compose them."*

> That philosophy changed my career. It's the reason I became a full-stack developer. It's the foundation of every project I've shipped.

So yeah, I still love React in 2026. Sue me (⌒▽⌒)☆

— Biagio
