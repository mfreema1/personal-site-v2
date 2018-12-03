import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardLink } from 'reactstrap';
class Activity extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap">
                        {/* {this.props.imgUrl} */}
                    </CardImg>
                    <CardBody>
                        <CardTitle>
                            {this.props.title}
                        </CardTitle>
                        <CardSubtitle>
                            {this.props.subtitle}
                        </CardSubtitle>
                        <CardText>
                            {this.props.text}
                        </CardText>
                        <CardLink href="#"/*href={this.props.url}*/>
                            Check it out
                        </CardLink>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Activity;