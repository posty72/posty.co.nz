---
title:  "Breaking away from the CMS"
date:   2015-12-11 12:17:08 +1300
categories: 
  - development
image: images/cmsless.jpg
author: "Josh Post"
---

Whenever I see a small company like a restaurant or small company's website using a CMS such as Wordpress, I often wonder what brought them to the conclusion that that was the way to go. CMS's in general are bloated, slow and can be relatively expensive, so why use one at all?

CMS-less websites have gathered steam in 2015 with the [argument]{:target="_blank"} that they're faster, easier to maintain and a lot cheaper. Let's take a quick look at the pro's and con's of swiching to a static website over something like Wordprss.

### The Pro's

1. **Speed**. It requires no database. This is the most common bottleneck when it comes to web applications.
2. **Hosting costs**. This site is statically hosted in an AWS S3 bucket, which costs me lass than USD$0.10 a month. A common hosting service like GoDaddy hosting starts at around $10, which is 100 times more expensive.
3. **Security**. Since the site is updated on your local computer and hosted by AWS, you won't need to login or remember any passwords. That means there's a much lower risk of somebody taking control of your website.
4. **Maintainability**. No more updating that CMS to the new version!

### The Con's

While these all sound like great sellers, a CMS-less site like this comes with some caveats:

1. **User Scalability**. This solution is really only designed for a single user.
2. **Technical know-how**. You will need to know at least basic HTML, CSS and command-line to run a website effectively (at least until more tools become available).
3. **Non-cloud based**. While the site itself is in the cloud, the actual developement itself is done on the local computer, so any changes would need to be applied there. This means you couldn't update it from a friends computer.


So there you have it. Static websites: a way of the past, potential way of the future.

[argument]: http://theapartment.co/dev/2015/09/10/drop-that-old-cms/
