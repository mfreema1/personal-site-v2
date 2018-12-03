import React from 'react';
class Heading extends React.Component {
    render() {
        return (
            <div>
                <h1 className="heading">{this.props.text}</h1>
                <hr/>
            </div>
        )
    }
}

export default Heading;