import React from 'react';
import { Row, Col } from 'reactstrap';
class Footer extends React.Component {
    render() {
        return (
            <Row>
                <Col>
                    <footer className="navbar navbar-dark bg-dark d-flex justify-content-center">
                        <small clasName="special-font white-text">&copy; Mark Freeman (just kidding)</small>
                    </footer>
                </Col>
            </Row>
        )
    }
}

export default Footer;