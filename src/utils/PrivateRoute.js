import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';

const PrivateRoute = () => {
    const token = localStorage.getItem('token');
    const [isValid, setIsValid] = useState(null);

    useEffect(() => {
        const handleVerify = async (token) => {
            try {
                const response = await axios.post(`http://localhost:5000/auth/verify?token=${token}`);
                if (response.status === 200 && response.data.status === 'success') {
                    setIsValid(true);
                } else {
                    setIsValid(false);
                }
            } catch (error) {
                console.log(error);
                setIsValid(false);
            }
        };

        if (token) {
            handleVerify(token);
        } else {
            setIsValid(false);
        }
    }, [token]);

    if (isValid === null) {
        return null;
    } else if (isValid) {
        return <Outlet />;
    } else {
        return <Navigate to='/signin' />;
    }
};

export default PrivateRoute;
