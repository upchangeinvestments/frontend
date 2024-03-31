import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios"
import VerifiedGIF from "../../assets/verified.webp"
import { useAuth } from "../../utils/AuthContext";

function VerifyUser() {
    let { id, token } = useParams();
    const [isVerified, setIsVerified] = useState(false);
    const navigate = useNavigate();
    const { backendUrl } = useAuth();

    useEffect(() => {
        const verifyToken = async () => {
            try {
                const response = await axios.get(`${backendUrl}/auth/${id}/verify/${token}`);
                if (response.status === 200) {
                    setIsVerified(true);
                }
            } catch (err) {
                return Error("Token Not Verified");

            }
        };
        verifyToken();
        localStorage.setItem("token", token);
        const currentDate = new Date();
        const tokenExpiration = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000); // expires in 1 day
        localStorage.setItem("tokenExpiration", tokenExpiration);
        setTimeout(() => {
            navigate('/profile');
        }, 2000);

        // eslint-disable-next-line
    }, [])

    return (
        <div className=" h-[100vh] aboutMain flex items-center justify-center " >
            {isVerified === false ? (
                <div className="bg-white/20 backdrop-blur-xl p-8 rounded-lg flex flex-col items-center text-white">
                    <img src={VerifiedGIF} className="w-80" alt="Verify" />
                    <p className="text-4xl font-bold ">You are verified.</p>
                    <p className="text-2xl font-bold ">Thanks for verifying you ID</p>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    )
}

export default VerifyUser;