import React from "react";
import Button from "../../commonComponents/LoginButton";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";



function MaterialUIAccordion({ websiteLink }) {
  const [open, setOpen] = React.useState(1);

  const DropDownData = [
    {
      title: "Documents",
      content: "View the project documentations",
      desc: "View the project documentations",
      id: "documents",

    },
    {
      title: "Contact Details",
      content: "View the Contact details",
      desc: "View the Contact details",
      id: "contact",
    },
    {
      title: "Additional Information",
      content: "View the Additional information",
      desc: "View the Additional information",
      id: "information",
    },
  ];

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="w-full font-['Playfair-Display']">
      {DropDownData.map((data, index) => (
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
            <div className="vsm:w-3/4 md:w-1/4 font-bold ">{data.title}</div>
            <div className="vsm:w-1/4 vsm:-mr-6 md:mr-0 md:w-3/4 grow vsm:text-xs lg:text-base flex vsm:justify-end lg:justify-between">
              <span
                className={`vsm:hidden ${open === index ? "md:hidden" : "lg:block"
                  }`}
              >
                {data.content}
              </span>
              <span
                className={`flex items-center justify-center  ${open === index ? "hidden" : "block"
                  } whitespace-nowrap`}
              >
                <p>see more</p>
                <svg
                  className={`h-5 w-5 transform ${open ? "rotate-0" : "rotate-180"
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
              </span>
            </div>
          </AccordionHeader>
          <AccordionBody className="px-4 text-black text-base rounded-b-lg -mt-[20px] pb-2">
            {data.desc}
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
}
export default MaterialUIAccordion;
