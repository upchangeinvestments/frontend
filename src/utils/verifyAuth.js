
import axios from 'axios';

export const verifyAuth = async (token) => {
    try {
        const response = await axios.get(`http://localhost:5000/auth/verify?token=${token}`);
        if (response.status === 200 && response.data.status === 'success') {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        // console.log("in verifyAuth", error);
        return false;
    }
};

