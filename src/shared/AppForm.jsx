import React, {useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import googleLogo from '../assets/Google__G__Logo.svg';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const AppForm = ({ title, handleClick }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onGoogleBtnClick = () => {
        const auth = getAuth()
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then(res => console.log(res))
    }

    return (
        <Container className='mt-5 d-flex justify-content-center align-items-center'>
            <Form className='w-50'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Container className='d-flex flex-column justify-content-center align-items-center'>
                    <Button variant="success" onClick={() => handleClick(email, password)}>
                        {title}
                    </Button>
                    <Button onClick={onGoogleBtnClick} variant='outline-secondary' className='mt-1'>
                        <img className='me-2' src={googleLogo} alt="google-logo"/>
                        Continue with Google
                    </Button>
                </Container>
            </Form>
        </Container>
    );
};

export default AppForm;
