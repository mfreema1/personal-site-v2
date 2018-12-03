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

                        <p>So, it shouldn't be a secret that I'm a software developer -- and a very new one at that.  I saw my first line of code in my first semester of college, and to be honest, I didn't really care for it.  I flat out didn't understand it and didn't really see the importance of it.  It wasn't until my professor offered the entire class to escape the midterm by creating a mobile application that I started experimenting with code.</p>
                        <p>It was a simple grade calculator for the course, but the upfront learning curve would be harsh.  I had no idea what a mobile app was, and the only language I half-knew at the time was C++.  When I asked him for the best course of action, he seemed intentionally vague.  He gave me the name of a tool, Android Studio, and told me that Java, the language it uses, is a lot like C++.  Beyond that, I was on my own.</p>
                        <p>After downloading this IDE, I jumped into coding.  I looked at how other people could pull in information from the UI as data and tried to emulate that in my project.  The Android documentation was helpful, but contained walls of jargon, class references, and Java logic that I couldn't comprehend at the time.  I decided that in order for my user to view the results of the application, I would need to open a new Activity and pass in the result.</p>
                        <p>This proved to be a daunting task.  Time after time I ran into null pointer exceptions when trying to catch the data in the receiving activity via an Intent.  Keep in mind, I was very new to debugging at this point, so my attempts to solve this involved rebuilding the application from scratch at least once.  I must have spent at least 20 hours trying to simplify my code and figure out exactly what was the cause of this error.</p>
                        <p>Eventually, after a couple of long nights spent over my laptop, I figured out the source of my error, and emailed the professor, eager to show him my revolutionary new calculator.  The email went something like this:</p>
                        
                        <p>Me: Hey professor, I've finished that app you wanted!</p>
                        <p>Prof: Awesome! Swing by my office tonight, there's something you'll want to see.</p>
                        
                        <p>Upon walking in, </p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default About;