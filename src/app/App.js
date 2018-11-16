import React from 'react';
import NavBar from '../components/NavBar';
import Intro from '../components/Intro';

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Intro />
            </div>
        )
    }
}

export default App;