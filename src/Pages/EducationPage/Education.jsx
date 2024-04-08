import React, { useState } from "react";
// import bgImage from "../../assets/login_BG.jpeg";
import EduModal from "./EduModal";

const EducationData = [
  {
    title: "What are money market funds?",
    description:
      "Have excess cash in your checking account? Learn about this yielding cash management solution that can help protect your principal and maintain daily liquidity.",
    linkText: "Learn More",
    modalContent: [<h2 className="text-3xl mb-4">What are money market funds</h2>,`Money market funds are a type of mutual fund that focuses on investing in short-term, low-risk securities. These funds are managed with the objective of maintaining a stable net asset value (NAV) per share, typically set at $1. By primarily investing in short-term debt instruments like Treasury bills, commercial paper, certificates of deposit (CDs), and short-term corporate and municipal debt, money market funds aim to provide investors with safety and liquidity for their cash reserves. This emphasis on short-term securities ensures that investors can readily access their funds, making money market funds a popular choice for those seeking quick access to their investments without sacrificing safety. Despite not being government-guaranteed like bank deposits, money market funds are considered relatively safe due to their focus on high-quality, low-risk securities. However, it's important to acknowledge that there is still a small degree of risk associated with these investments, particularly in the event of defaults or market disruptions. Money market funds generate income primarily through the interest earned on their portfolio securities, offering investors a modest return compared to other investment options while maintaining stability. Regulated by entities like the Securities and Exchange Commission (SEC) in the United States, money market funds adhere to strict regulations to protect investors and maintain stability in the financial system. `]
  },
  {
    title: "What are ETFs?",
    description:
      "Exchange-traded funds, or ETFs, have made investing easier and more accessible. Learn more about them.",
    linkText: "Learn More",
    modalContent: [<h2 className="text-3xl mb-4">What are ETFs</h2>,`
     Exchange-Traded Funds (ETFs) are investment funds traded on stock exchanges, akin to individual stocks. These funds are designed to replicate the performance of a specific index, commodity, bond, or a mix of assets. ETFs provide investors with a convenient way to gain exposure to a diversified portfolio without purchasing each asset separately. They offer diversification by holding a range of securities, which can include stocks, bonds, commodities, or other assets. ETFs aim to mirror the performance of their underlying index or assets, meaning their value fluctuates based on the performance of those assets. With liquidity throughout the trading day, investors can easily buy or sell ETF shares at market prices, offering flexibility and ease of trading. Most ETFs disclose their holdings daily, providing transparency into the fund's underlying assets. Additionally, ETFs typically have lower expense ratios compared to traditional mutual funds, contributing to their appeal. They also offer tax efficiency and come in a variety of options across asset classes, allowing investors to build diversified portfolios tailored to their goals and risk tolerance. Overall, ETFs have gained popularity for their accessibility, cost-effectiveness, transparency, and flexibility in portfolio construction.`]
  },
  {
    title: "A guide to investing in closed end funds",
    description:
      "Looking for greater flexibility in your investment strategy with higher potential income and return?",
    linkText: "Learn More",
    modalContent:  [<h2 className="text-3xl mb-4">A guide to investing in closed end funds</h2>,`Investing in closed-end funds (CEFs) requires a nuanced approach due to their unique characteristics. Unlike open-end funds, CEFs have a fixed number of shares and trade on exchanges like stocks, often at prices that deviate from their net asset value (NAV). Before investing, it's crucial to conduct thorough research. This involves understanding the fund's investment objective, strategy, and portfolio holdings, as well as its historical performance, expense ratios, distribution policies, and management team expertise. Additionally, consider factors such as leverage usage, portfolio concentration, and sector exposure. Due diligence can help investors make informed decisions and manage risks associated with investing in CEFs.`]
  },
  {
    title: "What are mutual funds?",
    description:
      "Mutual funds for beginners: Learn about this easy way to invest in stocks, bonds, and other assets.",
    linkText: "Learn More",
    modalContent: [<h2 className="text-3xl mb-4">What are mutual funds</h2>,`Mutual funds are investment vehicles that pool money from multiple investors to create a diversified portfolio of stocks, bonds, or other securities. These funds are managed by professional portfolio managers who make investment decisions on behalf of the investors. Mutual funds offer individuals a convenient way to access diversified investment portfolios without needing to directly manage their investments. They come in various types, catering to different investment goals and risk preferences, including equity funds, bond funds, and money market funds. One of the key advantages of mutual funds is their liquidity, allowing investors to buy or sell shares at the fund's net asset value (NAV) on any business day. Additionally, mutual funds offer transparency, with regular disclosure of holdings, performance, and fees. While mutual funds provide benefits such as diversification and professional management, investors should carefully consider factors such as fees, investment objectives, and risk tolerance before investing.`]
  },
  {
    title: "What are commodity funds?",
    description:
      "Explore the unique investment vehicle that lets you invest in commodities, or raw materials.",
    linkText: "Learn More",
    modalContent: [<h2 className="text-3xl mb-4">What are commodity funds</h2>,`
    Commodity funds are investment vehicles that allow investors to gain exposure to various commodities, such as precious metals, agricultural products, energy resources, or other raw materials, without needing to directly purchase and store physical commodities. These funds invest in commodity futures contracts, options, or related assets to track the performance of the underlying commodities. Commodity funds can offer diversification benefits and serve as a hedge against inflation, as commodities often have low correlation with traditional financial assets like stocks and bonds. Investors can choose from different types of commodity funds, including those focused on specific commodities or diversified across multiple commodities. While commodity funds provide opportunities for portfolio diversification and exposure to the commodities market, they also come with risks such as commodity price volatility, regulatory changes, and market speculation. Therefore, investors should carefully consider their investment objectives, risk tolerance, and the specific characteristics of commodity funds before investing.`]
  },
  {
    title: "Understanding Risk-Adjusted Returns",
    description:
      "Discover how risk-adjusted returns help investors evaluate an investment's performance relative to its risk.",
    linkText: "Learn More",
    modalContent: [<h2 className="text-3xl mb-4">Understanding Risk-Adjusted Returns</h2>,`
    Risk-adjusted returns are a measure used by investors to evaluate the performance of an investment relative to the level of risk taken. Rather than solely focusing on the absolute return generated by an investment, risk-adjusted returns take into account the level of volatility or risk associated with achieving that return. One common measure of risk-adjusted returns is the Sharpe ratio, which compares the return of an investment to its risk, as measured by its volatility or standard deviation. A higher Sharpe ratio indicates that the investment has delivered a higher return for the amount of risk taken. By considering risk-adjusted returns, investors can better assess whether an investment has provided adequate compensation for the level of risk incurred. This allows for more informed decision-making and comparisons between different investment opportunities, taking into account both return potential and risk exposure. Overall, understanding risk-adjusted returns is essential for investors seeking to build well-balanced and efficient investment portfolios that align with their risk preferences and financial goals.`]
  },
];

const cardsData = [
  {
    title: "What is inflation?",
    description: "Is inflation a good or bad? Explore what it means.",
    modalContent: [<h2 className="text-3xl mb-4">What is inflation</h2>,`
    Inflation is a macroeconomic phenomenon characterized by a sustained increase in the general price level of goods and services within an economy over a period of time. It represents the erosion of purchasing power, as each unit of currency buys fewer goods and services than it did previously. Inflation can be caused by various factors, including increased demand relative to supply (demand-pull inflation), rising production costs (cost-push inflation), and embedded expectations of future price increases (built-in inflation). It is typically measured using indices such as the Consumer Price Index (CPI) or the Producer Price Index (PPI), which track changes in the prices of a representative basket of goods and services. Central banks often aim to maintain low and stable inflation rates, typically targeting around 2% per year, to support economic stability and growth. However, high or unpredictable inflation can have adverse effects on economic activities, such as reducing consumer purchasing power, distorting investment decisions, and redistributing income and wealth. Therefore, monitoring and managing inflation is a key aspect of economic policy and decision-making.`]
  },
  {
    title: "How to Invest?",
    description: "Learn why, when, and how to start investing your money.",
    modalContent: [<h2 className="text-3xl mb-4">How to Invest</h2>,`
    Investing involves committing capital with the expectation of earning a return over time. Start by setting clear investment goals and understanding your risk tolerance. Educate yourself on different investment options and develop a diversified investment strategy. Choose suitable investments based on your goals, risk tolerance, and research. Open an investment account with a reputable platform and allocate your assets according to your strategy. Regularly monitor and rebalance your portfolio, staying informed about market trends. Consider seeking professional advice if needed, but remember that investing involves risks and requires careful consideration of your financial situation and objectives.`]
  },
  {
    title: "Why invest in private real estate?",
    description: "Private real estate has outperformed US equities and fixed income on an absolute and risk-adjusted basis since 2000.",
    modalContent:  [<h2 className="text-3xl mb-4">Why invest in private real estate</h2>,`
    Investing in private real estate offers several advantages. Firstly, it provides the potential for attractive returns through rental income and property appreciation. Unlike public real estate investment options like real estate investment trusts (REITs), private real estate allows for direct ownership, offering greater control over property selection, management, and value-add opportunities. Additionally, private real estate investments may provide diversification benefits to a portfolio, as they often have low correlation with traditional stocks and bonds. Moreover, real estate investments offer the potential for tax advantages such as depreciation deductions and the ability to defer capital gains taxes through 1031 exchanges. Overall, private real estate can be an appealing option for investors seeking income, diversification, and potential tax benefits within their investment portfolio.`]
  },
  {
    title: "Benefits of Investing With Your IRA",
    description: "Long-term retirement plans are typically designed to benefit individuals by reducing their tax bill while earning interest over time.",
    modalContent: [<h2 className="text-3xl mb-4">Benefits of Investing With Your IRA</h2>,`
    Investing with your Individual Retirement Account (IRA) offers several benefits. Firstly, contributions to a traditional IRA may be tax-deductible, potentially reducing your taxable income for the year in which contributions are made. Alternatively, contributions to a Roth IRA are made with after-tax dollars, but qualified withdrawals, including earnings, are tax-free in retirement. Secondly, IRAs offer a wide range of investment options, including stocks, bonds, mutual funds, ETFs, real estate, and more, allowing you to tailor your portfolio to your investment goals and risk tolerance. Additionally, investments within an IRA can grow tax-deferred or tax-free, depending on the type of account, potentially accelerating wealth accumulation over time. Moreover, IRAs offer the advantage of disciplined retirement savings, as funds are earmarked for retirement and may be subject to penalties for early withdrawal, helping investors stay on track with their long-term financial goals. Overall, investing with your IRA can provide tax advantages, investment flexibility, and a disciplined approach to retirement savings, making it a valuable tool for building wealth for retirement.`]
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
