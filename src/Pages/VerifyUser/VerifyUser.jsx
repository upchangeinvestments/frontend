import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios"
import Error from "../../utils/Error";
import VerifiedGIF from "../../assets/verified.webp"
import { useAuth } from "../../utils/AuthContext";
import { Helmet } from 'react-helmet-async';

function VerifyUser() {
    let { id, token } = useParams();
    const [isVerified, setIsVerified] = useState(false);
    const navigate = useNavigate();
    const { backendUrl } = useAuth();

    useEffect(() => {
        const verifyToken = async () => {
            try {
                await axios.get(`${backendUrl}/auth/${id}/verify/${token}`).then((response) => {
                    if (response.status === 200) {
                        setIsVerified(true);
                        localStorage.setItem("token", token);
                        const currentDate = new Date();
                        const tokenExpiration = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000); // expires in 1 day
                        localStorage.setItem("tokenExpiration", tokenExpiration);

                        setTimeout(() => {
                            navigate('/profile');
                        }, 3000);
                    }
                })
            } catch (err) {
                return Error("Link Not Verified, Link Expired, or Invalid");
            }
        };
        verifyToken();

        // eslint-disable-next-line
    }, [])

    return (
        <div className=" h-[100vh] aboutMain flex items-center justify-center  font-['Playfair-Display']" >
            <Helmet>
                <title>Verified @ LynkInfinite Investments</title>
                <meta name="description" content="Real Estate listed projects website" />
                <link rel="canonical" href="/verify-user" />
            </Helmet>
            {isVerified === true ? (
                <div className="bg-white/20 backdrop-blur-xl p-8 rounded-lg flex flex-col items-center text-black font-['Playfair-Display']">
                    <img src={VerifiedGIF} className="w-80" alt="Verify" />
                    <p className="text-4xl font-bold ">You are verified.</p>
                    <p className="text-2xl font-bold ">Thanks for verifying you ID</p>
                </div>
            ) : (
                <div className="bg-white/20 backdrop-blur-xl p-8 rounded-lg flex flex-col items-center text-black font-['Playfair-Display']">
                    <img src="https://i.postimg.cc/6QZGC626/not-Verfied.png" className="w-80" alt="Verify" />
                    <p className="text-4xl font-bold ">Not Verified</p>
                    <p className="text-2xl font-bold ">Try again later!</p>
                </div>
            )}
        </div>
    )
}

export default VerifyUser;