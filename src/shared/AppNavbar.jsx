import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";
import logo from '../assets/firebase-icon.svg'

const AppNavbar = () => {
    return (
        <>
            <Navbar expand='lg' className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Firebase
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
};

export default AppNavbar;
