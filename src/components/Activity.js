import React from 'react';
import { Card, CardHeader, CardText, CardBody, CardLink } from 'reactstrap';
import moment from 'moment';

class Activity extends React.Component {

    //determine how long ago time stamp was
    getPassedTime(stamp) {
        return moment(stamp).fromNow();
    }

    render() {
        if(!this.props.commits) return null;
        return (
            <div>
                <Card outline color="primary">
                    <CardHeader>
                        <CardLink target="_blank" href={`https://github.com/${this.props.repo}`}>
                            {this.props.repo}
                        </CardLink>
                    </CardHeader>
                    <CardBody>
                        <CardText>
                            <ul className="no-margin-list">
                                {this.props.commits.map((commit) => {
                                return <li>{commit.message}</li>
                                })}
                            </ul>
                        </CardText>
                        <small className="text-muted">{`Pushed ${moment(this.props.createdAt).fromNow()}`}</small>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Activity;