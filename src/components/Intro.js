import React from 'react';
import { Row, Col } from 'reactstrap';
class Selfie extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col></Col>
                    <Col className="text-center">
                        <img className="selfie" src="/static/selfie.png"></img>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 8, offset: 2 }} className="text-center">
                        <div className="spaced">
                            <h1>My name is Mark.</h1>
                            <h1> I like to write code.</h1>
                            <small className="pushed-down special-font">(And some other stuff too => mainly Agile, Cloud, & DevOps)</small>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Selfie;