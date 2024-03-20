import React, { useEffect, useState, useContext } from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';

const AuthContext = React.createContext();

var baseUrl, backendUrl;
if (process.env.REACT_APP_NODE_ENV === "dev") {
    baseUrl = process.env.REACT_APP_BASE_URL;
    backendUrl = process.env.REACT_APP_BACKEND_URL;
} else {
    baseUrl = process.env.REACT_APP_BASE_URL_PROD;
    backendUrl = process.env.REACT_APP_BACKEND_URL_PROD;
}

export function useAuth() {
    return useContext(AuthContext);
}


const AuthProvider = ({ children }) => {
    const token = localStorage.getItem('token');
    const [isAuth, setIsAuth] = useState(!!localStorage.getItem('token'));
    const [user, setUser] = useState({});
    const contextValue = {
        isAuth, handleUpdateAuth, user, logout, baseUrl, backendUrl
    };

    function handleUpdateAuth(value) {
        return setIsAuth(value);
    }
    function logout() {
        localStorage.removeItem('token');
        setIsAuth(false);
        setUser({});
    }

    const getUser = async () => {
        try {
            const url = `${backendUrl}/auth/googlelog/success`;
            const response = await axios.get(url, { withCredentials: true });
            console.log("google data: ", response);
            // setUser(data.user._json);
        } catch (err) {
            console.log(err);
        }
    };

    const handleVerify = async (token) => {
        try {
            const response = await axios.get(`${backendUrl}/auth/verify?token=${token}`);
            if (response.status === 200 && response.data.status === 'success') {
                // console.log(response.data);
                setIsAuth(true);
                setUser(response.data.user);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (token) {
            handleVerify(token);
        } else {
            getUser();
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


