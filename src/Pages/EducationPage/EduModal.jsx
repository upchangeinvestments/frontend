import React from "react";
import { ImCross } from "react-icons/im";
import logo from "../../assets/logo.png";

function EduModal({ isOpen, handleOpen, modalContent }) {
  return (
    <div className="hidden md:block">
      {isOpen && (
        <div className="absolute inset-0 z-50  flex items-center justify-center text-white">
          <div className="flex flex-col justify-start items-center w-full h-full shadow-lg bg-gradient-to-br from-[#1f0036] to-[#3b0a72] p-6 py-8 rounded-md relative">
            <div className="absolute right-4 top-4" onClick={handleOpen}>
              <ImCross size="20px" />
            </div>
            <div className="flex items-center justify-center mb-3">
              <img src={logo} alt="logo" className="w-[30%]" />
            </div>
            <div className="font-['Playfair-Display'] overflow-y-scroll lg:overflow-hidden">
              <div className="text-xl">{modalContent}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EduModal;