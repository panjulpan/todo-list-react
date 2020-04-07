import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';

export class NavBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand><h3>Todo App</h3></Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/activity">Home</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link href="/admin">Admin</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default NavBar;