---
title: "Optimize for humans now, benefit from LLMs later"
date: "2025-08-04"
spoiler: "It tends to help LLMs too"
---

Congratulations!

A new developer has joined your team.
She's passionate, eager to learn, with an exceptional work rate.

How long until she ramp up and start contributing to the codebase? Days? Maybe weeks?

I understand. She need to setup her local environment, go over the docs, study the system architecture.

Then, her first pull request arrives! And so does your review:

- "Please leverage our design system"
- "Make sure to log potential errors"
- "Use our custom `fetch` wrapper when making API calls"

No one blames her, it wasn't clear from the docs, and the CI checks are all green - this is why we do code reviews after all, and there will be less and less comments over time.

"You're absolutely right.", until the next commit.

Oh, did I mention her name?

**It's "Cursor"**.

And there are many more like her on their way, are you ready to onboard them all?

## It's all about context

Ever wondered what makes a task solvable by LLMs?

I believe the term **"context engineering"** could give us a good hint, as [described](https://x.com/tobi/status/1935533422589399127) by Tobi Lutke, Shopify's CEO:

> The art of providing all the context for the task to be plausibly solvable by the LLM

The easier it'll be for LLM to gather all the context required to solve a task, the higher chances it'll actually get done.

If you think about it, the same statement also applies to a new (human) hire.

While AI is changing quickly, I figured it's time to write down the core patterns I always find myself hold on to, optimizing codebases for humans:

So instead of focusing on the AI landscape that changes every week now, I figured it's time to focus on the patterns that I keep coming back to, the one that haven't changed in years.

These are the ones I use to optimize a codebase for humans:

1. Embrace standards
2. Shorten the feedback loop
3. Constraints
4. Facilitate local reasoning


What I, and [others](https://x.com/kentcdodds/status/1950932680201126169) have come to find, is that the patterns that made the life of humans easier, tends to be really good for LLMs too.

Optimize for humans now, benefit from LLMs later. Let's go.

## Embrace standards

Dump
- ?

## Shorten the feedback loop

Dump
- Humans find it easy to split complex tasks into smaller ones
- Quick feedback loops allow exactly that
- 

## Constraints

Dump
- ?

## Facilitate local reasoning

Arguably the most important one on the list.


Dump
- https://sophiebits.com/2020/01/01/fast-maintainable-db-patterns
- React
- Tailwind
- Pure functions (and services?)
- E2E tests
- Colocation

> you should be able to worry about each part of your code in isolation, without holding the entire system in your head

## Conclusion

Dump
- ?

----

**A few disclaimers before we deep dive**

- While MCPs, custom rules or prompting techniques are useful for additional context, I intentionally chose to set them aside and focus on the core codebase structure and architecture
- Everything related to AI is changing quickly, I'm not an expert, and definitely still learning - I'd love to learn what worked for you!

## Context is all you need

**TODO:** Some hook

### Less is more

**TODO:** Add a visual

The less context required to solve a task, the simpler it'll be for the LLM.

In other words, patterns that promotes local reasoning will optimize our codebase for LLMs. Let's take a look at a few:

#### Local components vs. Global style sheets

Let's take a look at this CSS class:

```css
main > section button {
  border-radius: 1rem;
}
```

Which will match the following markup:

```html
<main>
  <section>
    <button>Click me</button>
    <!-- ✅ This gets the rounded border -->
  </section>
</main>
```

The issue with it is that the logic is coupled to the structure. Any minor change to the structure (add a wrapping `div`, change the `section` to a different element) could break our behavior - it requires global reasoning.

```html {2,6}
<main>
  <!-- ❌ This breaks our logic -->
  <div>
    <section>
      <button>Won't match</button>
    </section>
  </div>
</main>
```

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
