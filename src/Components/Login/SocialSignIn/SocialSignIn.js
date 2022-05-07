import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import googleIcon from "../../../Media/icons/googleIcon.png";
import auth from '../../../firebase.init';

const SocialSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
    }

    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div className='w-100'>
                <div className='d-flex align-items-center my-3'>
                    <div style={{ height: '1px', backgroundColor: 'white' }} className=' w-50'></div>
                    <p className='mt-2 px-2'>OR</p>
                    <div style={{ height: '1px', backgroundColor: 'white' }} className='w-50'></div>
                </div>
                <div className=''>
                    <button
                        onClick={() => signInWithGoogle()}
                        className='btn btn-dark w-100 d-block mx-auto my-2'>
                        <img style={{ width: '30px' }} src={googleIcon} alt="" />
                        <span className='px-2'>Connect With Google</span>
                    </button>
                    {errorElement}
                </div>
            </div>
        </div>
    );
};

export default SocialSignIn;
