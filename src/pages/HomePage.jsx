import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../hooks/useAuth.js";
import {Button, Container} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {removeUser} from "../store/slices/userSlice.js";

const HomePage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isAuth, email } = useAuth()

    useEffect(() => {
        if (!isAuth) {
            navigate('/login')
        }
    }, [isAuth]);

    const onLogoutBtnClick = () => {
        dispatch(removeUser())
    }

    return (
        <Container className='text-center'>
            <h1>Welcome</h1>
            <Button onClick={onLogoutBtnClick} variant='outline-secondary'>Logout</Button>
        </Container>
    );
};

export default HomePage;
