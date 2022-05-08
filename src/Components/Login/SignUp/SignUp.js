import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import useAccessToken from '../../../Hooks/useAccessToken';

const SignUp = () => {
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [token] = useAccessToken(user);
    if (token) {
        navigate(from, { replace: true });
    }

    const navigateSignIn = () => {
        navigate('/signIn');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    // let errorElement;
    // if (error || updateError) {
    //     errorElement = <p className='text-danger'>Error: {error?.message}</p>
    // }

    const handleSignUp = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        // navigate(from, { replace: true });
    }
    return (
        <div className='container my-5 py-5 margin w-50'>
            <h1 className='find mb-5 mt-2'>SIGN UP</h1>
            <Form onSubmit={handleSignUp}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="name" placeholder="Enter name" name="name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" name="email" required />
                </Form.Group>
                {error?.message ===
                    "Firebase: Error (auth/email-already-in-use)." && (
                        <p className="text-danger">
                            Email already in use!
                        </p>
                    )}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" name="password" required />
                </Form.Group>
                <Button className='d-block w-100' variant="dark" type="submit">
                    Sign Up
                </Button>
            </Form>
            {/* {errorElement} */}
            {error?.message !== "Firebase: Error (auth/email-already-in-use)." && (
                <p className="text-danger">
                    {error?.message}
                </p>
            )}
            <p>Already have an account? <Link to="/signIn" className='text-success pe-auto text-decoration-none' onClick={navigateSignIn}>Please Sign In</Link> </p>
        </div>
    );
};

export default SignUp;