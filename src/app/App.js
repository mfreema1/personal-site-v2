import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Footer/>
            </div>
        )
    }
}

export default App;