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
      <h2 className="font-['Playfair-Display'] text-lg">Fly Heights</h2>
      <p>
      Founded in 2023, Fly Heights Enterprises emerges as a dynamic force in the realm of urban development, spearheading transformative projects that redefine city skylines and enhance community living. With a commitment to innovation and sustainability, Fly Heights Enterprises embraces the challenge of shaping tomorrow's cities today.
      At Fly Heights Enterprises, our ethos is rooted in a deep-seated dedication to excellence and community enrichment. From iconic residential towers to state-of-the-art commercial complexes, we craft spaces that inspire and elevate the human experience. Our portfolio showcases a diverse range of projects, each bearing the hallmark of meticulous design and unparalleled quality.
      With a legacy spanning over a decade, Fly Heights Enterprises has become synonymous with forward-thinking urban development. Our team of visionary architects, engineers, and planners collaborate seamlessly to bring visionary concepts to life, ensuring that every project exceeds expectations.
      </p>
      <p className="mt-2">
      Beyond construction, Fly Heights Enterprises is committed to fostering sustainable growth and prosperity. Through strategic partnerships and community engagement initiatives, we strive to create lasting value for our stakeholders while championing environmental stewardship and social responsibility.
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
    id: "documents",

  },
  {
    title: "Business Plan",
    content: "View the business plan",
    desc: "View the business plan",
    id: "business",
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
    id: "financial",
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
