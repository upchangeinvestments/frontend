import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();
    const contextValue = {
        isAuth, handleUpdateAuth, user, setUser, logout, baseUrl, backendUrl
    };

    function handleUpdateAuth(value) {
        return setIsAuth(value);
    }
    function logout() {
        if (user.googleId) {
            window.open(`${backendUrl}/auth/logout`, '_self');
        } else {
            localStorage.removeItem('token');
            navigate("/");
        }
        setIsAuth(false);
        setUser({});
    }

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
            setIsAuth(false);
        }
    };
    const getUser = async () => {
        try {
            const url = `${backendUrl}/auth/googlelog/success`;
            const response = await axios.get(url, { withCredentials: true });
            // console.log("google data: ", response.data.user);

            setUser(response.data.user);
            setIsAuth(true);

        } catch (err) {
            console.log(err);
            setIsAuth(false);
        }
    };

    useEffect(() => {
        if (token) {
            handleVerify(token);
        } else {
            getUser();
        }
    }, [token]);

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;


