import React, { useState } from "react";
// import bgImage from "../../assets/login_BG.jpeg";
import EduModal from "./EduModal";

const EducationData = [
  {
    title: "What are money market funds?",
    description:
      "Have excess cash in your checking account? Learn about this yielding cash management solution that can help protect your principal and maintain daily liquidity.",
    linkText: "Learn More",
    modalContent: "#",
  },
  {
    title: "What are ETFs?",
    description:
      "Exchange-traded funds, or ETFs, have made investing easier and more accessible. Learn more about them.",
    linkText: "Learn More",
    modalContent: "#",
  },
  {
    title: "A guide to investing in closed end funds",
    description:
      "Looking for greater flexibility in your investment strategy with higher potential income and return?",
    linkText: "Learn More",
    modalContent: "#",
  },
  {
    title: "What are mutual funds?",
    description:
      "Mutual funds for beginners: Learn about this easy way to invest in stocks, bonds, and other assets.",
    linkText: "Learn More",
    modalContent: "#",
  },
  {
    title: "What are commodity funds?",
    description:
      "Explore the unique investment vehicle that lets you invest in commodities, or raw materials.",
    linkText: "Learn More",
    modalContent: "#",
  },
  {
    title: "Understanding Risk-Adjusted Returns",
    description:
      "Discover how risk-adjusted returns help investors evaluate an investment's performance relative to its risk.",
    linkText: "Learn More",
    modalContent: "#",
  },
];

const cardsData = [
  {
    title: "What is inflation?",
    description: "Is inflation a good or bad? Explore what it means.",
    modalContent: "Inflation is the rate at which the general level of prices for goods and services in an economy is rising over a period of time. In other words, it represents the decrease in purchasing power of a nation's currency. When inflation occurs, each unit of currency buys fewer goods and services than it did before. Inflation is typically measured as an annual percentage increase in the Consumer Price Index (CPI) or the Producer Price Index (PPI), which are indexes that track the prices of a basket of goods and services commonly purchased by households or businesses, respectively."
  },
  {
    title: "How to Invest?",
    description: "Learn why, when, and how to start investing your money.",
    modalContent: "Investing involves committing capital with the expectation of earning a return over time. Start by setting clear investment goals and understanding your risk tolerance. Educate yourself on different investment options and develop a diversified investment strategy. Choose suitable investments based on your goals, risk tolerance, and research. Open an investment account with a reputable platform and allocate your assets according to your strategy. Regularly monitor and rebalance your portfolio, staying informed about market trends. Consider seeking professional advice if needed, but remember that investing involves risks and requires careful consideration of your financial situation and objectives."
  },
  {
    title: "Why invest in private real estate?",
    description: "Private real estate has outperformed US equities and fixed income on an absolute and risk-adjusted basis since 2000.",
    modalContent: "Investing in private real estate offers several advantages. Firstly, it provides the potential for attractive returns through rental income and property appreciation. Unlike public real estate investment options like real estate investment trusts (REITs), private real estate allows for direct ownership, offering greater control over property selection, management, and value-add opportunities. Additionally, private real estate investments may provide diversification benefits to a portfolio, as they often have low correlation with traditional stocks and bonds. Moreover, real estate investments offer the potential for tax advantages such as depreciation deductions and the ability to defer capital gains taxes through 1031 exchanges. Overall, private real estate can be an appealing option for investors seeking income, diversification, and potential tax benefits within their investment portfolio."
  },
  {
    title: "Benefits of Investing With Your IRA",
    description: "Long-term retirement plans are typically designed to benefit individuals by reducing their tax bill while earning interest over time.",
    modalContent: "Investing with your Individual Retirement Account (IRA) offers several benefits. Firstly, contributions to a traditional IRA may be tax-deductible, potentially reducing your taxable income for the year in which contributions are made. Alternatively, contributions to a Roth IRA are made with after-tax dollars, but qualified withdrawals, including earnings, are tax-free in retirement. Secondly, IRAs offer a wide range of investment options, including stocks, bonds, mutual funds, ETFs, real estate, and more, allowing you to tailor your portfolio to your investment goals and risk tolerance. Additionally, investments within an IRA can grow tax-deferred or tax-free, depending on the type of account, potentially accelerating wealth accumulation over time. Moreover, IRAs offer the advantage of disciplined retirement savings, as funds are earmarked for retirement and may be subject to penalties for early withdrawal, helping investors stay on track with their long-term financial goals. Overall, investing with your IRA can provide tax advantages, investment flexibility, and a disciplined approach to retirement savings, making it a valuable tool for building wealth for retirement."
  },
];

function ServiceCard({ title, description, modalContent }) {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(!modalOpen);

  return (
    <div onClick={handleOpen} className="">
      <EduModal isOpen={modalOpen} handleOpen={handleOpen} modalContent={modalContent} />
      <div className="bg-white/20 backdrop-blur-xl rounded-lg shadow-md font-['Playfair-Display'] overflow-hidden text-center items-center vsm:mx-4 md:mx-8 p-4 border border-1 border-[#6e30a7] flex flex-col ">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="line-clamp-3">{description}</p>
        <button
          onClick={handleOpen}
          className="bg-[#6e30a7] text-white  py-1 px-3 rounded mt-2 bottom-4"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

const Card = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(!modalOpen);
  return (
    <div onClick={handleOpen} className="">
      <EduModal isOpen={modalOpen} handleOpen={handleOpen} modalContent={props.data.modalContent} />
      <div className="block bg-white/20 backdrop-blur-xl shadow-md p-4 rounded-lg vsm:h-[250px] msm:h-[230px] lg:h-[220px] xl:h-[200px] relative border border-1 border-[#6e30a7]">
        <h2 className="vsm:text-xl lg:text-lg font-['Playfair-Display'] font-semibold mb-2 md:hidden">
          {props.data.title.length > 33
            ? `${props.data.title.substring(0, 30)}...`
            : props.data.title}
        </h2>
        <h2 className="vsm:text-2xl lg:text-lg font-['Playfair-Display'] font-semibold mb-2 vsm:hidden md:block">
          {props.data.title}
        </h2>
        <p className="">
          {" "}
          {props.data.description.length > 120
            ? `${props.data.description.substring(0, 117)}...`
            : props.data.description}
        </p>
        <button onClick={handleOpen} className="bg-[#6e30a7] hover:bg-purple-700 text-white py-1 px-2 rounded mt-2 absolute bottom-4">
          {props.data.linkText}
        </button>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div className="w-full ">
      <div className="bg-white/20 backdrop-blur-xl p-4 rounded-lg pb-6">
        <h1 className="text-xl font-semibold font-['Playfair-Display'] text-center mb-4 text-black uppercase">
          Learn the basics
        </h1>
        <p className="mb-6 text-justify font-['Playfair-Display'] text-black w-[90%] md:w-[70%] mx-auto ">
          Many people never start investing their money because they don’t
          understand things like qualified longevity annuity contracts – and to
          be honest, we can’t blame them. We are here to help demystify
          financial terminology and make investing easier for everyone.
        </p>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
          {cardsData.map((card, index) => (
            <ServiceCard key={index} {...card} />
          ))}
        </div>
      </div>
      <div className="bg-white/20 backdrop-blur-xl p-4 rounded-lg pb-6 mt-10">
        <h1 className="text-xl font-semibold text-center font-['Playfair-Display'] mb-4 text-black mt-6 uppercase">
          Understand the different types of investment funds
        </h1>
        <p className="mb-6 text-justify font-['Playfair-Display'] text-black w-[90%] md:w-[70%] mx-auto">
          Learn about the different kinds of investment funds available to
          investors, from cost-effective exchange-traded funds (ETFs) and index
          funds to actively managed and offshore funds. Then you can start to
          develop an investment strategy around your own personal goals and
          preferences.
        </p>
        <div className="flex font-['Playfair-Display'] flex-wrap">
          {EducationData.map((data, index) => (
            <div className="w-full md:w-1/2 lg:w-1/3 p-2" key={index}>
              <Card data={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
