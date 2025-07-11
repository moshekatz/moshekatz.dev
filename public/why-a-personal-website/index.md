---
title: "Why a Personal Website?"
date: "2021-04-13"
spoiler: "I want to be a better developer, so I started creating more content."
---

It was late at night, I was scrolling through my twitter feed and could swear that everyone was purchasing \*_.dev_ domains - it was only reasonable that I'd impulse buy one myself with [moshekatz.dev](https://moshekatz.dev).

That same day I also deployed my own blog, inspired by Dan Abramov's [overreacted.io](https://overreacted.io), and just like that, my personal website was live.

Happy ending, right? 🎉

Except two years later the only blog post I had written was a "temporary" placeholder titled "Hello World".

**That's right, I didn't write a single post in years.**

But I want to change that, and this post acts as the first step in the way by helping me:

1. **Start creating content** - by actually being the first post I'll publish.
2. **Sustain a content creation habit** - by purifying the "why" of a personal website and the principles I plan to follow in order to stay consistent over time.

## From a Content Consumer to a Content Creator

I want to become a better developer.

I want to become a better developer, so I read a lot of technical blog posts, educating myself with lessons learned and fresh perspectives. However, I've never shared my own post with the world (well, at least until now).

I want to become a better developer, so I `npm install` every single day, reusing other developers solutions to common problems. However, I rarely `npm publish`.

I can go on and on - taking courses, listening to podcasts and watching conference talks in contrast to teaching, recording and speaking.

These are all **content consuming** actions, lined up with the opposite **content creating** actions, indicating I consume much, much more than I create.

Now don't get me wrong, I find consuming content extremely valuable, as I consume everyday. It helps me grow not only as a developer but also as a somewhat knowledgeable person overall.

Yet, I believe that _certain_ value can only be obtained by actually doing, creating and sharing - by making the transition from a content consumer to a content creator.

## A Better Developer?

In general, creating content enables you to grow your development skills as you:

- Learn more efficiently by applying what you learn.
- Save time for future you, and potentially others, by allowing to reuse existing solutions, perspectives and mental models.
- Improve your communicate skills, through clear writing, speech and code.

More specifically, there are two aspects of content creation that I find most suitable when starting to build a content creation habit:

- Writing
- Open sourcing

In the next sections I'll lay out why I think investing in them will actually make you a better developer.

### Why Writing Will Make You a Better Developer

Good developers write. a lot. and not "just" code.

Here are some examples:

#### RFCs

As explained in the [reactjs/rfcs repository](https://github.com/reactjs/rfcs):

> The "RFC" (request for comments) process is intended to provide a consistent and controlled path for new features to enter the project.

This process, in the format of a written structured template, forces better thought and better understanding of what's more important than what, and how things are related - resulting in better, more informed decisions.

Here are some RFCs I found interesting:

- [React Server Components RFC (reactjs/rfcs)](https://github.com/reactjs/rfcs/pull/188)
- [Context selectors (reactjs/rfcs)](https://github.com/reactjs/rfcs/pull/119)
- [Add funding support to package.json (npm/rfcs)](https://github.com/npm/rfcs/blob/latest/implemented/0017-add-funding-support.md)

#### Documentation

This quote from Dave Nunez's [article](https://increment.com/documentation/why-investing-in-internal-docs-is-worth-it/) from Increment's documentation issue summarized the importance of documentation so well I'll just attach it:

> GitHub’s [2017 Open Source Survey](https://opensourcesurvey.org/2017/) lists “incomplete or confusing documentation” as the number one problem encountered in open-source software development, observed by 93 percent of respondents. Yet 60 percent of contributors said they “rarely or never” contribute to documentation. GitHub concludes that “documentation is highly valued, but often overlooked”.

[Tom Preston-Werner](https://twitter.com/mojombo?lang=en) even suggests to start with the docs and not the code in his great post about [Readme Driven Development](https://tom.preston-werner.com/2010/08/23/readme-driven-development.html).

Moreover, some companies, like [Stripe](https://stripe.com), are known for their [developer](https://growthhackers.com/growth-studies/how-stripe-marketed-to-developers-so-effectively)-[first](https://dailyfintech.com/2020/09/21/stripe-the-developer-first-payment-unicorn/) [approach](https://stripe.com/blog/payment-api-design) and [outstanding documentation](https://twitter.com/colinarms/status/1297241436895637504), which results in a [massive growth](https://techcrunch.com/2021/03/14/stripe-closes-600m-round-at-a-95b-valuation/) and super happy customers.

Here are some documentations I was highly impressed by:

- [Stripe](https://stripe.com/docs)
- [MDN](https://developer.mozilla.org/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React](https://reactjs.org/docs)
- [Next.js](https://nextjs.org/docs)
- [Gatsby](https://www.gatsbyjs.com/docs/)
- [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- [Supabase](https://supabase.io/docs)

#### Development Roadmap

Building trust between a developer and his product/library users is hard, and development roadmaps are one of the best ways to do so.

A roadmap sometimes comes in the form of a blog post that reflects the plan forward, why some decisions were made, how will the migrations/deprecations/new features might look like and what you can do ahead of time to make the transition as smooth as possible.

Here are some of the development roadmaps I found great:

- [React 16.x Roadmap – React Blog (reactjs.org)](https://reactjs.org/blog/2018/11/27/react-16-roadmap.html)
- [The Future of React Router and @reach/router](https://reacttraining.com/blog/reach-react-router-future/)
- [Npm's public roadmap (a backlog)](https://github.com/npm/roadmap/projects/1)

#### Blogs

Some of the best developers I follow on Twitter just happen to write excellent blog posts - I don't believe that's a coincidence.

Here are some of my personal favorites:

- [The "Bug-O" Notation](https://overreacted.io/the-bug-o-notation/) by Dan Abramov
- [Why Isn’t X a Hook?](https://overreacted.io/why-isnt-x-a-hook/) by Dan Abramov
- [Fast and maintainable patterns for fetching from a database](https://sophiebits.com/2020/01/01/fast-maintainable-db-patterns.html) by Sophie Alpert
- [A (Mostly) Complete Guide to React Rendering Behavior](https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/) by Mark Erikson
- [AHA Programming](https://kentcdodds.com/blog/aha-programming) by Kent C. Dodds
- [Inversion of Control](https://kentcdodds.com/blog/inversion-of-control) by Kent C. Dodds
- [CSS Utility Classes and "Separation of Concerns"](https://adamwathan.me/css-utility-classes-and-separation-of-concerns) by Adam Wathan
- [The styled-components Happy Path](https://www.joshwcomeau.com/css/styled-components/) by Josh W. Comeau
- [Preemptive Pluralization is (Probably) Not Evil](https://www.swyx.io/preemptive-pluralization) by Shawn Wang

**Verdict:** ✅ Writing consistently over time will make you a better developer.

### Why Open Sourcing Will Make You a Better Developer

Good developers contribute to open source. They often build in the open.

In general, open sourcing allows you to become a better developer as you:

- Learn from code written by other developers.
- Get your code reviewed by the community.
- Practice decision making, prioritizing and marketing.

There are also indirect advantages to open source, as you grow a network of connections, boost your resume and in rare cases might even lead to a whole new business.

#### A Potential Business?

More often than not, open source creators/maintainers are not rewarded for their hard work, as [Kitze](https://twitter.com/thekitze?lang=en) once wrote: ["GitHub stars won’t pay your rent"](https://medium.com/@kitze/github-stars-wont-pay-your-rent-8b348e12baed).

However, there is an emerging business model where an open source project raises awareness and usage to a tool, while the creators make a paid service with a value proposition that is based on that tool. Here are some examples:

- [react-router](https://reactrouter.com/) as the open source project; [remix](https://remix.run/) as the paid service.
- [tailwind css](https://tailwindcss.com/) the open source project; [tailwind-ui](https://tailwindui.com/) as the paid service.

Also, here are some examples to open source projects being built in the open:

- [egghead-next](https://github.com/eggheadio/egghead-next) - the frontend for egghead.io.
- [excalidraw](https://github.com/excalidraw/excalidraw) - virtual whiteboard for sketching hand-drawn like diagrams.
- [spectrum](https://github.com/withspectrum/spectrum) - simple, powerful online communities.
- [reach-ui](https://github.com/reach/reach-ui) - the accessible foundation for React apps and design systems.
- [supabase](https://github.com/supabase/supabase) - the open source Firebase alternative.
- [moshekatz.dev](https://github.com/moshekatz/moshekatz.dev) - this website 😊.

**Verdict:** ✅ Open sourcing will make you a better developer, and might even open up interesting career paths.

## The Principles

Forming a habit requires first sticking to a routine, and those are the principles I plan to follow in order to achieve that.

### Learn in Public

[Shawn Wang](https://twitter.com/swyx) (or as I refer to him in my head - "The learn-in-public Guy") already wrote a [great post](https://www.swyx.io/learn-in-public/) about this topic.

I've probably re-read this post a thousand times by now, so why not just share a part of it in the form of a conversation with my head:

> You already know that you will never be done learning. But most people "learn in private", and lurk. They consume content without creating any themselves. Again, that's fine, but we're here to talk about being in the top quintile.

Top quintile? I guess this content creation habit is a thing after all. OK, I'm on board, but what content should I create?

> Whatever your thing is, make the thing you wish you had found when you were learning. Don't judge your results by "claps" or retweets or stars or upvotes - just talk to yourself from 3 months ago. I keep an almost-daily dev blog written for no one else but me.

And what if no one will ever read this?

> Guess what? It's not about reaching as many people as possible with your content. If you can do that, great, remember me when you're famous. But chances are that by far the biggest beneficiary of you trying to help past you is future you. If others benefit, that's icing.

Thanks Shawn, always a pleasure.

(p.s - here's the [link](https://www.swyx.io/learn-in-public/) to the post again, I recommend reading it in its entirety if you haven't)

### Dogfooding

As explained by JetBrains in their [article](https://blog.jetbrains.com/blog/2020/03/06/software-development-the-jetbrains-way-dogfooding-and-other-key-principles/) about the topic:

> In the software development industry, dogfooding is the practice of testing your products within your company, using them as the end users would. Effectively, you have to eat your own dog food to ensure that your product is of the highest quality.

In my opinion, there are 2 main advantages to dogfooding when creating content, and especially when creating software - the first is sustainability and the second is a better end product.

#### Sustainability

When using your own open source software, you're motivated fix bugs and add features as you, as a user yourself, directly profit from those.

The same applies to a blog post you wrote and re-read or references to in the appropriate context.

Simply put, the intentions of the creator and the user are mostly aligned, hence, making it sustainable to maintain over time.

#### Better End Product

After learning how JetBrains utilizes dogfooding to make better software, let me also quote the engineering team of Facebook on the topic, from their [Introducing Relay Hooks](https://developers.facebook.com/blog/post/2021/03/09/introducing-relay-hooks-improved-react-apis-relay/) blog post:

> But new does not mean untested: the rewritten [facebook.com](https://www.facebook.com/) is entirely powered by Relay Hooks, and these APIs have been the recommended way to use Relay at Facebook since mid-2019.

So APIs that were released in March-2021 powered facebook.com over a year before the release - that's some confidence.

The only reason the bug got caught before rolling out to the public is the process of dogfooding. Less production bugs => better software => happier users. Sounds good to me.

In addition, I was surprised to find out the amount of successful projects that started as a "solution to my own problem", thus were
inherently "dogfooded" - for instance, [React](https://www.youtube.com/watch?v=GW0rj4sNH2w) and [Tailwind CSS](https://adamwathan.me/tailwindcss-from-side-project-byproduct-to-multi-mullion-dollar-business/) that actually powers the current version of this website.

### Put the Content First

Creating content should be easy, and shouldn't be dependent on other tasks (e.g., a website redesign).

Publishing content should be frictionless.

As smooth the content creation pipeline is, the less excuses I have to not create - that's the magic of ["making the right thing the easy thing"](https://www.jason.af/right-thing-easy-thing).

Here are two products that implements this principle brilliantly:

- [HEY World](https://hey.com/world/) - just email to world@hey.com. Write + Send = Posted.
- [Collected Notes](https://collectednotes.com/blog/static-websites) - imagine being able to create a custom static website and update it's contents right from your phone without having to redeploy it. They are leveraging the ["Incremental Static Regeneration"](https://nextjs.org/blog/next-9-5#stable-incremental-static-regeneration) feature of Next.js to keep the static website and your Collected notes in sync.

Also, here are some blog posts that really got me thinking about this mental model:

- [My blog is a digital garden, not a blog](https://joelhooks.com/digital-garden) by Joel Hooks
- [How to Build a Consistent Content Creation Habit](https://www.jason.af/build-consistent-content-creation-habit) by Jason Lengstorf

## Closing Words

The combination of consuming and creating content, consistently over time, will make you a better developer.

Balance is key though, and it's not a 0 or 1 scenario, as:

- if you'd never consume, you'd stay in the same place.
- if you'd never create, then why did you just learn?

So to wrap up, inspired by [this tweet](https://twitter.com/rauchg/status/807626710350839808) from [Guillermo Rauch](https://twitter.com/rauchg), I'll try to close out with a call to action for every developer reading this:

**Create content. Not too many. Mostly write, words and code.**
