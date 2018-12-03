import React from 'react';
import Activity from './Activity';
import { Row, Col, CardColumns } from 'reactstrap';
class ActivityAggregate extends React.Component {
    render() {
        return (
            <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <CardColumns>
                        {this.props.cards.map((card) => {
                            return <Activity title={card.title} text={card.text} subtitle={card.subtitle} url={card.url}/>
                        })}
                    </CardColumns>
                </Col>
            </Row>
        )
    }
}

export default ActivityAggregate;