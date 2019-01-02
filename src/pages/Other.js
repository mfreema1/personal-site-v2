import React from 'react';
import Markdown from '../components/Markdown';
import { Container, Row, Col } from 'reactstrap';

class Other extends React.Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Markdown className="pushed-down"/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Other;