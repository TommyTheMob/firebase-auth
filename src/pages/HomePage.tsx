import {useEffect, FC} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../hooks/useAuth.ts";
import {Button, Container} from "react-bootstrap";
import {removeUser} from "../store/slices/userSlice.ts";
import {useAppDispatch} from "../hooks/redux-hooks.ts";

const HomePage: FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { isAuth} = useAuth()

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
