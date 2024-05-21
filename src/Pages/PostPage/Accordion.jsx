import React from "react";
import Button from "../../commonComponents/LoginButton";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const ListedCompany = ({ websiteLink }) => {

  return (
    <div className="flex flex-col">
      <h2 className="font-['Playfair-Display'] text-lg">Studio 2694</h2>
      <p>
        Founded in 2022, Studio 2694 is a dynamic force in urban designing and development, creating transformative projects that redefine city skylines and enhance community living. Our commitment to innovation and sustainability ensures that our projects surpass expectations and inspire our clients.
        At Studio 2694, our ethos is rooted in a deep-seated dedication to excellence and community enrichment. Our portfolio includes a diverse range of projects, from iconic residential towers to state-of-the-art commercial complexes. Each project bears the hallmark of meticulous design and unparalleled quality.
      </p>
      <p className="mt-2">
        Our team of visionary architects, engineers, and planners collaborate seamlessly to bring visionary concepts to life. Our services include architectural design, interior design, 3D rendering, and project management. We are committed to fostering sustainable growth and prosperity. Through strategic partnerships and community engagement initiatives, we strive to create lasting value for our stakeholders while championing environmental stewardship and social responsibility.
      </p>
      <div className="flex flex-col my-2 items-center justify-center">
        <p className="font-['Playfair-Display'] my-2">
          TO KNOW MORE ABOUT THE FIRM AND INVEST IN THE PROJECT PLEASE GO TO THE
          LINK BELOW.
        </p>
        <Button link={websiteLink} Text="Visit the website" target="_blank" />
      </div>
    </div >
  );
};


function MaterialUIAccordion({ websiteLink }) {
  const [open, setOpen] = React.useState(3);

  const DropDownData = [
    {
      title: "Documents",
      content: "View the project documentations",
      desc: "View the project documentations",
      id: "documents",

    },
    {
      title: "Business Plan",
      content: "View the business plan",
      desc: "View the business plan",
      id: "business",
    },
    {
      title: "Financials",
      content: "Reveiw debt assumptions, closing dates, caps and more",
      desc: "Reveiw debt assumptions, closing dates, caps and more",
      id: "financial",
    },
    {
      title: "Listed company",
      content: "Review the listed company in detail.",
      desc: <ListedCompany websiteLink={websiteLink} />,
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
