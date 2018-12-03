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
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Resume;