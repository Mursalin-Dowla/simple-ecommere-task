import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  if (user) {
    navigate("/login");
  }
  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        password
      )
    ) {
      setError(
        '"Full-fill the requirements for password: an alphabet of both case, a number, a special character ,at least 8 character"'
      );
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };
    return (
        <div className='w-full'>
        <div className='text-center'>
             <div className='mt-20'>
            <h1 className='text-4xl font-bold'>CREATE ACCOUNT</h1>
            </div>
            <form onSubmit={handleOnSubmit} className='flex flex-col w-[40%] mx-auto'>
                <input className='border mt-8 py-2 pl-4' type="text" name="firstname" id="firstname"  placeholder='First name' required/>
                <input className='border mt-8 py-2 pl-4' type="text" name="lastname" id="lastname"  placeholder='Last name' required/>
                <input onBlur={handleEmailBlur} className='border mt-8 py-2 pl-4' placeholder='Email' type="email" name="" id=""  required/>
                <input onBlur={handlePasswordBlur} className='border mt-5 py-2 pl-4 mb-12' placeholder='Password' type="password" name="" id="" required />
                <p style={{ color: "red" }}>{error}</p>
                <input className='bg-[#01BFD7] cursor-pointer py-2 mb-5 text-white' type="submit" value="SIGNUP" />
            </form>
            <div className='text-left w-[40%] mx-auto'>
            <p className='mb-20 text-gray-700'> <span className='mr-3'> ALready have an account?</span>    <span className='ml-3 border border-x-0 border-t-0 pb-[2px] border-b-gray-600 cursor-pointer'><Link to='/login'>Back to Login</Link></span></p>
            </div>
        </div>
    </div>
    );
};

export default SignUp;