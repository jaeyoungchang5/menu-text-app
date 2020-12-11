import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';

function Menu(props) {

    let userPortal;
    if (props.user == null) {
        userPortal =
            <div>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">Signup</Nav.Link>
            </div>
    } else {
        userPortal = 
            <div>
                <Nav.Link href="/">{props.user.username}</Nav.Link>
                <Nav.Link href="/" onClick={props.handleLogout}>Logout</Nav.Link>
            </div>
    }
    
    return (
        <Navbar id="menu" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">Menu Text App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {userPortal}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Menu;