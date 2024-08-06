import React, { useState } from 'react';
import { IoMdCloseCircle } from "react-icons/io";
import { RiShareBoxFill } from "react-icons/ri";
import bgImage from "../../assets/login_BG.jpeg";
import { Link } from "react-router-dom";


function AccreditedModal({ open, CloseAccreditedModal, data }) {
    const [selectedOption, setSelectedOption] = useState('');
    const [subOption, setSubOption] = useState('');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
        setSubOption(''); // Reset subOption when the main option changes
    };

    const handleSubOptionChange = (e) => {
        setSubOption(e.target.value);
    };

    return (
        <div className="">
            {open && (
                <div className="w-full h-full flex items-center justify-center flex-col z-[100] fixed inset-0 overflow-hidden font-['Playfair-Display']">
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="bg-white rounded-xl z-10 p-4 w-[90%] md:w-[50%] relative flex flex-col items-center justify-center overflow-y-scroll">
                        <IoMdCloseCircle onClick={() => CloseAccreditedModal(false)} className="absolute top-4 right-4" size="17px" />
                        <div className="p-2 px-6">
                            <h3 className="text-xl font-bold mb-4 text-center CerebriFont">Investor Confirmation</h3>
                            <p className="mb-4">
                                According to the Securities and Exchange Commission, an individual accredited investor is anyone who:
                            </p>
                            <div className="">
                                <label className="flex items-center justify-start mb-2">
                                    <input
                                        type="radio"
                                        name="option"
                                        value="accredited"
                                        checked={selectedOption === 'accredited'}
                                        onChange={handleOptionChange}
                                        className="mr-2"
                                    />
                                    Investor meets the definition of "Accredited Investor"
                                </label>
                                <div className="pl-8">
                                    {selectedOption === 'accredited' && (
                                        <div className="mb-4">
                                            <ol className='list-decimal'>
                                                <li>
                                                    Earned income of more than $200,000 (or $300,000 together with a spouse) in each of the last two years and reasonably expects to earn the same for the current year.
                                                </li>
                                                <li>
                                                    Has a net worth over $1 million, either individually or together with a spouse (excluding the value of a primary residence).
                                                </li>
                                                <li>
                                                    Is a "knowledgeable employee" of a private fund.
                                                </li>
                                                <li>
                                                    Is a financial professional who has Series 7, Series 65 or Series 82 financial securities licenses.
                                                </li>
                                            </ol>
                                        </div>
                                    )}
                                </div>
                                <label className="mb-4 flex items-center justify-start">
                                    <input
                                        type="radio"
                                        name="option"
                                        value="not_accredited"
                                        checked={selectedOption === 'not_accredited'}
                                        onChange={handleOptionChange}
                                        className="mr-2"
                                    />
                                    Investor does not meet the definition of "accredited investor" or is not sure
                                </label>
                                {selectedOption === 'not_accredited' && (
                                    <div className="">
                                        <p className="text-red-500 text-sm">This company only accepts accredited investors. Please visit posts that include eligibility for non-accredited investors.</p>
                                        <p className="text-red-500 text-sm">If you are an accredited investor, please log in to update your investor status.</p>
                                    </div>
                                )}
                                {selectedOption === "accredited" && (
                                    <div className="flex items-center justify-center">
                                        <Link to="https://www.studio2694.com/" target='_blank'>
                                            <button style={{ backgroundImage: `url(${bgImage})` }}
                                                className={`bg-top whitespace-nowrap vsm:px-4 vsm:py-1 lg:px-6 lg:py-2 rounded-xl md:text-base lg:text-base xl:text-lg text-black font-bold bg-no-repeat bg-cover flex items-center justify-center gap-x-2`}>
                                                <RiShareBoxFill />{data.companyName}
                                            </button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AccreditedModal;
