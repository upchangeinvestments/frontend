import React, { useState } from "react";
// import bgImage from "../../assets/login_BG.jpeg";
import EduModal from "./EduModal";
import Card from "./Card";

const EducationData = [
  {
    title: "What are money market funds?",
    description:
      "Have excess cash in your checking account? Learn about this yielding cash management solution that can help protect your principal and maintain daily liquidity.",
    linkText: "Learn More",
    modalContent: (
      <React.Fragment>
        <h2 className="text-3xl mb-4">What are money market funds</h2>
        <p>Money market funds are a type of mutual fund that focuses on investing in short-term, low-risk securities. These funds are managed with the objective of maintaining a stable net asset value (NAV) per share, typically set at $1. By primarily investing in short-term debt instruments like Treasury bills, commercial paper, certificates of deposit (CDs), and short-term corporate and municipal debt, money market funds aim to provide investors with safety and liquidity for their cash reserves. This emphasis on short-term securities ensures that investors can readily access their funds, making money market funds a popular choice for those seeking quick access to their investments without sacrificing safety. Despite not being government-guaranteed like bank deposits, money market funds are considered relatively safe due to their focus on high-quality, low-risk securities. However, it's important to acknowledge that there is still a small degree of risk associated with these investments, particularly in the event of defaults or market disruptions. Money market funds generate income primarily through the interest earned on their portfolio securities, offering investors a modest return compared to other investment options while maintaining stability. Regulated by entities like the Securities and Exchange Commission (SEC) in the United States, money market funds adhere to strict regulations to protect investors and maintain stability in the financial system. Furthermore, investors should be aware of factors such as interest rate fluctuations and credit risk, which can impact the performance of money market funds. It's essential to carefully review the fund's investment objectives, portfolio composition, and expense ratios to ensure alignment with one's investment goals and risk tolerance.</p>
      </React.Fragment>
    )
  },
  {
    title: "What are ETFs?",
    description:
      "Exchange-traded funds, or ETFs, have made investing easier and more accessible. Learn more about them.",
    linkText: "Learn More",
    modalContent: (
      <React.Fragment>
        <h2 className="text-3xl mb-4">What are ETFs</h2>
        <p>Exchange-Traded Funds (ETFs) are investment funds traded on stock exchanges, akin to individual stocks. These funds are designed to replicate the performance of a specific index, commodity, bond, or a mix of assets. ETFs provide investors with a convenient way to gain exposure to a diversified portfolio without purchasing each asset separately. They offer diversification by holding a range of securities, which can include stocks, bonds, commodities, or other assets. ETFs aim to mirror the performance of their underlying index or assets, meaning their value fluctuates based on the performance of those assets. With liquidity throughout the trading day, investors can easily buy or sell ETF shares at market prices, offering flexibility and ease of trading. Most ETFs disclose their holdings daily, providing transparency into the fund's underlying assets. Additionally, ETFs typically have lower expense ratios compared to traditional mutual funds, contributing to their appeal. They also offer tax efficiency and come in a variety of options across asset classes, allowing investors to build diversified portfolios tailored to their goals and risk tolerance. Moreover, the continuous innovation in the ETF space has led to the development of specialized ETFs catering to specific investment strategies, sectors, or themes. Investors can choose from a wide range of ETFs, including those focused on environmental, social, and governance (ESG) criteria, factor-based investing, or emerging markets. As such, ETFs offer investors ample opportunities to implement their investment strategies efficiently and cost-effectively across various market segments.</p>
      </React.Fragment>
    )
  },
  {
    title: "A guide to investing in closed end funds",
    description:
      "Looking for greater flexibility in your investment strategy with higher potential income and return?",
    linkText: "Learn More",
    modalContent: (
      <React.Fragment>
        <h2 className="text-3xl mb-4">A guide to investing in closed end funds</h2>
        <p>Investing in closed-end funds (CEFs) requires a nuanced approach due to their unique characteristics. Unlike open-end funds, CEFs have a fixed number of shares and trade on exchanges like stocks, often at prices that deviate from their net asset value (NAV). Evaluating a CEF's discount or premium to its NAV is essential, as it can significantly impact returns over time. Understanding the distribution policy of a CEF is crucial for income-focused investors, as it determines the frequency and consistency of dividend payments. Investors should also assess the fund's management team's track record and expertise in navigating market cycles and managing the fund's portfolio effectively. Before investing, it's crucial to conduct thorough research. This involves understanding the fund's investment objective, strategy, and portfolio holdings, as well as its historical performance, expense ratios, distribution policies, and management team expertise. Additionally, consider factors such as leverage usage, portfolio concentration, and sector exposure. Due diligence can help investors make informed decisions and manage risks associated with investing in CEFs. Moreover, monitoring the fund's premium/discount volatility over time can provide insights into market sentiment and potential buying or selling opportunities. Understanding the tax implications of investing in CEFs, such as potential capital gains distributions, is essential for maximizing after-tax returns. Investors should also stay updated on regulatory changes and market trends that may impact CEFs' performance and valuation. Regular portfolio reviews and adjustments are advisable to ensure alignment with evolving investment objectives and risk tolerance levels.</p>
      </React.Fragment>
    )
  },
  {
    title: "What are mutual funds?",
    description:
      "Mutual funds for beginners: Learn about this easy way to invest in stocks, bonds, and other assets.",
    linkText: "Learn More",
    modalContent: (
      <React.Fragment>
        <h2 className="text-3xl mb-4">What are mutual funds</h2>
        <p>Mutual funds are investment vehicles that pool money from multiple investors to create a diversified portfolio of stocks, bonds, or other securities. These funds are managed by professional portfolio managers who make investment decisions on behalf of the investors. Mutual funds offer individuals a convenient way to access diversified investment portfolios without needing to directly manage their investments. They come in various types, catering to different investment goals and risk preferences, including equity funds, bond funds, and money market funds. One of the key advantages of mutual funds is their liquidity, allowing investors to buy or sell shares at the fund's net asset value (NAV) on any business day. Additionally, mutual funds offer transparency, with regular disclosure of holdings, performance, and fees. Investors should pay attention to the expense ratios of mutual funds, which represent the annual fees charged by the fund for managing the investments. Lower expense ratios can significantly impact long-term returns. Tax efficiency is another important consideration, as certain mutual funds may generate taxable capital gains distributions, impacting investors' after-tax returns. Some mutual funds offer different share classes, each with its own fee structure. It's essential for investors to understand the differences between share classes and choose the most suitable one based on their investment amount and time horizon. Mutual funds may also impose redemption fees or sales charges, known as loads, which can erode returns, particularly for short-term investors. While mutual funds provide professional management, investors should stay informed about market trends and periodically review their investment portfolios to ensure alignment with their financial goals and risk tolerance levels.</p>
      </React.Fragment>
    )
  },
  {
    title: "What are commodity funds?",
    description:
      "Explore the unique investment vehicle that lets you invest in commodities, or raw materials.",
    linkText: "Learn More",
    modalContent: (
      <React.Fragment>
        <h2 className="text-3xl mb-4">What are commodity funds</h2>
        <p>Commodity funds are investment vehicles that allow investors to gain exposure to various commodities, such as precious metals, agricultural products, energy resources, or other raw materials, without needing to directly purchase and store physical commodities. These funds invest in commodity futures contracts, options, or related assets to track the performance of the underlying commodities. Commodity funds can offer diversification benefits and serve as a hedge against inflation, as commodities often have low correlation with traditional financial assets like stocks and bonds. Investors can choose from different types of commodity funds, including those focused on specific commodities or diversified across multiple commodities. While commodity funds provide opportunities for portfolio diversification and exposure to the commodities market, they also come with risks such as commodity price volatility, regulatory changes, and market speculation. Therefore, investors should carefully consider their investment objectives, risk tolerance, and the specific characteristics of commodity funds before investing. Additionally, it's important to understand the impact of macroeconomic factors, geopolitical events, and supply-demand dynamics on commodity prices when evaluating commodity fund investments. Due diligence is essential in assessing the performance track record, expense ratios, and management expertise of commodity funds. Furthermore, investors should be aware of the potential for leverage usage in some commodity funds, which can amplify both gains and losses. Keeping abreast of global market trends and staying diversified across asset classes can help mitigate risks associated with investing in commodity funds. As with any investment decision, consulting with a financial advisor or conducting thorough research is advisable to make informed choices aligned with one's financial goals.</p>
      </React.Fragment>
    )
  },
  {
    title: "Understanding Risk-Adjusted Returns",
    description:
      "Discover how risk-adjusted returns help investors evaluate an investment's performance relative to its risk.",
    linkText: "Learn More",
    modalContent: (
      <React.Fragment>
        <h2 className="text-3xl mb-4">Understanding RiskAdjusted Returns</h2>
        <p>
          Risk-adjusted returns are a measure used by investors to evaluate the performance of an investment relative to the level of risk taken. Rather than solely focusing on the absolute return generated by an investment, risk-adjusted returns take into account the level of volatility or risk associated with achieving that return. One common measure of risk-adjusted returns is the Sharpe ratio, which compares the return of an investment to its risk, as measured by its volatility or standard deviation. A higher Sharpe ratio indicates that the investment has delivered a higher return for the amount of risk taken. By considering risk-adjusted returns, investors can better assess whether an investment has provided adequate compensation for the level of risk incurred. This allows for more informed decision-making and comparisons between different investment opportunities, taking into account both return potential and risk exposure. Moreover, understanding the limitations of risk-adjusted measures is crucial, as they may not capture all aspects of risk, such as tail risk or specific market conditions. It's also important to use multiple risk-adjusted metrics in conjunction with other performance measures to gain a comprehensive understanding of investment performance. Additionally, investors should consider their own risk tolerance and investment objectives when interpreting risk-adjusted returns, as what may be an acceptable level of risk for one investor may not be suitable for another. Ultimately, incorporating risk-adjusted returns into investment analysis helps investors make more informed decisions, mitigate risks, and optimize portfolio performance over the long term.</p>
      </React.Fragment>
    )
  }
];

const cardsData = [
  {
    title: "What is inflation?",
    description: "Is inflation a good or bad? Explore what it means.",
    modalContent: (
      <React.Fragment>
        <h2 className="text-3xl mb-4">What is inflation</h2>
        <p>
          Inflation is a macroeconomic phenomenon characterized by a sustained
          increase in the general price level of goods and services within an
          economy over a period of time. It represents the erosion of
          purchasing power, as each unit of currency buys fewer goods and
          services than it did previously. Inflation can be caused by various
          factors, including increased demand relative to supply (demand-pull
          inflation), rising production costs (cost-push inflation), and
          embedded expectations of future price increases (built-in inflation).
          It is typically measured using indices such as the Consumer Price
          Index (CPI) or the Producer Price Index (PPI), which track changes
          in the prices of a representative basket of goods and services.
          Central banks often aim to maintain low and stable inflation rates,
          typically targeting around 2% per year, to support economic stability
          and growth. However, high or unpredictable inflation can have
          adverse effects on economic activities, such as reducing consumer
          purchasing power, distorting investment decisions, and redistributing
          income and wealth. Therefore, monitoring and managing inflation is a
          key aspect of economic policy and decision-making.
        </p>
      </React.Fragment>
    ),
  },
  {
    title: "How to Invest?",
    description: "Learn why, when, and how to start investing your money.",
    modalContent: (
      <React.Fragment>
        <h2 className="text-3xl mb-4">How to Invest</h2>
        <p>Investing involves committing capital with the expectation of earning a return over time. Start by setting clear investment goals and understanding your risk tolerance. Educate yourself on different investment options and develop a diversified investment strategy. Choose suitable investments based on your goals, risk tolerance, and research. Open an investment account with a reputable platform and allocate your assets according to your strategy. Regularly monitor and rebalance your portfolio, staying informed about market trends. Consider seeking professional advice if needed, but remember that investing involves risks and requires careful consideration of your financial situation and objectives. Additionally, it's essential to stay disciplined and avoid emotional decision-making, especially during periods of market volatility. Diversification across asset classes, such as stocks, bonds, and alternative investments, can help mitigate risk and improve long-term returns. Furthermore, consider the impact of taxes and fees on investment returns, as minimizing expenses can enhance overall portfolio performance. Finally, remember that investing is a long-term endeavor, and patience is key to achieving your financial goals. By staying focused on your objectives and maintaining a well-thought-out investment strategy, you can navigate market fluctuations and build wealth over time.
        </p>
      </React.Fragment>
    ),
  },
  {
    title: "Why invest in private real estate?",
    description:
      "Private real estate has outperformed US equities and fixed income on an absolute and risk-adjusted basis since 2000.",
    modalContent: (
      <React.Fragment>
        <h2 className="text-3xl mb-4">Why invest in private real estate</h2>
        <p>
          Investing in private real estate offers several advantages. Firstly,
          it provides the potential for attractive returns through rental income
          and property appreciation. Unlike public real estate investment
          options like real estate investment trusts (REITs), private real
          estate allows for direct ownership, offering greater control over
          property selection, management, and value-add opportunities.
          Additionally, private real estate investments may provide
          diversification benefits to a portfolio, as they often have low
          correlation with traditional stocks and bonds. Moreover, real estate
          investments offer the potential for tax advantages such as
          depreciation deductions and the ability to defer capital gains taxes
          through 1031 exchanges. Overall, private real estate can be an
          appealing option for investors seeking income, diversification, and
          potential tax benefits within their investment portfolio.
        </p>
      </React.Fragment>
    ),
  },
  {
    title: "Benefits of Investing With Your IRA",
    description:
      "Long-term retirement plans are typically designed to benefit individuals by reducing their tax bill while earning interest over time.",
    modalContent: (
      <React.Fragment>
        <h2 className="text-3xl mb-4">Benefits of Investing With Your IRA</h2>
        <p>
          Investing with your Individual Retirement Account (IRA) offers several
          benefits. Firstly, contributions to a traditional IRA may be
          tax-deductible, potentially reducing your taxable income for the year
          in which contributions are made. Alternatively, contributions to a
          Roth IRA are made with after-tax dollars, but qualified withdrawals,
          including earnings, are tax-free in retirement. Secondly, IRAs offer
          a wide range of investment options, including stocks, bonds, mutual
          funds, ETFs, real estate, and more, allowing you to tailor your
          portfolio to your investment goals and risk tolerance. Additionally,
          investments within an IRA can grow tax-deferred or tax-free,depending on the type of account, potentially accelerating wealth accumulation over time. Moreover, IRAs offer the advantage of disciplined retirement savings, as funds are earmarked for retirement and may be subject to penalties for early withdrawal, helping investors stay on track with their long-term financial goals. Overall, investing with your IRA can provide tax advantages, investment flexibility, and a disciplined approach to retirement savings, making it a valuable tool for building wealth for retirement.

        </p>
      </React.Fragment>
    ),
  },
];


function ServiceCard({ data, handleDrawer, passDataObject }) {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(!modalOpen);

  return (
    <div onClick={handleOpen} className="">
      <EduModal isOpen={modalOpen} handleOpen={handleOpen} modalContent={data.modalContent} />
      <div className="bg-white/20 backdrop-blur-xl rounded-lg shadow-md font-['Playfair-Display'] overflow-hidden text-center items-center vsm:mx-4 md:mx-8 p-4 h-[160px] border border-1 border-[#6e30a7] flex flex-col ">
        <h3 className="text-xl font-medium mb-2">{data.title}</h3>
        <p className="line-clamp-3 px-4 text-left h-full">{data.description}</p>
        <button
          onClick={handleOpen}
          className="hidden md:block bg-[#6e30a7] text-white  py-1 px-3 rounded mt-2 bottom-4"
        >
          Learn More
        </button>
        <button
          onClick={() => {
            handleDrawer();
            passDataObject(data.modalContent);
          }}
          className="md:hidden bg-[#6e30a7] text-white  py-1 px-3 rounded mt-2 bottom-4"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

const Education = ({ handleDrawer, passDataObject }) => {
  return (
    <div className="w-full ">
      <div className="bg-white/20 backdrop-blur-xl p-4 rounded-lg pb-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
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
            <ServiceCard key={index} data={card} handleDrawer={handleDrawer} passDataObject={passDataObject} />
          ))}
        </div>
      </div>
      <div className="bg-white/20 backdrop-blur-xl p-4 rounded-lg pb-6 mt-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
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
              <Card data={data} handleDrawer={handleDrawer} passDataObject={passDataObject} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
