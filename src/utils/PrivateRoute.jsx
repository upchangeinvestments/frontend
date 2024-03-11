import React from 'react'
import { useAuth } from './AuthContext'
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
    const { isAuth } = useAuth();
    // console.log(isAuth)

    if (!isAuth) {
        return <Navigate to="/signin" />
    }

    return children;
}
