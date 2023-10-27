import React from 'react';
import {Container} from "react-bootstrap";
import Login from "../shared/Login.tsx";
import {Link} from "react-router-dom";

const LoginPage = () => {
    return (
        <Container className='text-center'>
            <h1>Login</h1>

            <Login />
            <p className='mt-2'>
                Doesnt have an account?{' '}
                <Link to='/register'>Sign up</Link>
            </p>
        </Container>
    );
};

export default LoginPage;
