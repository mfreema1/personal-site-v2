import React from 'react';
import Heading from '../components/Heading';
import { Container, Row, Col } from 'reactstrap';
class About extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Heading text={"I Like to Think I have an Interesting Story"}/>
                        <div class="custom-paragraphs">
                            <p>I grew up on a farm in New Tripoli, Pennsylvania.  In rural PA, there's not too much to do unless you're interested in the usual stuff -- tractors, farming, hunting, etc.  I got into woodworking and machinery early on, but not much of the other stuff.</p>
                            <p>I later moved to Allentown and eventually graduated high school there.  I had picked up an appreciation for heavy machinery and physics from my time on the farm, so I decided to attend Stevens Institute of Technology majoring in Mechanical Engineering.</p>
                            <p>Through some pretty incredible professors, I got to see my first line of code, and eventually switched majors to Software Engineering.  I immersed myself as much as possible off the bat -- doing hackathons, joining a startup, and taking online courseware to sharpen my skills.</p>
                            <p>This taught me quite a bit about programming, but most importantly, I learned how to teach myself.  Nowadays, I spend my time looking at DevOps, cloud computing, and Agile methodologies.  I also write programs in my free time, and try to pick up new tools whenever possible.</p>
                            <p>There's still a ton left to learn -- in the meantime, I'm just trying to make things that help people.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default About;