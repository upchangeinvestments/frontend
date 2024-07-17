import React, { useState } from 'react';
import Button from "../../commonComponents/LoginButton";
import Collapse from "react-collapse";
import { useAuth } from "../../utils/AuthContext";
import SuccessToast from "../../utils/successToast";
import axios from "axios";

import bgImage from "../../assets/login_BG.jpeg";

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
    status: ["Income of $200k (or $300k with spouse) in each of the past 2 year", "Net worth of $1M, individually or jointly with spouse excluding your primary residence", "Hold a professional license with FINRA that qualifies you as an accredited investor", "None of the above apply to me"],
    role: ["Investment Advisor (SEC Registered)", "Accountant (CPA)", "Lawyer", "Enrolled Agent"],
    income: ["less than $50k", "at least $50k, less than $107k", "at least $107k, less than $200k", "at least $200k, less than $300k", "at least $300k, less than $500k", "at least $500k, less than $1M", "at least $1M, less than $5M", "$5M or more"],
    incomeValidation: ["Upload copies of any tax form containing my salary for the past 2 years", "Upload a letter from my lawyer, CPA, or investment advisor verifying my income and accredited status", "Send a verification request to my lawyer, CPA, or investment advisor"],

}

const Questions = [
    {
        name: "slide1",
        heading: "Information",
        description: "Please provide the full legal name and type of your business.",
        questions: [
            {
                question: "Business Name",
                type: "text",
                key: "businessName"
            },
            {
                question: "Business Type",
                type: "list",
                list: QuestionOptions.businessType,
                key: "businessType"
            }
        ],
    },
    {
        name: "slide2",
        heading: "Individual Accreditation Certification - Professional License",
        description: "Please Provide the following details",
        questions: [
            {
                question: "Which SEC-approved license do you hold?",
                type: "list",
                list: QuestionOptions.license,
                key: "secLicense"
            },
            {
                question: "CRD Number",
                type: "text",
                key: "crdNumber"
            },
            {
                question: "I certify the CRD number I am providing is correct.",
                type: "checkbox",
                key: "certifyCRD"
            }
        ],

    },
    {

        name: "slide3",
        heading: "Individual Accreditation Certification",
        questions: [
            {
                question: "I would like to verify my status as an accredited investor by confirming",
                type: "list",
                list: QuestionOptions.status,
                key: "accreditationStatus"
            },
        ],
    },
    {

        name: "slide4",
        heading: "Request letter from Accoutant, Lawyer or Advisor",
        questions: [
            {
                question: "First Name",
                type: "text",
                key: "firstName",
            },
            {
                question: "Last Name",
                type: "text",
                key: "lastName"
            },
            {
                question: "Email Address",
                type: "email",
                key: "email"
            },
            {
                question: "We'll reach out to the person you identify below to request that they verify your accreditation status. After they respond, we'll be able to process your application.",
                type: "list",
                list: QuestionOptions.role,
                key: "role"
            },
        ],
    },
    {
        name: "slide5",
        heading: "2024 Expected Income",
        questions: [
            {
                question: "Please select your expected individual income for 2024. If you're married, please also select your expected 2024 joint income",
                type: "list",
                list: QuestionOptions.income,
                key: "expectedIncome"
            },
        ],
    },
    {
        name: "slide6",
        heading: "Individual Accreditation Certification:: Income Validation",
        questions: [
            {
                question: "How would you like to verify your income level",
                type: "list",
                list: QuestionOptions.incomeValidation,
                key: "incomeValidation"
            },
        ],
    },

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

function QuestionTemplate({ data, currentQuiz, selectedAnswers, onOptionSelect, formHandler, allQuestionsAnswered }) {

    const handleOptionSelect = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            onOptionSelect(checked ? value : null);
        } else {
            onOptionSelect(value);
        }
    };

    return (
        <form className="my-4 text-lg" onSubmit={formHandler}>
            {data.questions.map((question, index) => (
                <div key={index} className="mb-4">
                    {question.type === "text" && (
                        <div className="">
                            <p className="font-semibold mb-2">{question.question}</p>
                            <input
                                type="text"
                                className="border p-2 w-full"
                                name={question.key}
                                required
                            />
                        </div>
                    )}
                    {question.type === "email" && (
                        <div className="">
                            <p className="font-semibold mb-2">{question.question}</p>
                            <input
                                type="email"
                                className="border p-2 w-full"
                                name={question.key}
                                required
                            />
                        </div>
                    )}
                    {question.type === "list" && (
                        <div className="">
                            <p className="font-semibold mb-2">{question.question}</p>
                            <select
                                name={question.key}
                                value={selectedAnswers[currentQuiz] || ""}
                                onChange={handleOptionSelect}
                                className="border p-2 w-full"
                                required
                            >
                                <option value="" disabled>Select Option</option>
                                {question.list.map((option, optionIndex) => (
                                    <option key={optionIndex} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                    {question.type === 'checkbox' && (
                        <div className="flex items-center justify-start gap-x-4">
                            <input
                                type="checkbox"
                                className=''
                                value={question.question}
                                onChange={handleOptionSelect}
                                required
                            />
                            <p>{question.question}</p>
                        </div>
                    )}
                </div>
            ))}
            {!allQuestionsAnswered && <div className="w-full flex items-center justify-center">
                <button className=" bg-top py-2 px-6 rounded-md text-lg text-black font-semibold bg-cover " style={{ backgroundImage: `url(${bgImage})` }}>
                    Submit
                </button>
            </div>}
        </form>
    );
}

function AccreditedInvestor() {
    const [accreditedForm, setAccreditedForm] = useState(false);
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(Array(Questions.length).fill(null));
    const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
    const { user, backendUrl } = useAuth();

    const FormHandler = () => setAccreditedForm(!accreditedForm);

    const handleOptionSelect = (option) => {
        const newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[currentQuiz] = option;

        setSelectedAnswers(newSelectedAnswers);
        setAllQuestionsAnswered(selectedAnswers.every(answer => answer !== null));
    };

    const handlePreviousClick = () => {
        setCurrentQuiz(currentQuiz - 1);
    };


    const formHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const textAndEmailInputs = {};
        formData.forEach((value, key) => {
            textAndEmailInputs[key] = value;
        });


        const newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[currentQuiz] = textAndEmailInputs;

        setSelectedAnswers(newSelectedAnswers);
        setAllQuestionsAnswered(newSelectedAnswers.every(answer => answer !== null));

        if (currentQuiz < Questions.length - 1) {
            setCurrentQuiz(currentQuiz + 1);
        }
    }

    const saveQuizResponses = async () => {
        const responses = Questions.flatMap((slide, slideIndex) =>
            slide.questions.map((question, questionIndex) => ({
                question: question.question,
                answer: selectedAnswers[slideIndex][question.key],
            }))
        );

        try {
            const res = await axios.post(`${backendUrl}/profile/investor-quiz`, {
                responses: responses,
                user: user,
            });
            if (res.status === 200) {
                setCurrentQuiz(0);
                SuccessToast("Details saved successfully, We'll verify your details.");
                setAccreditedForm(false);
                setSelectedAnswers(Array(Questions.length).fill(null));

            } else {
                Error("Something went wrong, please try again later.");
            }
        } catch (error) {
            console.error("Error saving quiz responses:", error);
            Error("Failed to save quiz responses. Please try again.");
        }
    };

    const loadQuestions = () => {
        const currentQuizData = Questions[currentQuiz];

        return (
            <div className="px-4 py-2 flex flex-col items-start justify-start w-full font-['Playfair-Display']">
                <p className="w-full text-center font-bold text-2xl">
                    {currentQuizData.heading}
                </p>
                <hr className='w-full my-4' />
                <p className="text-left flex justify-center text-lg">
                    {currentQuizData.description}
                </p>
                <div className='w-full '>
                    <QuestionTemplate
                        currentQuiz={currentQuiz}
                        selectedAnswers={selectedAnswers}
                        data={currentQuizData}
                        formHandler={formHandler}
                        onOptionSelect={handleOptionSelect}
                        allQuestionsAnswered={allQuestionsAnswered}
                    />
                </div>
                {currentQuiz > 0 && (
                    <div className="flex justify-between items-center w-full">
                        <button className="px-4 py-2 bg-gray-300 rounded" onClick={handlePreviousClick}>
                            Previous
                        </button>
                        <div className="flex justify-center">
                            <button onClick={saveQuizResponses} className={`bg-${allQuestionsAnswered ? "[#6e30a7]" : "[#6e30a7]/10"} font-['Playfair-Display'] text-white font-bold vsm:py-[3px] vsm:px-[5px] md:py-[5px] md:px-[5px] lg:py-2 lg:px-4 rounded`} disabled={!allQuestionsAnswered}>
                                Save Changes
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="my-8 mb-12 relative flex flex-col items-center justify-center font-['Playfair-Display'] text-lg w-[90%] lg:w-[100%] mx-auto lg:mx-0">
            {!accreditedForm && <div className={`mx-auto lg:px-8 rounded-lg my-6 w-full`}>
                <h2 className="text-2xl font-bold tracking-tight text-black">
                    Become an Accredited Investor
                </h2>
                <div className="mt-6 space-y-6 break-words">
                    {CollapseItem.map((element, index) => (
                        <CollapeItem
                            key={index}
                            title={element.title}
                            content={element.content}
                        />
                    ))}
                </div>
            </div>}
            {!accreditedForm && (
                <div className="" onClick={FormHandler}>
                    <Button Text="Start my journey as an Accredited Investor" />
                </div>
            )}
            {accreditedForm && (
                <div className="w-full mt-6">
                    {loadQuestions()}
                </div>
            )}
        </div>
    );
}

export default AccreditedInvestor;
