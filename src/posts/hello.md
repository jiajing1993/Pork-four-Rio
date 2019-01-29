---
path: "/blog/my-first-post"
date: "2017-11-07"
title: "👀 Lookback to 2018"
color: "#16a085"
---

People often assume that I know far more than I actually do. That’s not a bad problem to have and I’m not complaining. (Folks from minority groups often suffer the opposite bias despite their hard-earned credentials, and that *sucks*.)

**In this post I’ll offer an incomplete list of programming topics that people often wrongly assume that I know.** I’m not saying *you* don’t need to learn them — or that I don’t know *other* useful things. But since I’m not in a vulnerable position myself right now, I can be honest about this.

Here’s why I think it’s important.

---

First, there is often an unrealistic expectation that an experienced engineer knows every technology in their field. Have you seen a “learning roadmap” that consists of a hundred libraries and tools? It’s useful — but intimidating.

What’s more, no matter how experienced you get, you may still find yourself switching between feeling capable, inadequate (“Impostor syndrome”), and overconfident (“Dunning–Kruger effect”). It depends on your environment, job, personality, teammates, mental state, time of day, and so on.

Experienced developers sometimes open up about their insecurities to encourage beginners. But there’s a world of difference between a seasoned surgeon who still gets the jitters and a student holding their first scalpel!

Hearing how “we’re all junior developers” can be disheartening and sound like empty talk to the learners faced with an actual gap in knowledge. Feel-good confessions from well-intentioned practitioners like me can’t bridge it.

Still, even experienced engineers have many knowledge gaps. This post is about mine, and I encourage those who can afford similar vulnerability to share their own. But let’s not devalue our experience while we do that.

**We can admit our knowledge gaps, may or may not feel like impostors, and still have deeply valuable expertise that takes years of hard work to develop.**

---

With that disclaimer out of the way, here’s just a few things I don’t know:

* **Unix commands and Bash.** I can `ls` and `cd` but I look up everything else. I get the concept of piping but I’ve only used it in simple cases. I don’t know how to use `xargs` to create complex chains, or how to compose and redirect different output streams. I also never properly learned Bash so I can only write very simple (and often buggy) shell scripts.

* **Low-level languages.** I understand Assembly lets you store things in memory and jump around the code but that’s about it. I wrote a few lines of C and understand what a pointer is, but I don’t know how to use `malloc` or other manual memory management techniques. Never played with Rust.

* **Networking stack.** I know computers have IP addresses, and DNS is how we resolve hostnames. I know there’s low level protocols like TCP/IP to exchange packets that (maybe?) ensure integrity. That’s it — I’m fuzzy on details.

* **Containers.** I have no idea about how to use Docker or Kubernetes. (Are those related?) I have a vague idea that they let me spin up a separate VM in a predictable way. Sounds cool but I haven’t tried it.

* **Serverless.** Also sounds cool. Never tried it. I don’t have a clear idea of how that model changes backend programming (if it does at all).

* **Microservices.** If I understand correctly, this just means “many API endpoints talking to each other”. I don’t know what the practical advantages or downsides of this approach are because I haven’t worked with it.

* **Python.** I feel bad about this one — I *have* worked with Python for several years at some point and I’ve never bothered to actually learn it. There are many things there like import behavior that are completely opaque to me.

* **Node backends.** I understand how to run Node, used some APIs like `fs` for build tooling, and can set up Express. But I’ve never talked from Node to a database and don’t really know how to write a backend in it. I’m also not familiar with React frameworks like Next beyond a “hello world”.

* **Native platforms.** I tried learning Objective C at some point but it didn’t work out. I haven’t learned Swift either. Same about Java. (I could probably pick it up though since I worked with C#.)

* **Algorithms.** The most you’ll get out of me is bubble sort and maybe quicksort on a good day. I can probably do simple graph traversing tasks if they’re tied to a particular practical problem. I understand the O(n) notation but my understanding isn’t much deeper than “don’t put loops inside loops”.

* **Functional languages.** Unless you count JavaScript, I’m not fluent in any traditionally functional language. (I’m only fluent in C# and JavaScript — and I already forgot most of C#.) I struggle to read either LISP-inspired (like Clojure), Haskell-inspired (like Elm), or ML-inspired (like OCaml) code.

* **Functional terminology.** Map and reduce is as far as I go. I don’t know monoids, functors, etc. I know what a monad is but maybe that’s an illusion.

* **Modern CSS.** I don’t know Flexbox or Grid. Floats are my jam.

* **CSS Methodologies.** I used BEM (meaning the CSS part, not the original BEM) but that’s all I know. I haven’t tried OOCSS or other methodologies.

* **SCSS / Sass.** Never got to learn them.

* **CORS.** I dread these errors! I know I need to set up some headers to fix them but I’ve wasted hours here in the past.

* **HTTPS / SSL.** Never set it up. Don’t know how it works beyond the idea of private and public keys.

* **GraphQL.** I can read a query but I don’t really know how to express stuff with nodes and edges, when to use fragments, and how pagination works there.

* **Sockets.** My mental model is they let computers talk to each other outside the request/response model but that’s about all I know.

* **Streams.** Aside from Rx Observables, I haven’t worked with streams closely. I used old Node streams one or two times but always messed up error handling.

* **Electron.** Never tried it.

* **TypeScript.** I understand the concept of types and can read annotations but I’ve never written it. The few times I tried, I ran into difficulties.

* **Deployment and devops.** I can manage to send some files over FTP or kill some processes but that’s the limit of my devops skills.

* **Graphics.** Whether it’s canvas, SVG, WebGL or low-level graphics, I’m not productive in it. I get the overall idea but I’d need to learn the primitives.

Of course this list is not exhaustive. There are many things that I don’t know.

---

It might seem like a strange thing to discuss. It even feels wrong to write it. Am I boasting of my ignorance? My intended takeaway from this post is that:

* **Even your favorite developers may not know many things that you know.**

* **Regardless of your knowledge level, your confidence can vary greatly.**

* **Experienced developers have valuable expertise despite knowledge gaps.**

I’m aware of my knowledge gaps (at least, some of them). I can fill them in later if I become curious or if I need them for a project.

This doesn’t devalue my knowledge and experience. There’s plenty of things that I can do well. For example, learning technologies when I need them.

>Update: I also [wrote](/the-elements-of-ui-engineering/) about a few things that I know.

