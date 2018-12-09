import React from 'react';
import Markdown from '../components/Markdown';
import { Container, Row, Col } from 'reactstrap';

class Other extends React.Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 10, offset: 1 }}>
                        <Markdown className="pushed-down"/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Other;