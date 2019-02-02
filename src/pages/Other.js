import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const html = decodeURI(require('../misc/README'));

class Other extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        {/* check how we do this right here -- you just give 'em one of these! */}
                        <div className="pushed-down" dangerouslySetInnerHTML={{__html: html}}></div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Other;