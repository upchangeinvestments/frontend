import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import logo from "../../assets/logo.png";

function EduModal({ isOpen, handleOpen, modalContent }) {
  return (
    <div className="">
      {isOpen && (
        <div className="absolute inset-0 z-50  flex items-center justify-center text-white">
          <div className="flex flex-col justify-center items-center w-full h-full bg-gradient-to-r from-[#6e30a7] to-purple-300 p-6 py-8 rounded-md relative">
            <div className="absolute right-4 top-4" onClick={handleOpen}>
              <ImCross size="20px" />
            </div>
            <div className="flex items-center justify-center mb-3">
              <img src={logo} alt="logo" className="w-[30%]" />
            </div>
            <div className="font-['Playfair-Display']">
              <p className="text-xl">{modalContent}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EduModal;