import React from 'react';
import {Container} from "react-bootstrap";
import SignUp from "../shared/SignUp.jsx";
import {Link} from "react-router-dom";

const RegisterPage = () => {
    return (
        <Container className='text-center'>
            <h1>Register</h1>

            <SignUp />
            <p className='mt-2'>
                Already have an account?{' '}
                <Link to='/login'>Log in</Link>
            </p>
        </Container>
    );
};

export default RegisterPage;
