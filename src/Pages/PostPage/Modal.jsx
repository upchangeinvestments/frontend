import React from "react";
import { IoMdCloseCircle } from "react-icons/io";


const Modal = ({ content, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-6 rounded-lg shadow-lg z-10 max-w-3xl w-full mx-4 relative">
                <IoMdCloseCircle onClick={onClose} className="absolute top-4 right-4" size="17px" />
                <div className="flex items-start justify-start gap-x-6">
                    <div className="">
                        <img className="rounded-xl h-32" src={content.image} alt="project" />
                    </div>
                    <div className="flex items-start justify-start gap-y-2 flex-col">
                        <p className="text-3xl font-bold ">{content.projectName}</p>
                        <p>Year Started: <span className="font-bold">{content.year}</span></p>
                        <p>Year Closed: <span className="font-bold">{content.yearEnd}</span></p>
                        <p>Asset Type: <span className="font-bold">{content.investmentType}</span></p>
                    </div>
                </div>
                <p className="font-bold mt-2">Projected</p>
                <div className="grid grid-cols-2 gap-x-4 mb-2">
                    <div className="grid col-span-1 p-2 w-full rounded-xl bg-gray-200 text-center">
                        <p>Return Rate: <span className="font-bold">{content.returnRate}%</span></p>
                    </div>
                    <div className="grid col-span-1 p-2 w-full rounded-xl bg-gray-200 text-center">
                        <p>Cash on Cash: <span className="font-bold">{content.cashOnCash}%</span></p>
                    </div>
                </div>
                <p className="font-bold mt-2">Distribution</p>
                <div className="grid grid-cols-2 gap-x-4 mb-2">
                    <div className="grid col-span-1 p-2 w-full rounded-xl bg-gray-200 text-center">
                        <p>Return Rate: <span className="font-bold">{content.returnRate}%</span></p>
                    </div>
                    <div className="grid col-span-1 p-2 w-full rounded-xl bg-gray-200 text-center">
                        <p>Cash on Cash: <span className="font-bold">{content.cashOnCash}%</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
