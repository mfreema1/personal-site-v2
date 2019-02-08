import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Resume from '../pages/Resume';
import Other from '../pages/Other';
import RandomTag from './RandomTag';
class Header extends React.Component {

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Navbar className="navbar-dark bg-dark">
                            <NavbarBrand><Link className="white-link special-font" to="/"><RandomTag /></Link></NavbarBrand>
                                <Nav className="ml-auto">
                                    <NavItem>
                                        <NavLink><Link className="white-link special-font" to="/about/">About</Link></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink><Link className="white-link special-font" to="/resume/">Resume</Link></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink><Link className="white-link special-font" to="/other/">Other</Link></NavLink>
                                    </NavItem>
                                </Nav>
                        </Navbar>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about/" component={About}/>
                        <Route path="/resume/" component={Resume}/>
                        <Route path="/other/" component={Other}/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Header;