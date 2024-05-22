import React from 'react'
import { useAuth } from './AuthContext'
import { Navigate } from 'react-router-dom';
import RingLoader from "react-spinners/RingLoader";

export default function PrivateRoute({ children }) {
    const { isAuth, loadingUser } = useAuth();

    if (loadingUser) {
        return (
            <div className="flex items-center justify-center h-[100vh]">
                <RingLoader
                    color="#9747ff"
                    loading={true}
                    size={170}
                />
            </div>
        )
    }

    if (!isAuth) {
        return <Navigate to="/signin?isLogin=true" />;
    }

    return children;
}
