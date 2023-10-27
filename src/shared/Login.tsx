import {FC} from 'react';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { setUser } from "../store/slices/userSlice.ts";
import AppForm from "./AppForm.tsx";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../hooks/redux-hooks.ts";

const Login: FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken
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
