---
title:  "I re-created my personal website to make it faster"
date:   2015-12-18 14:13:08 +1300
categories: 
    - development
image: images/new-site.png
author: "Josh Post"
---

The last time I redesigned personal website was in 2013. Not everybody loved it.

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/posty72">@posty72</a> ALSO. These green links are hella assaulting to the eye boy! What chu playin&#39; at!</p>&mdash; Vanity Vixen (@ohyoufox) <a href="https://twitter.com/ohyoufox/status/388858660983545856">October 12, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Despite this, I was very pleased with it. It was clear, readable and was a huge improvement over the static HTML files I was writing manually. I'd just worked for a company that used Silverstripe for their clients' CMS's, had was stoked that I had build this awesome piece of the internet.

But over the next couple of years, the romance faded. The site was hosted by GoDaddy which meant deploying often meant using an FTP client, and making changes became a burden. I would notice issues and never fix them simply because it was so much to deploy. The site became bulky and slow to load.

Last year I [wrote about dropping the CMS] and I decided to recreate my website, with a focus on easy deployment and speed. Using a combination of Jekyll, Gulp, Amazon S3 & Cloudfront I came up with a solution that was so much lighter and simple than a CMS that did the exact same thing.

The results speak for themselves. See my [post detailing performance gains] to see the gains by numbers. If you're interested in the code itself, [check it out on Github].


[post detailing performance gains]: /cms-vs-static-performance-review
[wrote about dropping the CMS]: /breaking-away-from-the-cms
[check it out on Github]: https://github.com/posty72/posty.co.nz
