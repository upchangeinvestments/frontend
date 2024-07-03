import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import Modal from "./Modal";


function MaterialUIAccordion({ data }) {
    const [open, setOpen] = React.useState(3);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [modalContent, setModalContent] = React.useState({});

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    const handleModalOpen = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setModalContent({});
    };


    return (
        <div className="flex items-center justify-center flex-col font-['Playfair-Display'] w-full text-black">
            {data.map((data, index) => (
                <Accordion
                    className="my-4 rounded-lg bg-[#F3F3F3] border-[1px] border-solid border-gray-600 py-0"
                    key={index}
                    id={data.id ? data.id : ""}
                    open={open === index}
                >
                    <AccordionHeader
                        className="w-full text-lg font-normal px-4 rounded-t-lg flex-row border-none pt-2 pb-1"
                        onClick={() => handleOpen(index)}
                    >
                        <div className="vsm:w-3/4 md:w-1/4 font-bold ">{open === index ? "" : data.projectName}</div>
                        <div className="vsm:w-1/4 vsm:-mr-6 md:mr-0 md:w-3/4 grow vsm:text-xs lg:text-base flex justify-end">
                            <span
                                className={`flex items-center justify-center  ${open === index ? "hidden" : "block"} whitespace-nowrap`}>
                                <p>see more</p>
                                <svg className={`w-4 transform mt-1 ${open ? "rotate-0" : "rotate-180"}`}
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </div>
                    </AccordionHeader>
                    <AccordionBody className="px-4 text-black text-base rounded-b-lg -mt-[20px] pb-2">
                        <div className="flex items-start justify-start gap-x-6">
                            <div className="">
                                <img className="rounded-xl h-32" src={data.image} alt="project" />
                            </div>
                            <div className="flex items-start justify-start gap-y-2 flex-col">
                                <p onClick={() => handleModalOpen(data)} className="text-xl font-bold hover:underline hover:cursor-pointer">{data.projectName}</p>
                                <p>Year Started: <span className="font-bold">{data.year}</span></p>
                                <p>Asset Type: <span className="font-bold">{data.investmentType}</span></p>
                                <p>Return Rate: <span className="font-bold">{data.returnRate}</span></p>
                            </div>
                        </div>
                    </AccordionBody>
                </Accordion>
            ))}
            {isModalOpen && <Modal content={modalContent} onClose={handleModalClose} />}
        </div>
    );
}
export default MaterialUIAccordion;