import {FC} from 'react';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import AppForm from "./AppForm.tsx";
import {setUser} from "../store/slices/userSlice.ts";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../hooks/redux-hooks.ts";

const SignUp: FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleSignUp = (email: string, password: string) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken
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
