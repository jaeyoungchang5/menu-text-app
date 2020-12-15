import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';

function Navigation(props) {

    let userPortal;
    if (props.user == null) {
        userPortal =
                <Nav className="mr-auto">
            
                <Nav.Link href="/menus">Menus</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">Signup</Nav.Link>
                </Nav>
    } else {
        userPortal = 
                <Nav className="mr-auto">

                <Nav.Link href="/menus">Menus</Nav.Link>
                <Nav.Link href={"/user/" + props.user.username}>{props.user.username}</Nav.Link>
                <Nav.Link href="/" onClick={props.handleLogout}>Logout</Nav.Link>
                </Nav>
    }
    
    return (
        <Navbar id="menu" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">Menu Text App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                {userPortal}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;