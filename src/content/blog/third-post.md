---
title: 'Hand-Crafted Webs: The Art of Nested Tables and Spacer GIFs'
description: 'Looking back at how we designed personal web pages before Flexbox and Grid, using nested HTML tables and 1x1 transparent GIFs.'
pubDate: 'Jul 22 2022'
heroImage: '../../assets/blog-placeholder-2.jpg'
category: 'Coding'
tags: ['astro', 'css', 'design']
---

Before the era of Flexbox, CSS Grid, and responsive design systems, web layout was a wild frontier. If you wanted to build a personal homepage in 2002, your primary tool wasn't a CSS stylesheet. It was the humble HTML `<table>` tag.

Designing a site was an exercise in grid arithmetic, nesting tables inside tables, and praying that Netscape Navigator and Internet Explorer would render them the same way.

## The Magic of spacer.gif

One of the most legendary hacks of the early web was the **spacer GIF**. 

Because browsers back then didn't support margins or padding reliably, developers created a 1x1 pixel transparent GIF. If you needed a 20-pixel gap between a sidebar and your main content, you would insert the image and stretch it:

```html
<img src="images/spacer.gif" width="20" height="1" alt="" />
```

It was crude, it polluted the markup, but it worked. It was the glue that held the visual web together for a decade.

## Slicing Images in Photoshop

If you wanted a fancy layout with rounded corners or custom interface panels, the workflow was a true ritual:
1. Draw the entire interface as a single image in Adobe Photoshop 5.5 or Paint Shop Pro.
2. Use the "Slice Tool" to cut the design into dozens of tiny rectangular images (corners, borders, buttons).
3. Export them using "Save for Web" (optimizing every single GIF to keep it under 5KB).
4. Let Photoshop generate a massive, nested HTML table that reconstructed the slices.

If you made a mistake and one image was even 1 pixel off, the entire layout would shatter, stretching cells in bizarre ways.

## Reclaiming the Craft

Today, we build sites using tools like Astro, TypeScript, and SCSS. We can write clean, semantic markup, and position elements with a single line of CSS. It is faster, more accessible, and incredibly efficient.

Yet, there is a distinct beauty in remembering those manual hacks. The old web felt physical. Every layout was a puzzle solved with ingenuity and a few transparent pixels. While we embrace modern tools, we can still channel that hand-crafted spirit, building sites that feel personal, expressive, and a little bit wild.
