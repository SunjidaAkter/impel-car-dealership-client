import axios from 'axios';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useAccessToken from '../../../Hooks/useAccessToken';
import Loading from '../../Shared/Loading/Loading';
import SocialSignIn from '../SocialSignIn/SocialSignIn';

const SignIn = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useAccessToken(user);
    if (token) {
        let from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
    }

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>{error?.message}</p>
    }

    const handleSignIn = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('https://powerful-island-01636.herokuapp.com/signIn', { email });
        localStorage.setItem('accessToken', data.accessToken);

    }

    const navigateSignUp = event => {
        navigate('/signUp');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }
    return (
        <div className='container py-5 w-50'>
            <Form onSubmit={handleSignIn} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" name="" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='d-block w-100' variant="dark" type="submit">
                    Sign In
                </Button>
                {errorElement}
            </Form>
            <SocialSignIn></SocialSignIn>
            <div className='d-flex justify-content-between'>
                <p className='mt-1'>New to IMPEL? <Link to="/signUp" className=' text-success pe-auto text-decoration-none' onClick={navigateSignUp}>Please Sign Up</Link> </p>
                <p>Forget Password?<button className='btn btn-link text-success pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            </div>
        </div>
    );
};

export default SignIn;