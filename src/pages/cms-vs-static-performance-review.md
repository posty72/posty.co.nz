---
title:  "CMS vs Static site: performance review"
date:   2015-12-18 14:13:08 +1300
<<<<<<< HEAD:_posts/2016-01-14-cms-vs-static-performance-review.markdown
categories: development
coverimage: "new-site.jpg" 
synopsis: "Moving from a CMS would obviously have some performance benefits, but what's a fact without numbers?"
=======
categories: 
    - development
image: images/new-site.png
>>>>>>> development:src/pages/cms-vs-static-performance-review.md
author: "Josh Post"
---

This is a benchmark battle between my old site and [my new one]. This isn't a completely fair comparison, as the Silverstipe site was hosted off of a shared GoDaddy server and the static site comes directly from an AWS S3 bucket backed by Cloudfront.

And the numbers reflect that clearly:

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
| Pagespeed Score - Mobile  | 21   | 78   | +271.43%      |
| Pagespeed Score - Desktop | 67   | 90   | +34.33%       |

This last one, the portfolio page, shows the biggest differnce between the two. Techniques like lazy loading images and using Gulp to combine and minify assets have huge benefits.

These numbers reflect what I said when I [wrote about dropping the CMS]. There are huge, tangible performance increases to using a system like this.


[wrote about dropping the CMS]: http://www.posty.co.nz/development/2015/12/11/breaking-away-from-the-cms.html
[my new one]: https://github.com/posty72/posty.co.nz
