import React from 'react';

const RecoverPassword = () => {
    return (
       
             <div className='w-full'>
            <div className='text-center'>
                 <div className='mt-20'>
                <h1 className='text-4xl font-bold'>RECOVER PASSWORD</h1>
                </div>
                <form className='flex flex-col w-[40%] mx-auto mb-10'>
                    <input className='border mt-8 py-2 pl-4' placeholder='Email' type="email" name="" id="" />
                    <input className='border mt-5 py-2 pl-4 mb-12' placeholder='Password' type="password" name="" id="" />
                    <input className='bg-[#01BFD7] py-2 mb-5 text-white' type="submit" value="SUBMIT" />
                </form>
            </div>
        </div>
       
    );
};

export default RecoverPassword;