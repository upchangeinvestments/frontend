import React from "react";
import Button from "../../commonComponents/LoginButton";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const ListedCompany = () => {
  return (
    <div className="flex flex-col">
      <h2 className="font-['Playfair-Display'] text-lg">The Reilea Group</h2>
      <p>
        Founded in 1981, rilea group has been at the forefront of miami’s real
        estate development landscape, leaving an indelible mark through iconic
        buildings like J.P.Morgan’s headquarters at 1450 brickell. with a legacy
        spanning over four decades, our mission is unwavering: to be a beacon of
        innovation, progress, and community enrichment in the world of real
        estate development. at rilea group, we take immense pride in our ability
        to create enduring value for our stakeholders. Our commitment to
        excellence is evident through the thousands of jobs we’ve generated via
        construction, property management, and our thriving retail ventures.
        with a track record encompassing 10,000,000 rentable square feet, we’ve
        redefined urban living and working spaces, setting new standards for
        quality and sustainability. Our global reach extends to investors in
        over a dozen countries, a testament to our dedication to fostering
        international partnerships. We recognize that our success is interwoven
        with the prosperity of the communities we serve.
      </p>
      <p>
        Therefore, we pledge to continue our tradition of responsible
        development, prioritizing the well-being of our neighbors, and the
        preservation of the environment. At Rilea Group, we are more than
        developers; we are community builders, job creators, and global
        collaborators. our enduring mission is to shape urban landscapes, enrich
        lives, provide financial return for our partners and leave a lasting
        legacy of excellence in real estate development.
      </p>
      <div className="flex flex-col my-2 items-center justify-center">
        <p className="font-['Playfair-Display'] mb-2">
          TO KNOW MORE ABOUT THE FIRM AND INVEST IN THE PROJECT PLEASE GO TO THE
          LINK BELOW.
        </p>
        <Button link="#" Text="Visit the website" />
      </div>
    </div>
  );
};
const DropDownData = [
  // {
  //     title: "Overview",
  //     content: "View the project overview",
  //     desc: "View the project overview",

  // },
  {
    title: "Documents",
    content: "View the project documentations",
    desc: "View the project documentations",
  },
  {
    title: "Business Plan",
    content: "View the business plan",
    desc: "View the business plan",
  },
  // {
  //     title: "Property",
  //     content: "Explore property details, comparable, locations and photos.",
  //     desc: "Explore property details, comparable, locations and photos.",
  // },
  {
    title: "Financials",
    content: "Reveiw debt assumptions, closing dates, caps and more",
    desc: "Reveiw debt assumptions, closing dates, caps and more",
  },
  {
    title: "Listed company",
    content: "Review the listed company in detail.",
    desc: <ListedCompany />,
  },
];

function MaterialUIAccordion() {
  const [open, setOpen] = React.useState(3);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="w-full font-['Playfair-Display']">
      {DropDownData.map((data, index) => (
        <Accordion
          className="my-4 rounded-lg bg-[#F3F3F3] border-[1px] border-solid border-gray-600 py-0"
          key={index}
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
