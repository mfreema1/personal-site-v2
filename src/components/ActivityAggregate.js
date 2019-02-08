import React from 'react';
import Activity from './Activity';
import Loader from './Loader';
import { Row, Col, CardColumns } from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class ActivityAggregate extends React.Component {
    render() {
        // Check to see if we have any cards to render.  If not, then we should instead render a spinner that takes up the entire viewport to let
        // the user know that we are loading content.  If the request to GitHub fails, then we should notify the user that the content could not
        // be loaded.
        if(this.props.cards.length === 0) {
            return (
                <Row>
                    <Col>
                        <Loader />
                    </Col>
                </Row>
            )
        }
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