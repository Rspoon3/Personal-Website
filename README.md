# Personal Website

## Blog

Posts are plain markdown files in `src/content/blog/`. The file name becomes the URL (`my-post.md` → `/blog/my-post`).

```md
---
title: My Post
description: One sentence shown in the list and in link previews. (optional)
date: 2026-11-16
tags: [swift, ios]            # optional
draft: true                   # optional; drafts show in `npm run dev` but not in production
cover: ./images/my-cover.png  # optional; shown in the list and used for social previews
coverAlt: Describe the cover   # optional
updated: 2026-11-20           # optional
---

Write markdown here.

![Alt text](./images/screenshot.png)
![A GIF](./images/demo.gif)
```

- **Images and GIFs:** put them in `src/content/blog/images/` and reference them with a relative path. Astro optimizes them at build time. GIFs keep their animation, but are served as animated WebP.
- **Drafts:** `draft: true` posts are hidden from production builds. Remove the line to publish.
- **Ignored files:** file names starting with `_` are not treated as posts.
- **Feed:** `/blog/rss.xml`. Tag pages live at `/blog/tags/<tag>`.
- **Site URL:** the `site` value in `astro.config.mjs` is used for the RSS feed and canonical links.

# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
