---
layout: post
title: "Reducing decision fatigue for developers"
date: "2017-09-08 14:00:00"
categories:
  - development
coverimage: 'ant.jpg'
synopsis: >-
  The most effective way to increase the productivity of your development team
  is to understand that code is never written in isolation.
author: Josh Post
---


TL;DR:

* Code needs to be consistent across a team as much as possible through linting, unit tests, PR templates, etc
* Guidelines need to be clear and established before the work begins. These need to be agreed on and followed by everyone else they will become irrelevant
* When they change (they will) they need to be communicated and documented
* On boarding new developers should be a priority to prevent code smell
* New tech needs to be discussed between as least two developers and other developers should go through a workshop or similar
* Regular (i.e. monthly) walkthroughs of the project should happen with other developers not involved for new ways of solving problems
* Consistency is key 🔑
* Good products start with good code which starts with good developers which starts with good understanding


Increasing the productivity of your development team comes down to understanding that code is never written in isolation. A team of developers are the most competent when they can jump in to any part of the project at any time and know exactly how they need to solve the problem. This reduces “decision fatigue”, where a developer has to break their flow in order to think about how they’re going to implement something.

At the beginning of a project, the team needs to work out a good set of guidelines that they all agree on. This goes further than settling on a framework, as keeping maintainable code is the same as keeping consistent code. The more this can be reinforced through things like linters, unit tests, peer reviews and templates the easier this will become.&nbsp;

We’ll take something as simple as writing CSS for a single class. We can enforce things like the order of properties and no `!important` overrides at a linter level, so nothing can be committed that doesn’t meet these basic criteria. Moving up a level we have peer reviews, where we enforce team guidelines like giving titles to certain blocks, a consistent naming structure and correct spacing.&nbsp;

The more we can have at the linter level, the less time developers will need to spend on thinking “how should this be done”. When new developers are added to the project, it’s vital that they are brought up to speed with standards as soon as possible to prevent back-and-forth discussions that could last days as other developers become busy again.&nbsp;

> Consistency across projects and teams is key.

I also find it good practice to keep developers outside the project up to date through regular walkthroughs. This reduces on boarding time, and provides an opportunity for fresh ideas to come in.&nbsp;

As guidelines for a project evolve over time (they will), new decisions need to be discussed, decided on and communicated before they actually get implemented. That sounds pretty obvious, but it’s amazing how often I come into a project and see discrepancies as individuals have implemented a potentially better solution in only one or two places.&nbsp;

Reducing decision fatigue for developers is like grease on a bicycle. It lets them up to work more freely and faster, and the more time spent actually developing the better your products will be.
