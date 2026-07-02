---
title: "Biagio Cyberspace: How I Rebuilt the 2003 Web in 2026"
description: "A nostalgic journey through HTML tables, beveled SCSS styling, and pixel art to rediscover the joy of hand-crafted websites."
pubDate: "Jul 02 2026"
category: "Coding"
tags: ["astro", "css", "web-history", "retro"]
cover: "/src/assets/retro_desktop.png"
gallery: ["/src/assets/retro_cat.png"]
---

There is something magical about browsing an old GeoCities or Angelfire page saved on the Wayback Machine. It's not just passive nostalgia for the days when MIDI music would autostart (often scaring us half to death); it's the feeling of visiting a digital space that actually belonged to someone, built by hand, pixel by pixel.

Today, the web is dominated by clean, minimalist, almost sterile layouts. All websites look somewhat similar, trapped in ultra-optimized grids and corporate design systems. That's why I decided to build this blog: a small personal corner of the web that looks like it survived the Internet Explorer 6.0 era, but with a modern technological soul.

I call it Biagio Cyberspace.

## The Architecture Under the Hood

From a visitor's perspective, this site is a trip back to 2003. Repeating tile wallpapers, double-beveled window borders, gradient title bars, and a music player that closely resembles the legendary Winamp.

But when it comes to the code, I didn't want to sacrifice maintainability. I chose a solid, modern stack:
- **Astro:** to generate blazing-fast static pages without shipping useless JavaScript to the browser.
- **TypeScript:** to ensure post data and component props are always typed correctly.
- **SCSS:** to structure retro styles modularly, defining variables for pastel color palettes and mixins for 3D borders.

Every visual element is a separate component. The sidebar aggregates independent widgets (the calendar, the music player, the tag cloud, and the archives), making the project extremely easy to expand.

## The Return of the Beveled Border

If there is one thing that defines the aesthetics of operating systems like Windows 95 or early web design, it's the 3D relief effect (the beveled border). Recreating it in pure CSS without relying on heavy image slices was incredibly fun.

Instead of relying on modern flat designs, I wrote SCSS mixins that play with light and shadow color contrasts on the border properties:

```scss
@mixin win95-border-outset {
  border: 2px solid;
  border-color: #ffffff #808080 #808080 #ffffff;
}
```

This simple trick gives the buttons and windows of this blog that physical, chunky feel typical of classic desktop software. When you click a button, the border colors invert, giving an immediate tactile feedback that modern flat buttons have completely forgotten.

## Why Do This Today?

Rebuilding a site like this isn't just a stylistic exercise. It's a reflection on the direction web design has taken. We traded personality for corporate efficiency.

With Biagio Cyberspace, I wanted to prove that we can have both. The site loads instantly, features a valid RSS feed, a sitemap, and complete Open Graph metadata, yet it retains the imperfect, expressive charm of the early 2000s web.

If you've wandered this far, feel free to browse the old logs, look at the uploaded image dump, and sign your name in the guestbook. Happy surfing!
