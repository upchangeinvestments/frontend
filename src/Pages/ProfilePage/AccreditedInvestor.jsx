import React, { useState } from 'react';
import Button from "../../commonComponents/LoginButton";
import Collapse from "react-collapse";
import { useSearchParams } from 'react-router-dom';

const CollapseItem = [
    {
        title: "What is an accredited investor? What are the benefits of it?",
        content: `
            <h2 class="mb-4 text-left">An accredited investor is an individual or entity that meets specific financial criteria set by regulatory bodies, such as the SEC in the United States. Typically, this means having:</h2>
            <ol class="list-decimal pl-6 mb-4">
                <li class="mb-2">A net worth exceeding $1 million (excluding the value of their primary residence), or</li>
                <li>An annual income of $200,000 or more ($300,000 combined with a spouse) for the past two years, with an expectation of the same income level in the current year.</li>
            </ol>
            <h2 class="mb-4 text-left">Benefits</h2>
            <ul class="list-disc pl-6 mb-4">
                <li>Exclusive Opportunities: Access to investments with higher potential returns that are not available to non-accredited investors.</li>
                <li>Diversification: Ability to diversify your investment portfolio with a variety of asset classes and strategies.</li>
                <li>Potential for Higher Returns: Many private investments offer the possibility of significant returns compared to traditional investment options.</li>
                <li>Networking: Opportunities to connect with other high-net-worth individuals and influential industry professionals.</li>
            </ul>
            <p class="mb-4">Overall, being an accredited investor allows you to explore more sophisticated and potentially lucrative investment avenues, enhancing your portfolio's growth and diversification.</p>
        `
    },
    {
        title: "Why Become an Accredited Investor?",
        content: `
        Becoming an accredited investor opens up access to a wider range of investment opportunities that are not available to the general public. These opportunities often include:
        <ul style="list-style-type: disc;" class="pl-6 mb-4">
            <li>Private equity and venture capital: Investing in private companies before they go public.</li>
            <li>Hedge funds and private placements: Participating in investment funds that are typically only open to accredited investors.</li>
            <li>Real estate syndications and crowdfunding: Joining larger real estate projects with potentially higher returns.</li>
        </ul>
    `
    },
]

const QuestionOptions = {
    businessType: ["Public Charity", "Private Foundation", "S Corporation", "C Corporation", "Foreign Corporation", "Irrevocable Trust", "Revocable Trust", "Family Office", "Limited Liability Company", "Limited Partnership"],
    license: ["General Securities Representative (Series 7)", "Private Securities Offerings Representative (Series 82)", "Investment Advisor Representative (Series 65)"],
    role: ["Investment Advisor (SEC Registered)", "Accountant (CPA)", "Lawyer", "Enrolled Agent"],
    income: ["less than $50k", "at least $50k, less than $107k", "at least $107k, less than $200k", "at least $200k, less than $300k", "at least $300k, less than $500k", "at least $500k, less than $1M", "at least $1M, less than $5M", "$5M or more"],
    jointIncome: ["less than $50k", "at least $50k, less than $107k", "at least $107k, less than $200k", "at least $200k, less than $300k", "at least $300k, less than $500k", "at least $500k, less than $1M", "at least $1M, less than $5M", "$5M or more"],
}

const Questions = [
    {
        heading: "Information",
        descrition: "Please provide the full legal name and type of your business.",
        questions: [
            {
                question: "Business Name",
                type: "text",
            },
            {
                question: "Business Type",
                type: "list",
                list: QuestionOptions.businessType
            }
        ],
    },
    {
        heading: "Individual Accreditation Certification - Professional License",
        descrition: "Please Provide the following details",
        questions: [
            {
                question: "Which SEC-approved license do you hold?",
                type: "list",
                list: QuestionOptions.license
            },
            {
                question: "CRD Number",
                type: "text",
            }
        ],
        check: "I certify the CRD number I am providing is correct."
    },
    {
        heading: "Individual Accreditation Certification",
        questions: [
            {
                question: "I would like to verify my status as an accredited investor by confirming",
                type: "list",
                list: QuestionOptions.license
            },
        ],
        check: "I certify the CRD number I am providing is correct."
    }
]


const CollapeItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="border-b border-gray-200 text-black text-lg">
            <button
                className="flex w-full items-center justify-between py-4 text-left font-medium text-gray-500 "
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-black">{title}</span>
                <svg
                    className={`h-5 w-5 transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <Collapse isOpened={isOpen}>
                <div className="text-black">
                    <div className="text-black" dangerouslySetInnerHTML={{ __html: content }} />
                </div>
            </Collapse>
        </div>
    );
};

function QuesitonTemplate({ heading, desc, index }) {
    return (
        <div className="">

        </div>
    )
}

function AccreditedInvestor() {
    const [accreditedForm, setAccreditedForm] = useState(false);
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState();
    const [buttonClicked, setButtonClicked] = useState(false);

    // const allQuestionsAnswered = selectedAnswer.every(answer => answer !== null);


    const FormHandler = () => setAccreditedForm(!accreditedForm);

    // const handleOptionSelect = (option) => {
    //     const newSelectedAnswer = [...selectedAnswer];
    //     newSelectedAnswer[currentQuiz] = option;
    //     setSelectedAnswer(newSelectedAnswer);
    //     if (currentQuiz < quizData.length - 1) {
    //         setCurrentQuiz(currentQuiz + 1);
    //     }
    // };

    // const handlePreviousClick = () => {
    //     setSelectedAnswer(selectedAnswer.slice(0, -1)); // Remove the last selected answer
    //     setCurrentQuiz(currentQuiz - 1);
    // };


    // const loadQestions = () => {
    //     // const currentQuizData = quizData[currentQuiz];
    //     // const quizLength = quizData.length;

    //     return (
    //         <div className="quiz-container px-4 py-2 flex flex-col items-center justify-center vsm:w-full lg:text-xl">
    //             <p className="text-left px-4 md:w-[100%] font-['Playfair-Display'] flex justify-center">
    //                 {/* {currentQuizData.question} */}
    //             </p>
    //             <ul className="vsm:w-[90%] font-['Playfair-Display'] md:w-[50%]">
    //                 {['a', 'b', 'c', 'd'].map((option) => (
    //                     <li key={option}>
    //                         <input
    //                             type="radio"
    //                             name="answer"
    //                             id={option}
    //                             className="answer text-center"
    //                             onClick={() => handleOptionSelect(option)}
    //                         />
    //                         <label
    //                             className="text-center border-[1px] font-['Playfair-Display'] border-[#6e30a7]"
    //                             htmlFor={option}
    //                             id={option + "_text"}
    //                         >
    //                             {currentQuizData[option]}
    //                         </label>
    //                     </li>
    //                 ))}
    //                 <div
    //                     className={currentQuiz > 0 ? "flex justify-center" : "hidden"}
    //                     onClick={handlePreviousClick}
    //                 >
    //                     <p className="ml-4">PREVIOUS</p>
    //                 </div>
    //             </ul>
    //         </div>
    //     );
    // };

    return (
        <div className="my-12 relative flex flex-col items-center justify-center font-[' Playfair-Display'] text-lg" >
            <div className={`mx-auto lg:px-8 rounded-lg my-6 w-full`}>
                <h2 className="text-2xl font-bold tracking-tight text-black">
                    Become an Accredited Investor
                </h2>
                <div className="mt-6 space-y-6 break-words	">
                    {CollapseItem.map((element, index) => (
                        <CollapeItem
                            key={index}
                            title={element.title}
                            content={element.content}
                        />
                    ))}
                </div>
            </div>
            <div className="" onClick={FormHandler}>
                <Button Text="Start my journey as an Accredited Investor" />
            </div>
            {accreditedForm && (
                <div className="">
                    {/* {loadQestions()} */}
                </div>
            )}
        </div >
    )
}

export default AccreditedInvestor;