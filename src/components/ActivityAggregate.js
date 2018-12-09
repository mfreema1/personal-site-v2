import React from 'react';
import Activity from './Activity';
import { Row, Col, CardColumns } from 'reactstrap';
class ActivityAggregate extends React.Component {
    render() {
        return (
            <Row>
                <Col sm="12" md={{ size: 10, offset: 1 }}>
                    <CardColumns>
                        {this.props.cards.map((card) => {
                            return <Activity { ...card }/>
                        })}
                    </CardColumns>
                </Col>
            </Row>
        )
    }
}

export default ActivityAggregate;