import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

const DropDownData = [
    {
        title: "Overview",
        content: "View the project overview",
    },
    {
        title: "Documents",
        content: "View the project documentations",
    },
    {
        title: "Business Plan",
        content: "View the business plan",
    },
    {
        title: "Property",
        content: "Explore property details, comparable, locations and photos.",
    },
    {
        title: "Financials",
        content: "Reveiw debt assumptions, closing dates, caps and more",
    },
]

function MaterialUIAccordion() {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>

            <div className="">
                {DropDownData.map((data, index) => (
                    <Accordion key={index} open={open === index}>
                        <AccordionHeader onClick={() => handleOpen(index)}>
                            <div className="">
                                {data.title}
                            </div>
                        </AccordionHeader>
                        <AccordionBody>
                            {data.content}
                        </AccordionBody>
                    </Accordion>
                ))}
            </div>
        </>
    );
}
export default MaterialUIAccordion;