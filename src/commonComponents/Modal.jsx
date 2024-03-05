import React, { useState } from "react";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleModal}
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="bg-[#c7b3ee] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] h-5/6 rounded-lg p-8 max-w-md z-50">
            <h2 className="text-xl font-bold mb-4">
              Let's get the basics so we can give the goods
            </h2>
            <div className="mb-4">
              <label
                htmlFor="input1"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Hello, Enter your name please.
              </label>
              <input
                id="input1"
                type="text"
                className="shadow bg-gradient-to-b from-white/30  to-[#c7b3ee] bg-opacity-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="input2"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Where do you live
              </label>
              <input
                id="input2"
                type="text"
                className="shadow bg-gradient-to-b from-white/30  to-[#c7b3ee] bg-opacity-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="text-center">
              <button
                className="bg-purple-500 hover:bg-[#d946ef] text-white font-bold py-2 px-16  rounded-full focus:outline-none focus:shadow-outline"
                onClick={toggleModal}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
