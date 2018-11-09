import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Header extends React.Component {

    render() {
        return (
            <div>
                <Navbar color="light">
                    <NavbarBrand href="/">Mark Freeman</NavbarBrand>
                        <Nav className="ml-auto">
                            <NavItem>
                                <NavLink href="/about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/developers">Developers</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/follow">Follow</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>Options</DropdownToggle>
                            
                            <DropdownMenu right>
                            <DropdownItem>Option 1</DropdownItem>
                            <DropdownItem>Option 2</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Reset</DropdownItem>
                            </DropdownMenu>

                            </UncontrolledDropdown>
                        </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Header;