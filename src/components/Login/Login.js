import React, { useState } from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [signInWithEmailAndPassword, user,loading, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";

    const handleEmailBlur = (event) =>{
        setEmail(event.target.value)
    }
    const handlePasswordBlur = (event) =>{
        setPassword(event.target.value)
    }
    if (user) {
        navigate(from, {replace:true});
      }
    const handleOnSubmit = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='w-full'>
            <div className='text-center'>
                 <div className='mt-20'>
                <h1 className='text-4xl font-bold'>LOGIN</h1>
                </div>
                <form onSubmit={handleOnSubmit} className='flex flex-col w-[40%] mx-auto'>
                    <input onBlur={handleEmailBlur} className='border mt-8 py-2 pl-4' placeholder='Email' type="email" name="" id="" required/>
                    <input onBlur={handlePasswordBlur} className='border mt-5 py-2 pl-4 mb-12' placeholder='Password' type="password" name="" id="" required/>
                    {loading && <p>Loading...</p>}
                    <p className='mb-5' style={{color:'red'}}>{error?.message}</p>
                    <input className='bg-[#01BFD7] cursor-pointer py-2 mb-5 text-white' type="submit" value="LOGIN" />
                </form>
                <p className='mb-20 text-gray-700'> <span className='mr-3 cursor-pointer'><Link to='/signup'>Create account</Link> </span>  /  <span className='ml-3'><Link to='/recoverpassword'>Forgot your password?</Link></span></p>
            </div>
        </div>
    );
};

export default Login;