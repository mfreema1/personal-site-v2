import React from 'react';
import { Container, Row, Col } from 'reactstrap';
class Selfie extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col></Col>
                    <Col className="text-center">
                        <img className="selfie" src="../static/selfie.png"></img>
                            <p className="banner-text">My name is Mark.  I like to write code.</p>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}

export default Selfie;