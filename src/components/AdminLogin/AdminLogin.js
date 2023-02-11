import React, { useState } from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AdminLogin = () => {
    const [email, setEmail]= useState('');
    const [myError, setMyError]= useState('');
    const [password, setPassword]= useState('');
    const [signInWithEmailAndPassword, user,loading, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
   
    

    const handleEmailBlur = (event) =>{
        setEmail(event.target.value)
    }
    const handlePasswordBlur = (event) =>{
        setPassword(event.target.value)
    }
    if (user) {
        navigate('/users');
      }
    const handleOnSubmit = event =>{
        event.preventDefault();
        if(email !== 'mursalindowla844@gmail.com'){
            setMyError('This is not an Admin account');
            return; 
        }
        else{
            signInWithEmailAndPassword(email, password);
        }
    }
    return (
        <div className='w-full'>
            <div className='text-center'>
                 <div className='mt-20'>
                <h1 className='text-4xl love-font'>ADMIN LOGIN</h1>
                </div>
                <form onSubmit={handleOnSubmit} className='flex flex-col w-[40%] mx-auto'>
                    <input onBlur={handleEmailBlur} className='border mt-8 py-2 pl-4' placeholder='Email' type="email" name="" id="" required/>
                    <input onBlur={handlePasswordBlur} className='border mt-5 py-2 pl-4 mb-12' placeholder='Password' type="password" name="" id="" required/>
                    {loading && <p>Loading...</p>}
                    <p className='mb-2' style={{color:'red'}}>{error?.message}</p>
                    {myError && <p className='text-red-500 mb-2'>{myError}</p>}
                    <input className='bg-[#01BFD7] cursor-pointer py-2 mb-5 text-white' type="submit" value="LOGIN" />
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;