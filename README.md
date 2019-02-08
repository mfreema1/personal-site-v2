[![Build Status](https://travis-ci.com/mfreema1/personal-site-v2.svg?branch=master)](https://travis-ci.com/mfreema1/personal-site-v2)

# My Website (A Learning Experience)
This is actually my second attempt at making a website.  For my first attempt, I didn't quite have an understanding of the web.  This time around, I'm doing a little bit better, so figured I'd give it a go.  This is the result.

#### Why Make a Website?
Well, now that I have a domain, I can host almost whatever I want up here!  I wouldn't be surprised if I started some kind of portfolio or blog to be honest.  The possibilities are endless.
Side note:  If you're reading this page on the [GitHub](https://github.com/mfreema1/personal-site-v2), then you'll be seeing this as just plain-old markdown.  But, if you're on my [website](http://mrkfrmn.com), then you'll be viewing this page as HTML.  This is done using [Marked](https://www.npmjs.com/package/marked), which is a markdown parser that can be used to generate HTML.  Neat!

#### Technology Used
As mentioned above, this was really just to try my hand at some new tech.  I wanted to give React a shot, as well as some new npm packages that I thought were cool.  In total, this website uses:
- Build:
    - Babel
    - Webpack
    - Marked
- Languages:
    - JS with ES6
    - Hints of HTML & CSS
- Frameworks:
    - React
    - Bootstrap via Reactstrap
- Hosting / Delivery:
    - Amazon S3
    - Cloudfront

#### Why No TLS / SSL?
If you noticed in the upper left hand corner of the browser, my website is actually running over HTTP (if you didn't notice -- awesome!  Nothing to see here then).  This is because, to my knowledge, using a custom domain with CloudFront makes SSL kind of difficult.  I could always convert my site over to one of their pre-generated domain names and take the certificate that they hand out, but it wouldn't provide the best user experience in terms of a simple URL.

So, for now, I'll be sticking with HTTP.  It isn't the worst thing in the world -- my website doesn't transfer any sensitive information anyways.  I understand that it is still [not ideal]('https://doesmysiteneedhttps.com/'), but I'll save it for when I have a bit more time on my hands.
