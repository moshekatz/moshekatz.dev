---
title: "Optimize for humans"
date: "2025-08-10"
spoiler: "It tends to help LLMs too"
---

Congratulations! A new developer has joined your team.

How long until she ramp up and start contributing to the codebase? Days? Maybe weeks?

I understand. She need to setup her local environment, go over the docs, study the system architecture.

Then, her first pull request arrives! And so does your review:

- "You can use `<Alert/>` from our design system here"
- "Please bound network calls with a timeout"

No one blames her, it wasn't clear from the task description and the CI checks are all green - this is why we do code reviews after all, right? And there will be less and less comments over time.

"You're absolutely right.", until the next commit.

Did I mention her name, btw?

**It's "Cursor"**.

And there are many more like her on their way, are you ready to onboard them all?

## It's all about context

Ever wondered what makes a task solvable by LLMs?

The term **"context engineering"** could give us a good hint, as [described](https://x.com/tobi/status/1935533422589399127) by Tobi Lutke, Shopify's CEO:

> The art of providing all the context for the task to be plausibly solvable by the LLM

The easier it'll be for LLM to gather all the context required to solve a task, the higher chances it'll actually get done.

If you think about it, the same statement also applies to a new (human) hire.

Does that mean optimizing our codebase for humans will also optimize it for LLMs?

What I, and [others](https://x.com/kentcdodds/status/1950932680201126169) have come to find is exactly that - patterns that made the life of humans easier, tends to be really good for LLMs too.

Let's see some examples.

## Pure functions

A pure function is a function that always returns the same output for the same input and has no side effects.

Here's an example to one:

```js
function isWithinRange(value, [min, max]) {
  return value >= min && value <= max;
}

// Example usage:
const range = [1, 5];
isWithinRange(3, range); // true
isWithinRange(0, range); // false
```

Their attributes makes them predictable, testable and self-contained. They **require minimal context in order to work with**, so humans find them easy to reason about.

Back to our theory, turns out LLMs are also very good with pure functions, for the exact same reasons.

So the more we rely on pure functions in our codebase, the more optimized our codebase will be for both humans _and_ LLMs.

That was a rather simple one, let's continue to the next.

## Styling: Global rules vs. Utility classes

Let's consider the following global CSS rule:

```css
main section > button {
  border-radius: 1rem;
}
```

Which will match the following markup:

```html
<main>
  <section>
    <!-- ✅ This gets the rounded border -->
    <button>Click me</button>
  </section>
</main>
```

The issue with such rule is that its logic is coupled to the structure the markup, any minor change to it (add a wrapping `form` or change the `section` to a different element) could break our behavior:

```html {4,6}
<main>
  <section>
    <!-- ❌ This breaks our logic -->
    <form>
      <button>Won't match</button>
    </form>
  </section>
</main>
```

While this is a contrived example, it represent the global nature of CSS and how easy it is to create a connection between different parts of our app in a way that's hard to track.

"Hard to track", translated to our "context engineering" definition, means a lot of context is needed in order to make any change.

What can we do instead? Inspired by [Tailwind](https://tailwindcss.com/docs/styling-with-utility-classes), let's go local:

```css
.border-radius-1 {
  border-radius: 1rem;
}
```

Then later, whenever we'd like a round border, we can just apply it:

```html {4}
<main>
  <section>
    <form>
      <button class="border-radius-1">I have a round border!</button>
    </form>
  </section>
</main>
```

Adding or removing this utility class from an element only ever affects that element, there's no need to worry about others elements breaking.

By switching our approach we've **reduced the context required to apply styling dramatically** (scanning the entire frontend vs. checking a specific element) - this makes the code easier for humans to work with, and the same for LLMs.

Noticed anything common between pure functions and utility classes?

Let's zoom out for a bit.

## Facilitating local reasoning

The amount of context the human mind can hold is limited, and some tasks are just too big to fit in.

We usually tackle this by:

1. Breaking down a complex task into smaller tasks
2. Solving each smaller task separately

LLMs suffer from the same limitation, defined by their "context window".

Even if they had an infinite context window, it'll just move the bottleneck to human reviews (good luck reviewing a single PR with 112 files and thousands of diffs), and we'd find ourself back with the same problem.

Codebases that makes it easy to break down tasks are the ones I find delightful to work in.

Sophie Alpert described it perfectly in her post about [Fast and maintainable patterns for fetching from a database](https://sophiebits.com/2020/01/01/fast-maintainable-db-patterns):

> You should be able to worry about each part of your code in isolation, without holding the entire system in your head. In my experience, this is the key to making complex systems scale, especially (but not only) in a large organization.

Pure functions and utility classes makes it simpler than the alternatives of mutating parameters or complex global CSS selectors.

**They facilitate local reasoning.**

Once you understand this principle, you start to see it (or see it missing) everywhere in the tools and patterns we daily use.

### React and Tailwind

React allows us to think in components, build them separately, knowing they'll compose later like a puzzle.

Add Tailwind into the mix and you'd get isolated styling that just works, and matches perfectly with React's mental model of components.

They promote APIs that are [optimized for change](https://overreacted.io/optimized-for-change/).

### dataloader

[dataloader](https://github.com/graphql/dataloader) keeps our data fetching layer performant via batching and caching requests, removing the need to constantly ask "Is someone else fetching this in another place already?".

Once again, an API that allows us to simplify our code by placing logic as close as possible to its usage.

I truly urge you to read the [article](https://sophiebits.com/2020/01/01/fast-maintainable-db-patterns) by Sophie I also shared above, that explains how it can make your app code faster and more maintainable.

### Microservices

With microservices architecture, its easy to decouple related concerns into separate repos just because of our org chart.

This doesn't mean it's always a [bad idea](https://world.hey.com/dhh/how-to-recover-from-microservices-ce3803cc), just that it introduces a trade-off.

More than one PR required to solve a task? Wrong order of deploys and your app breaks?

That's a signal for an architecture that requires a global understanding of the system, and it'll be harder for both humans and LLMs to solve as a whole.

Interestingly, many of the patterns that facilitate local reasoning, promotes co-locating things that changes together as close as reasonable (READMEs, colocated with code, suddenly makes so much sense).

### Backend-for-Frontend

The Backend-for-Frontend pattern, promoted by [React Router](https://remix.run/docs/en/main/guides/bff) (aka Remix), [Next.js](https://nextjs.org/) and [trpc](https://trpc.io/) enables us to keep frontend related concerns as close as possible to it.

It helps frontend specific logic to leak into shared backend services, making frontend teams less dependant on external teams, and opens a door to unique optimizations.

You can even get automated type checking _across the network boundary_!

Which brings me to my next point.

## Even less context!

The fact a certain task _can_ be solved via additional context doesn't mean it _should_, given better alternatives.

### Delegate to another machine

Humans can solve all kinds of tasks, but what if a machine could solve it faster, cheaper and more accurately?

LLMs can do plenty too. But reiterating on our "Humans 🤝 LLMs" mantra, they should also delegate some tasks to a more suitable machine when possible.

[Prettier](https://prettier.io/) is a code formatter that completely eliminates the problem of formatting.

Sure, we could add a complex rule that would teach the LLM how to format our code, but it would be a waste of its resources.

Linting, testing and type checking shares the same principal.

They make it easy for humans to perform changes safely or spend less effort on repetitive tasks, and LLMs would benefit from it too!

The more we'd invest in such tools, the more we'd be able to leverage humans and LLMs in complex tasks that require unique thinking.

### Leverage previous knowledge

Humans have accumulated knowledge over the years, and so have LLMs that are already pre-trained on some huge dataset.

We should be able to leverage it!

If the context required to solve a task is already known, the less effort we'd need to invest in order to provide it somehow.

Added a clever abstraction to filter arrays instead of relying on `Array.filter`? Using your own url parsing utility instead of `new URL`? Public routes must be added to a your unique proxy or users will get an error?

I hope you have good docs to share, because new human hires or LLMs won't be familiar with any of these.

The more a codebase will rely on [transferable knowledge](https://remix.run/blog/not-another-framework) like web standards, the better chances both humans and LLMs will already know them, and no additional context will be needed in order to solve a task.

## Takeaways

The mental model of treating LLM tools like Cursor as a new human hire introduces us with an opportunity:

**There are more reasons than ever to optimize our onboarding, codebase and processes for humans.**

Let's wrap up a few of the principles we went over:

- **Treat LLMs like new hires** - The same principles that make onboarding easy for humans also help LLMs perform better.
- **Facilitate local reasoning** - Promote tools and patterns that allow to worry about each part of your code in isolation, without holding the entire system in your head.
- **Leverage automation** - Offload repetitive or low-value tasks from both humans and LLMs using the right automation tools.
- **Prefer transferable knowledge** - Stick to standards and common patterns so less context needs to be explained.

With those in place, not only we'd gain immediate boost by having the team more efficient, but also be better positioned to leverage the power of LLMs.

A win-win.
