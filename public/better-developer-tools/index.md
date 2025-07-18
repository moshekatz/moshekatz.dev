---
title: "Better Developer Tools"
date: "2021-05-02"
spoiler: "Some tools will accidentally make you a better developer, others will lock you in."
---

While **developer tools** are important (and you should probably [make your own](https://kentcdodds.com/blog/make-your-own-dev-tools)), the goal of this post is to emphasize the importance of embracing tools that will make you a **better developer.**

If you've used one, you know what I'm talking about.

With some tools, some "AHA" moments, you just feel **the better you get at the tool, the better overall developer you become.**

I call those tools **"Better Developer Tools"**, and I believe we should embrace them whenever we can.

## How Does One Recognize a Better Developer Tool?

Let me take a step back to the complete opposite, and identify the attributes that are associated with a "Worse Developer Tool" (yes, I'm great with naming).

During my development career I've seen a few, and here are the key patterns I found:

- **Complex Custom Abstractions** - Based on complex custom abstractions, which makes it hard to reason about or migrate away from
- **Getting Started Is Hard** - There's a lot of content you have to learn ahead of time in order to be productive, and it's extremely hard to utilize this knowledge in another app
- **"Just Call a Senior"** - A lot of the bugs are not google searchable, and the common way to solve those is to call a senior developer
- **Longer Onboarding Process** - The onboarding process involves learning new abstractions and vocabulary, with minimal correlation to previous knowledge

After we've established a baseline, let's try to deduce what are the principles a "Better Developer Tool" would follow:

- **Embrace The Fundamentals** - Based on proven fundamentals, while extending and making the underlying technologies/concepts more accessible
- **Getting Started is Easy** - Getting started is relatively easy, weather in an existing or a new app, and you can add additional complexity just in time, when needed
- **"Just Google It"** - Bugs and patterns are usually google searchable, and more specifically, can be found in sites that are not specific to a single tool but the whole platform like [MDN](https://developer.mozilla.org/en-US/)
- **Shorter Onboarding Process** - The onboarding process leverages existing knowledge, and focuses on topics that you'd should probably be familiar with anyway

Alright, now let's try to identify those patterns in some of the tools I'd consider a "Better Developer Tool".

## Better Developer Tools Examples

### React

- Getting better in React forced me to get better in JavaScript (Classes, Closures, etc..)
- React's component model helped me reason about separating concerns such as data, logic and UI
- You can [add React to any website](https://reactjs.org/docs/add-react-to-a-website.html), and use as little or as much React as you need

### Redux

- Redux was my entry point to functional programming (pure functions, reducers) and one way data flow (Oh, those flux days..)
- Redux's core is [not coupled to any framework](https://redux.js.org/faq/general#can-redux-only-be-used-with-react), and can be used as a data store for any UI layer

### Remix

- Remix leverages web fundamentals such as Server Rendering, the Fetch Api and HTML
- A lot of the learning curve around Remix, like [HTTP Caching](https://www.youtube.com/watch?v=3XkU_DXcgl0), has nothing to do with Remix itself - again, it's just web fundamentals
- Remix apps can be [deployed anywhere](https://docs.remix.run/v0.17/tutorial/7-deploying/), and does not rely on a specific provider

## Closing Words

[Ryan Florence](https://twitter.com/ryanflorence) and [Michael Jackson](https://twitter.com/mjackson), the creators of [React Router](https://reactrouter.com/), [unpkg](https://unpkg.com/) and also [Remix](https://remix.run/), highly inspired the writing of this post, and to wrap up, I'd like to quote part of their own [Remix Docs](https://docs.remix.run/v0.17/guides/philosophy/):

> If you get good at Remix, you will accidentally get good at web development in general.

**Accidentally becoming a better developer**.

That's the [pit of success](https://blog.codinghorror.com/falling-into-the-pit-of-success/) I want to surround myself with, and I believe we, as a community, should embrace those "Better Developer Tools" whenever we can - as doing so will help the whole ecosystem improve, one (better developer) tool at a time.
