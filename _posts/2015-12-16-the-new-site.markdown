---
layout: post
title:  "A CMS vs a static site: performance review"
date:   2015-12-18 14:13:08 +1300
categories: development
coverimage: "new-site.png"
synopsis: ""
author: "Josh Post"
---

The last time I redesigned personal website was in 2013. Not everybody loved it.

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/posty72">@posty72</a> ALSO. These green links are hella assaulting to the eye boy! What chu playin&#39; at!</p>&mdash; Vanity Vixen (@ohyoufox) <a href="https://twitter.com/ohyoufox/status/388858660983545856">October 12, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script> 

Despite this, I was very pleased with it. It was clear, readable and was a huge improvement over the static HTML files I was writing manually. I'd just worked for a company that used Silverstripe for their clients' CMS's, had was stoked that I had build this awesome piece of the internet.

But over the next couple of years, the romance faded. The site was hosted by GoDaddy which meant deploying often meant using an FTP client, and making changes became a burden. I would notice issues and never fix them simply because it was so much to deploy. The site became bulky and slow to load. 

Last year I [wrote about dropping the CMS] and I decided to recreate my website, with a focus on easy deployment and speed. Using a combination of Jekyll, Gulp, Amazon S3 & Cloudfront I came up with a solution that was so much lighter and simple than a CMS that did the exact same thing. 


Enough talk, here are the numbers:

##### Homepage

<small>_E.g. <http://www.posty.co.nz/web-development/>_</small>

|                           | Old  | New  | % Difference  |
| ------------------------- |:----:|:----:|--------------:|
| Load time (seconds)       | 6.12 | 2.21 |  -63.89%      |
| Size (kbs)                | 1500 | 384  | -74.40%       |
| Number of requests        | 18   | 11   | -38.89%       |
| Pagespeed Score - Mobile  | 61   | 82   | +34.43%        |
| Pagespeed Score - Desktop | 75   | 86   | +14.67%        |


##### Blog Index 

<small>_E.g. <http://www.posty.co.nz/blog/>_</small>

|                           | Old  | New  | % Difference  |
| ------------------------- |:----:|:----:|--------------:|
| Load time (seconds)       | 2.87 | 0.78 |  -72.82%      |
| Size (kbs)                | 1300 | 1100 | -15.38%       |
| Number of requests        | 25   | 20   | -20.00%       |
| Pagespeed Score - Mobile  | 40   | 71   | +77.50%        |
| Pagespeed Score - Desktop | 47   | 65   | +38.30%        |

##### Blog Post 

<small>_E.g. <http://www.posty.co.nz/development/2015/12/11/breaking-away-from-the-cms.html/>_</small>

|                           | Old  | New  | % Difference  |
| ------------------------- |:----:|:----:|--------------:|
| Load time (seconds)       | 5.3  | 1.22 |  -76.98%      |
| Size (kbs)                | 1400 | 397  | -71.64%       |
| Number of requests        | 62   | 16   | -74.19%       |
| Pagespeed Score - Mobile  | 42   | 74   | +76.19%        |
| Pagespeed Score - Desktop | 68   | 77   | +13.24%        |
 

##### Portfolio page

<small>_E.g. <http://www.posty.co.nz/web-development/>_</small>

|                           | Old  | New  | % Difference  |
| ------------------------- |:----:|:----:|--------------:|
| Load time (seconds)       | 4.98 | 0.67 |  -86.55%      |
| Size (kbs)                | 3700 | 544  | -85.30%       |
| Number of requests        | 31   | 18   | -41.94%       |
| Pagespeed Score - Mobile  | 21   | 78   | +271.43%       |
| Pagespeed Score - Desktop | 67   | 90   | +34.33%        |


The results speak for themselves. Looking at the blog post, which had the most amount of 


[wrote about dropping the CMS]: http://www.posty.co.nz/development/2015/12/11/breaking-away-from-the-cms.html
[this site]: https://github.com/posty72/posty.co.nz