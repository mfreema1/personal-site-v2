import React from 'react';
import Heading from '../components/Heading';
import { Container, Row, Col } from 'reactstrap';
class About extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 10, offset: 1 }}>
                        <Heading text={"I Like to Think I have an Interesting Story"}/>

                        <p>I grew up on a farm in New Tripoli, Pennsylvania, which is basically the middle of nowhere.  A little before I was 10, I moved to Allentown and eventually graduated high school there.</p>
                        <p>Being around tractors and other heavy equipment, I developed an appreciation for machinery and the physics behind it, so I was dead-set on being a Mechanical Engineer.  I decided to attend Stevens Institute of Technology, declaring this as my major.</p>
                        <p>All engineers had to take an introductory programming course -- E-115, taught by a very special professor.  Through his class, I saw my first line of code, and eventually created a calculator mobile app to get out of the midterm.</p>
                        <p>This project came with a catch though -- he reasoned that since we gladly spent 20 hours making a calculator instead of 2 hours studying for his midterm, we must be crazy, or at least determined -- both of which are perfect for entrepreneurs.</p>
                        <p>I was offered the opportunity to join a digital healthcare startup as an Android developer, which I ended up doing for a little over a year.  Through this, I rubbed elbows with some very talented developers, and learned a little bit more about what it meant to write code.</p>
                        <p>In that year, I switched my major to Software Engineering, and have been writing code ever since.  I've tried my hand at a large chunk of the spectrum, dabbling in machine learning, system administration, mobile development, web development, and more.</p>
                        <p>I've had some incredible teachers and advisors along the way, who have shown me the value of continuous learning in software.  By trying new things, I think I tend to narrow down into what I like most, which at the time of this writing are Agile, cloud, and DevOps.</p>
                        <p>For now, I'm just having fun and trying to create software that helps people.</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default About;