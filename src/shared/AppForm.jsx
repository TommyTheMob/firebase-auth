import React, {useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";

const AppForm = ({ title, handleClick }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
                <Container className='d-flex justify-content-center align-items-center'>
                    <Button variant="success" onClick={() => handleClick(email, password)}>
                        {title}
                    </Button>
                </Container>
            </Form>
        </Container>
    );
};

export default AppForm;
