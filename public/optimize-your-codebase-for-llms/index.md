---
title: "How I optimize my codebase for LLMs"
date: "2025-07-21"
spoiler: "LLMs could be REALLY powerful, but they need our help"
---

Ever wondered what makes a task solvable by LLMs?

I believe the term **"context engineering"** could give us a good hint, as [described](https://x.com/tobi/status/1935533422589399127) by Tobi Lutke, Shopify's CEO:

> The art of providing all the context for the task to be plausibly solvable by the LLM

The easier it'll be for LLM to gather all the context required to solve a task, the higher chances it'll actually get done.

Over the past few months of working daily with AI tools, I think I've gathered a few patterns that optimize for exactly that, and I'd like to share them with you.

**A few disclaimers before we deep dive**

- While MCPs, custom rules or prompting techniques are useful for additional context, I intentionally chose to set them aside and focus on the core codebase structure and architecture
- Everything related to AI is changing quickly, I'm not an expert, and definitely still learning - I'd love to learn what worked for you!

## Context is all you need

**TODO:** Some hook

### Less is more

**TODO:** Add a visual

The less context required to solve a task, the simpler it'll be for the LLM.

In other words, patterns that promotes local reasoning

#### Local components vs. Global style sheets

**TODO:** Practical patterns and tips

Dump

- Reasoning in isolation - React, Tailwind
- Colocation - A single repo (or monorepo), crossing the network boundary, backend for frontend

### Standing on the shoulders of giants

**TODO:** Add a visual

**TODO:** Reasoning

**TODO:** Practical patterns and tips

Dump

- Transferable context - don't start from scratch
- Relying on web standards
- Choose the right tools, with the right ecosystem and docs

### Embrace constraints

**TODO:** Add a visual

**TODO:** Reasoning

**TODO:** Practical patterns and tips

Dump

- Clear input and output
- Short feedback loops as a prerequisite for a success criteria (Typescript counts as well)
- Less cognitive load - https://overreacted.io/the-bug-o-notation/
- Rely on abstractions and conventions that minimize the code the LLM has to write
  - Design system
  - ORM
  - Auth

## Humans 🤝 LLMs

It turns out many of the patterns that help humans be more productive also benefit LLMs.

Think about your last hire and his onboarding flow.
