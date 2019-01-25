import React from 'react';
// import Markdown from '../components/Markdown';
import { Container, Row, Col } from 'reactstrap';
const html = decodeURI(require('./otherHTMLModule'));

class Other extends React.Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <div className="pushed-down" dangerouslySetInnerHTML={{ __html: html }}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Other;