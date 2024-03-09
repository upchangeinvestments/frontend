import React from 'react'
import { useAuth } from './AuthContext'
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function PrivateRoute({ children }) {
    const { isAuth } = useAuth();
    // console.log(isAuth)

    if (!isAuth) {
        toast("Please Sign In/Sign Up first");
        return <Navigate to="/signin" />
    }

    return children;
}
