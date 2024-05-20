import React from 'react';
import Button from "../../commonComponents/LoginButton";

function AccreditedInvestor() {

    const FormHandler = (e) => {
        e.preventDefault();

    }
    return (
        <div className="my-12 relative flex flex-col items-center justify-center font-[' Playfair-Display'] text-lg" >
            <p className='my-2'>Want to be a Accredited Investor?</p>
            <Button Text="Start my journey as a Accredited Investor" />
            <form onSubmit={FormHandler}>

            </form>
        </div >
    )
}

export default AccreditedInvestor;