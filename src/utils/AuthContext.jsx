import React, { useEffect, useState, useContext } from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}


const AuthProvider = ({ children }) => {
    const token = localStorage.getItem('token');
    const [isAuth, setIsAuth] = useState(!!localStorage.getItem('token'));
    const [user, setUser] = useState({});
    const contextValue = {
        isAuth, handleUpdateAuth, user, logout
    };

    function handleUpdateAuth(value) {
        return setIsAuth(value);
    }
    function logout() {
        localStorage.removeItem('token');
        setIsAuth(false);
        setUser({});
    }

    useEffect(() => {
        const handleVerify = async (token) => {
            try {
                const response = await axios.get(`http://localhost:5000/auth/verify?token=${token}`);
                if (response.status === 200 && response.data.status === 'success') {
                    // console.log(response.data);
                    setIsAuth(true);
                    setUser(response.data.user);
                }
            } catch (error) {
                console.log(error);
            }
        };

        if (token) {
            handleVerify(token);
        } else {
            setIsAuth(false);
        }
    }, [token]);

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;


