<!-- We're going to just put in an html page here and have GitHub render it as a standard page.  We'll then run this over to a JavaScript module so that we can have it display the same page
to the React client by importing the html string as a module.  Since fs is stubbed out in react, we have to incorporate it as a build step. -->
<h1>My Website (A Learning Experience)</h1>
<hr/>
<p>This is actually my second attempt at making a website.  For my first attempt, I didn't quite have an understanding of the web.  This time around, I'm doing a little bit better, so figured I'd give it a go.  This is the result.<p>

<div class="row">
    <div class="col">
        <h4 class="bolded">Why Make a Website?</h3>
        <p>Well, now that I have a domain, I can host almost whatever I want up here!  I wouldn't be surprised if I started some kind of portfolio or blog to be honest.  The possibilities are endless.</p>
        <p>Side note:  If you're reading this page on the <a href="https://github.com/mfreema1/personal-site-v2">GitHub</a>, then you'll be seeing this as just plain-old markdown.  But, if you're on my <a href="http://mrkfrmn.com">website</a>, then you'll be viewing this page as HTML.  This is done using <a href="https://www.npmjs.com/package/marked">Marked</a>, which is a markdown parser that can be used to generate HTML.  Neat!</p>
        <h4 class="bolded">Technology Used</h3>
        <p>As mentioned above, this was really just to try my hand at some new tech.  I wanted to give React a shot, as well as some new npm packages that I thought were cool.  In total, this website uses:</p>
        <ul>
            <li>Build:
                <ul>
                    <li>Babel</li>
                    <li>Webpack</li>
                </ul>
            </li>
            <li>Languages:
                <ul>
                    <li>JS (ES6)</li>
                    <li>Hints of HTML / CSS</li>
                </ul>
            </li>
            <li>Frameworks:
                <ul>
                    <li>React</li>
                    <li>Bootstrap via Reactstrap</li>
                </ul>
            </li>
            <li>Hosting / Delivery:
                <ul>
                    <li>Amazon S3</li>
                    <li>Cloudfront</li>
                </ul>
            </li>
        </ul>
    </div>
    <div class="col-md-auto align-right">
        <img src="/static/books.jpg"/>
    </div>
</div>