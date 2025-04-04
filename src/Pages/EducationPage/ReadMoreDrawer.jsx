import React from 'react';
import { ImCross } from "react-icons/im";
import { Drawer } from "@material-tailwind/react";
import logo from "../../assets/logo.png";

function ReadMoreDrawer({ open, closeDrawer, data }) {

    return (
        <Drawer placement="bottom" className="z-50" open={open}
            onClose={closeDrawer}>
            <div className="flex flex-col justify-start items-center w-full h-full bg-gradient-to-r from-[#6e30a7] to-purple-300 p-6 py-8 rounded-md relative">
                <div className="absolute right-4 top-4" onClick={closeDrawer}>
                    <ImCross size="20px" />
                </div>
                <div className="flex items-center justify-center mb-3">
                    <img src={logo} alt="logo" className="w-[30%]" />
                </div>
                <div className="font-['Playfair-Display'] overflow-y-scroll">
                    <div className="text-xl">{data}</div>
                </div>
            </div>
        </Drawer>
    )
}

export default ReadMoreDrawer