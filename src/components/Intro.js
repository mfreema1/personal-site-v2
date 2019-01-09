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
                        <div class="spaced">
                            <p className="bigger-text special-font no-margin-bottom">My name is Mark.</p>
                            <p className="bigger-text special-font"> I like to write code.</p>
                            <small className="pushed-down special-font">(And some other stuff too => mainly Agile, Cloud, & DevOps)</small>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Selfie;