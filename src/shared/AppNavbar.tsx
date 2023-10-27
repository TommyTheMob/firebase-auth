import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";
import logo from '../assets/firebase-icon.svg'
import {useAuth} from "../hooks/useAuth.ts";
import {FiLogOut} from "react-icons/fi";
import {useDispatch} from "react-redux";
import {removeUser} from "../store/slices/userSlice.ts";

const AppNavbar = () => {
    const {isAuth, email} = useAuth()
    const dispatch = useDispatch()

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
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                        </Nav>
                        {isAuth &&
                            <div className='d-flex align-items-center justify-content-around'>
                                <Navbar.Text className='me-1'>
                                    {email.substring(0, email.indexOf('@'))}
                                </Navbar.Text>
                                <FiLogOut
                                    style={{cursor: 'pointer'}}
                                    onClick={() => dispatch(removeUser())}
                                />
                            </div>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet/>
        </>
    );
};

export default AppNavbar;
