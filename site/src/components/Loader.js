import React from 'react';
import { Spinner } from 'reactstrap';

class Loader extends React.Component {
    render() {
        return (
            <div className="entire-viewport text-center">
                <Spinner color="primary" className="m-3"/>
                <div>
                    <small className="special-font">Just a moment please...</small>
                </div>
            </div>
        )
    }
}

export default Loader;