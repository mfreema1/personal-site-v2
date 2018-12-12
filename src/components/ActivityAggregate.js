import React from 'react';
import Activity from './Activity';
import { Row, Col, CardColumns } from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class ActivityAggregate extends React.Component {
    render() {
        return (
            <Row>
                <Col sm="12" md={{ size: 10, offset: 1 }}>
                    <CardColumns>
                        <ReactCSSTransitionGroup
                            transitionName="card"
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={300}>
                            {this.props.cards.map((card) => {
                                return <Activity { ...card }/>
                            })}
                        </ReactCSSTransitionGroup>
                    </CardColumns>
                </Col>
            </Row>
        )
    }
}

export default ActivityAggregate;