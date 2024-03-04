import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios"

function VerifyUser() {
    let { id, token } = useParams();
    const [isVerified, setIsVerified] = useState(false);
    // console.log(id)
    // console.log(token);
    console.log(process.env.REACT_APP_BACKEND_URL)
    console.log("url=", `${process.env.REACT_APP_BACKEND_URL}${id}/verify/${token}`)

    useEffect(() => {
        const verifyToken = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}auth/${id}/verify/${token}`);
                console.log(response);
                if (response.status === 200) {
                    setIsVerified(true);
                }
            } catch (err) {
                return Error("Token Not Verified");

            }
        };
        verifyToken();
    }, [])

    return (
        <div>
            {isVerified ? (
                <div>

                </div>
            ) : (
                <div></div>
            )}
        </div>
    )
}

export default VerifyUser;