import {FC} from 'react';
import {Container} from "react-bootstrap";
import SignUp from "../shared/SignUp.tsx";
import {Link} from "react-router-dom";

const RegisterPage: FC = () => {
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
