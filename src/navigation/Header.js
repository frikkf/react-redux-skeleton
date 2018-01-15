import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

const Header = () => (
    <Navbar >
        <Navbar.Header>
            <LinkContainer to="/">
                <Navbar.Brand>
                    Home
                </Navbar.Brand>
            </LinkContainer>
        </Navbar.Header>
        <Nav >
            <LinkContainer to="/counter">
                <NavItem eventKey={1}>
                    Counter
                </NavItem>
            </LinkContainer>
            <LinkContainer to="/users">
                <NavItem eventKey={2}>
                    UserList
                </NavItem>
            </LinkContainer>
        </Nav>
    </Navbar>
);

export default Header;
