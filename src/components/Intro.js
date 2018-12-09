import React from 'react';
import { Row, Col } from 'reactstrap';
class Selfie extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col></Col>
                    <Col className="text-center">
                        <img className="selfie" src="../static/selfie.png"></img>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center">
                        <div class="spaced">
                            <p className="big-text special-font">My name is Mark.  I like to write code.</p>
                            <small className="special-font">And some other stuff too => mainly Agile, Cloud, & DevOps</small>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Selfie;