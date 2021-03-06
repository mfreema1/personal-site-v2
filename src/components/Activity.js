import React from 'react';
import { Card, CardHeader, CardText, CardBody, CardLink } from 'reactstrap';
import moment from 'moment';

class Activity extends React.Component {

    //determine how long ago time stamp was
    getPassedTime(stamp) {
        return moment(stamp).fromNow();
    }

    render() {
        // Don't believe we perform the check here.  The aggregate should handle the check for the loader
        return (
            <div key={this.props.id}>
                <Card outline color="primary" className="shadowed">
                    <CardHeader>
                        <CardLink target="_blank" href={`https://github.com/${this.props.repo}`}>
                            {this.props.repo}
                        </CardLink>
                    </CardHeader>
                    <CardBody>
                        <CardText>
                            <ul className="no-margin-list keep-indent">
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