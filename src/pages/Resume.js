import React from 'react';
import Heading from '../components/Heading';
import { Container, Row, Col } from 'reactstrap';
class Resume extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 10, offset: 1 }}>
                        <Heading text={"My Resume"}/>
                        <p>If you'd like to take a look at my formal qualifications, I'll throw you a link right <a href="../static/resume.pdf">here.</a></p>
                        <p>I'll also throw in a text version of it below if you're not one for formatting.</p>
                        <p>TODO: RESUME</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Resume;