import React, { useState } from 'react';
import auth from '../../firebase.init';
import {sendPasswordResetEmail} from "firebase/auth";

const RecoverPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailBlur =(event)=>{
       setEmail(event.target.value);
    }

    const handleForgetPassword = (event) =>{
        event.preventDefault();
        sendPasswordResetEmail(auth, email)
        .then(() => {
          setMessage('An email was sent to you!')
        })
      }
    return (
       
             <div className='w-full'>
            <div className='text-center'>
                 <div className='mt-20'>
                <h1 className='text-4xl love-font'>RECOVER PASSWORD</h1>
                </div>
                <form onSubmit={handleForgetPassword} className='flex flex-col w-[40%] mx-auto mb-10'>
                    <input onBlur={handleEmailBlur} className='border mt-8 py-2 pl-4' placeholder='Email' type="email" name="" id="" />
                    <input className='border mt-5 py-2 pl-4 mb-12' placeholder='Password' type="password" name="" id="" />
                    {message && <p className='mb-5 text-red-500'>{message}</p>}
                    <input className='bg-[#01BFD7] py-2 mb-5 text-white' type="submit" value="SUBMIT" />
                </form>
            </div>
        </div>
       
    );
};

export default RecoverPassword;