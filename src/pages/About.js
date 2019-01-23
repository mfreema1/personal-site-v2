import React from 'react';
import Heading from '../components/Heading';
import CaptionedImage from '../components/CaptionedImage';
import { Container, Row, Col } from 'reactstrap';
class About extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Heading text={"I Like to Think I have an Interesting Story"}/>
                        <div class="custom-paragraphs">
                            <p class="italics drop-cap"><span class="big-text">tl;dr</span> I just recently started programming but I really enjoy doing it.  I write some in my free time and try to focus on newer stuff like Agile, cloud, and DevOps.</p>
                            
                            <h4 class="bolded body-font">Humble Beginnings</h4>
                            <p>I grew up on a farm in New Tripoli, Pennsylvania.  In rural PA, there's not too much to do unless you're interested in the usual stuff -- tractors, farming, hunting, etc.  I got into woodworking and machinery early on, but not much of the other stuff.</p>
                            <CaptionedImage src="/static/field.jpg" caption="Not the exact place, but it's pretty close to the real deal" artistUrl="https://unsplash.com/@petritzdesigns" artistName="Markus Petritz"/>
                            <p>I later moved to Allentown and eventually graduated high school there.  I had picked up an appreciation for heavy machinery and physics from my time on the farm, so I decided to attend Stevens Institute of Technology majoring in Mechanical Engineering.</p>
                            
                            <h4 class="bolded body-font">Out of the Frying Pan</h4>
                            <p>Through some pretty incredible professors, I got to see my first line of code, and eventually switched majors to Software Engineering.  I immersed myself as much as possible off the bat -- doing hackathons, joining a startup, and taking online courseware to sharpen my skills.</p>
                            <CaptionedImage src="/static/computer.jpg" caption="There isn't much that can beat a quiet morning of tea and code" artistUrl="https://unsplash.com/@clemhlrdt" artistName="Clément H"/>
                            <p>This taught me quite a bit about programming, but most importantly, I learned how to teach myself.  Nowadays, I spend my time looking at DevOps, cloud computing, and Agile methodologies.  I also write programs in my free time, and try to pick up new tools whenever possible.</p>
                            
                            <h4 class="bolded body-font">Looking Forward</h4>
                            <p>There's still a ton left to learn -- in the meantime, I'm just trying to make things that help people.  I tend to switch projects fairly frequently, but the ones I'm working on right now are:</p>
                            <ul class="custom-list bottom-space">
                                <li><a href="github.com/mfreema1/anonymouse">Anonymouse</a> - an anonymous question service for classrooms</li>
                                <li><a href="github.com/mfreema1/food-crawler">MyCookbook</a> - a utility to help people make their own cookbooks from their favorite recipes</li>
                                <li><a href="github.com/mfreema1/pi-research">Raspberry Flow</a> - a research project I'm working on at my university to help see why people go where they do</li>
                            </ul>
                            <CaptionedImage src="/static/raspberry.jpg" caption="Now if only we could make Raspberry Flow taste like an actual raspberry flow" artistUrl="https://unsplash.com/@natalie_rhea" artistName="Natalie Rhea Riggs"/>
                            <p>If you want to check out some of my stuff over at my <a href="github.com/mfreema1">GitHub</a> profile I'd be flattered.  I really enjoy what I do, and I'm always happy to chat about it :)</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default About;