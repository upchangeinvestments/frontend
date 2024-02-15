import React, { useState } from 'react';
import Collapse from 'react-collapse';

const faqData = [
    {
        title: "How can I contact the UPCIN team if I have questions?",
        content: "You can contact the UPCIN team by emailing <support@upcin.com> or by calling (845) 673-1234."
    },
    {
        title: "How do I create an account?",
        content:
            "To create an account, go to <https://platform.upcin.com/register> and fill out the registration form. Once you've submitted the form, you'll receive an email to verify your account. Follow the instructions in the email to complete the account creation process."
    },
    {
        title: "Who can invest in the UPCIN Funds?",
        content:
            "At this time, only accredited investors can invest in the UPCIN Funds. An accredited investor is a person or entity that meets certain net worth or income requirements set forth by the SEC."
    },
    {
        title: "What is an accredited investor?",
        content: `An accredited investor is someone who meets certain net worth or income requirements set forth by the Securities and Exchange Commission (SEC). Generally, to be an accredited investor, a person must have a net worth of at least $1 million, excluding the value of their primary residence, or have an individual income of at least $200,000 or joint income with a spouse of at least $300,000 in each of the past two years and a reasonable expectation of the same income in the current year.`
    },
    {
        title: "Can international investors participate?",
        content:
            "At this time, UPCIN is only open to U.S. investors. We are working on expanding our offerings to international investors in the future."
    }
];

const FAQ = () => {

    return (
        <div className="bg-white/20 backdrop-blur-sm mx-auto max-w-2xl vsm:py-12 vsm:px-12 lg:max-w-7xl lg:px-8 rounded-lg my-6 mb-24">
            <h2 className="text-2xl font-bold tracking-tight text-black">
                Frequently Asked Questions
            </h2>

            <div className="mt-6 space-y-6">
                {faqData.map((element, index) => (
                    <FAQItem key={index}
                        title={element.title}
                        content={element.content}
                    />
                ))}
            </div>
        </div>
    );
};
const FAQItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 text-black text-lg">
            <button className="flex w-full items-center justify-between py-4 text-left font-medium text-gray-500 "
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className='text-black'>{title}</span>
                <svg
                    className={`h-5 w-5 transform ${isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
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
                    <p>{content}</p>
                </div>
            </Collapse>
        </div>
    );
};

export default FAQ
