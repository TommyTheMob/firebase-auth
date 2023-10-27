import React from 'react';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {useDispatch} from "react-redux";
import AppForm from "./AppForm.tsx";
import {setUser} from "../store/slices/userSlice.ts";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSignUp = (email, password) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }))
                navigate('/')
            })
            .catch(console.error)
    }

    return (
        <AppForm
            title='Register'
            handleClick={handleSignUp}
        />
    );
};

export default SignUp;
