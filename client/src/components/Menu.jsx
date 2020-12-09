import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';

function Menu() {
    return (
        <Navbar id="menu" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">Menu Text App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/signup">Signup</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Menu;