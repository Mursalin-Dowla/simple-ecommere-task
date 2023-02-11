import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAdminAuth = ({children}) => {
    let toggle = false;
    const [user] = useAuthState(auth);
    const location = useLocation();
  if(user?.email === "mursalindowla844@gmail.com"){
    toggle = true;
  }

    if(toggle === false){
        return <Navigate to='/adminlogin' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default RequireAdminAuth;