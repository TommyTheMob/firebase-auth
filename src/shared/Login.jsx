import React from 'react';
import { useDispatch } from "react-redux";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { setUser } from "../store/slices/userSlice.js";
import AppForm from "./AppForm.jsx";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = (email, password) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }))
                navigate('/')
            })
            .catch(() => alert('Invalid user/password!'))
    }

    return (
        <AppForm
            title='Log In'
            handleClick={handleLogin}
        />
    );
};

export default Login;
