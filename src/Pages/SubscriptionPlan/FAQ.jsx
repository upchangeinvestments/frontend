import React, { useState } from "react";
import Collapse from "react-collapse";

const faqData = [
    {
        title: "What payment methods do you accept for listing fees?",
        content: "We accept payments via major credit cards, bank transfers, and online payment platforms such as PayPal.",
    },
    {
        title: "Can I customize my listing package to include specific features or services?",
        content:
            "Yes, we offer customizable listing packages to accommodate your specific needs and preferences. Please contact our team to discuss your requirements.",
    },
    {
        title: "What is the minimum investment?",
        content:
            "The minimum investment amount is typically $100 for the Fund. Deal-by-Deal investing but may be higher or lower in some cases.",
    },
    {
        title: "Is there a minimum contract duration for listing a project on LynkInfinite Investments?",
        content: `Our standard contract durations vary depending on the package selected, ranging from short-term to long-term listings. However, we also offer flexibility to tailor the duration to suit your project's requirements.`,
    },
    {
        title: "Are there any additional fees or charges apart from the listed pricing packages?",
        content:
            "Our pricing packages are comprehensive and transparent, covering the listed services without any hidden fees. However, additional services or features requested beyond the standard package may incur additional charges.",
    },
    {
        title: "How soon can my project be listed on the platform after payment is made?",
        content: "Upon receipt of payment, your project will undergo a review process to ensure compliance with our listing guidelines. Once approved, it will be promptly listed on our platform within [X] business days."
    },
    {
        title: "What happens if my project does not receive sufficient interest or funding during the listing period?",
        content: "In the event that your project does not receive the desired traction during the listing period, we offer consultation and support to enhance its visibility and attract potential investors. Additionally, we can discuss options for extending the listing duration or revising the listing strategy."
    },
    {
        title: "Do you provide any guarantees or assurances regarding project visibility and investor engagement?",
        content: "While we cannot guarantee specific outcomes, we are committed to maximizing the visibility of your project through targeted marketing efforts, strategic partnerships, and a user-friendly platform designed to attract and engage potential investors. "
    },
    {
        title: "Are there any restrictions on the type or size of projects eligible for listing on LynkInfinite Investments?",
        content: "We welcome a diverse range of real estate projects on our platform, including residential, commercial, industrial, and mixed-use developments. There are no strict restrictions based on project size, as long as it meets our quality and compliance standards."
    },
];

const FAQ = (props) => {
    return (
        <div
            className={`mx-auto max-w-2xl font-['Playfair-Display']  lg:max-w-7xl lg:px-8 rounded-lg my-6 ${props.class}`}
        >
            <h2 className="text-2xl font-bold tracking-tight text-black">
                Frequently Asked Questions
            </h2>

            <div className="mt-6 space-y-6 break-words	">
                {faqData.map((element, index) => (
                    <FAQItem
                        key={index}
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
                    <p>{content}</p>
                </div>
            </Collapse>
        </div>
    );
};

export default FAQ;
