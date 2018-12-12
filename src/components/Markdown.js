import React from 'react';
class Markdown extends React.Component {
    render() {
        return (
            // this markdown is auto-generated via the `npm run convert` script.
            <div className="pushed-down"><h1 class="special-font big-text">My Personal Website (A Learning Experience)</h1><hr /><p>This is actually my second attempt at making a website.  For my first attempt, I didn&#39;t quite have an understanding of the web.  This time around, I&#39;m doing a little bit better, so figured I&#39;d give it a go.  This is the result.</p>
<h3 class="special-font">Technology Used</h3><p>As mentioned above, this was really just to try my hand at some new tech.  I wanted to give React/Redux a shot, as well as some new npm packages that I thought were cool.  In total, this website uses:</p>
<ul>
<li>Build:<ul>
<li>Babel</li>
<li>Webpack</li>
<li>Marked (generating this page)</li>
</ul>
</li>
<li>Languages:<ul>
<li>JS (ES6)</li>
<li>Hints of HTML and CSS</li>
</ul>
</li>
<li>Frameworks:<ul>
<li>React</li>
<li>Bootstrap via Reactstrap</li>
</ul>
</li>
</ul>
<p>In the future:</p>
<ul>
<li>Express</li>
<li>NGINX?</li>
</ul>
</div>
        )
    }
}

export default Markdown;