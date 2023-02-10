import React from 'react';

const SignUp = () => {
    return (
        <div className='w-full'>
        <div className='text-center'>
             <div className='mt-20'>
            <h1 className='text-4xl font-bold'>CREATE ACCOUNT</h1>
            </div>
            <form className='flex flex-col w-[40%] mx-auto'>
                <input className='border mt-8 py-2 pl-4' type="text" name="firstname" id="firstname"  placeholder='First name'/>
                <input className='border mt-8 py-2 pl-4' type="text" name="lastname" id="lastname"  placeholder='Last name'/>
                <input className='border mt-8 py-2 pl-4' placeholder='Email' type="email" name="" id="" />
                <input className='border mt-5 py-2 pl-4 mb-12' placeholder='Password' type="password" name="" id="" />
                <input className='bg-[#01BFD7] py-2 mb-5 text-white' type="submit" value="SIGNUP" />
            </form>
            <div className='text-left w-[40%] mx-auto'>
            <p className='mb-20 text-gray-700'> <span className='mr-3'> ALready have an account?</span>    <span className='ml-3 border border-x-0 border-t-0 pb-[2px] border-b-gray-600'>Back to Login</span></p>
            </div>
        </div>
    </div>
    );
};

export default SignUp;