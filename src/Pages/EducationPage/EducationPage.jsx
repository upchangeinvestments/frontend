import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-grid-carousel";
// import News from "./News";
import { LeftArrow, RightArrow } from "../../commonComponents/CarouselButton";
import Education from "./Education";
import { NavHashLink } from "react-router-hash-link";
import Footer from "../../commonComponents/Footer";
import NavBar from "../../commonComponents/NavBar";
import ArticleData from "../../assets/ArticlesEduPage.json";
import Card from "./Card";
import ReadMoreDrawer from "./ReadMoreDrawer";
import { Helmet } from 'react-helmet-async';

const MainData = [
  {
    Type: "Education",
    linkToSection: "/resources/#education",
  },
  {
    Type: "Keywords",
    linkToSection: "/resources/#keywords",
  },
  {
    Type: "Articles",
    linkToSection: "/resources/#articles",
  },
  {
    Type: "Why REI",
    linkToSection: "/resources/#REI",
  },
];

const KeywordData = [
  {
    title: "Internal Rate of Return (IRR)",
    content: "The Internal Rate of Return (IRR) is a metric used to evaluate the potential profitability of an investment. It represents the annualized rate of return at which the net present value (NPV) of all cash flows from the investment equals zero. In simpler terms, it's the discount rate that makes the sum of the present value of future cash flows equal to the initial investment.",
  },
  {
    title: "Accredited Investor",
    content: "Accredited investors are deemed to have sufficient financial sophistication and resources to understand and bear the risks associated with certain types of investments, including private placements and offerings of securities.",
  },
  {
    title: "Capitalization Rate (Cap Rate)",
    content: `In real estate investment, the capitalization rate, often abbreviated as "cap rate", is a metric used to estimate the potential return on an investment property. It's calculated by dividing the property's net operating income (NOI) by its current market value or purchase price.`,
  },
  {
    title: "Net Operating Incone (NOI)",
    content: "Net Operating Income (NOI) is a key financial metric used to evaluate the profitability and performance of income-producing properties. It represents the total income generated by a property minus all operating expenses, excluding any mortgage payments, income taxes, or depreciation.",
  },
  {
    title: "Holding Perdiod",
    content: "The holding period refers to the length of time that an investor plans to hold onto a particular property before selling it. It is a crucial aspect of the investment strategy and can significantly impact the overall return on investment (ROI) and profitability of the investment.",
  },
  {
    title: "Due Diligence",
    content: "Due Diligence refers to the process of conducting thorough research, investigation, and analysis of a property before finalizing the purchase or investment transaction. It is a critical step that helps investors assess the property's financial, legal, and physical aspects to make informed investment decisions and mitigate risks.",
  },
]

const reiData = [
  {
    title: "Why REI better than stocks",
    description: "Real estate investments offer several advantages over stocks, including the potential...",
    linkText: "Learn More",
    modalContent: (
      <React.Fragment>
        <h2 className="text-3xl mb-4">Why REI better than stocks</h2>
        <p>Real estate investments offer several advantages over stocks, including the potential for regular income through rental payments, the ability to leverage a smaller amount of money to control a larger asset, and the potential for tax benefits. Real estate can also serve as a hedge against inflation and can appreciate in value over time, particularly when renovations or repairs are made to the property. Additionally, real estate investors can take advantage of various tax write-offs and can earn monthly cash flow through rental income. While there are risks and challenges associated with real estate investments, such as illiquidity and management responsibilities, they can offer a more stable and predictable investment option compared to the volatility of the stock market. Moreover, real estate investments provide tangible assets that investors can physically inspect and control, offering a sense of security and ownership. Furthermore, real estate markets tend to be less sensitive to short-term economic fluctuations compared to stock markets, providing investors with potentially more reliable long-term returns. Finally, investing in real estate allows for diversification within an investment portfolio, reducing overall risk exposure and enhancing portfolio stability.
        </p>
      </React.Fragment>
    ),
  },
  {
    title: "Inflation Hedge",
    description: "Real estate can serve as a hedge against inflation. As the cost of living increases, so does the value of real estate properties",
    linkText: "Learn More",
    modalContent: (
      <React.Fragment>
        <h2 className="text-3xl mb-4">Inflation Hedge</h2>
        <p>
          Investing in real estate serves as an effective hedge against inflation due to its tendency to appreciate in value over time. Inflation erodes the purchasing power of money, causing prices to rise gradually. However, real estate values often rise along with inflation, allowing property owners to maintain or even increase their wealth. This is primarily because real estate assets are finite and in constant demand, especially in growing economies where population growth and urbanization drive the need for housing and commercial space. As the cost of goods and services increases, so does the value of real estate properties, making them a reliable store of wealth. Moreover, rental income from real estate investments tends to increase with inflation, as landlords can adjust rental rates to match rising living costs. Additionally, real estate investors can take advantage of fixed-rate mortgages, which become more affordable in real terms as inflation rises. Overall, real estate investments offer investors a tangible and reliable means of preserving their wealth and mitigating the effects of inflation over the long term.
        </p>
      </React.Fragment>
    ),
  },
  {
    title: "Tax Benefits",
    description: "Real estate investors may benefit from various tax advantages.",
    linkText: "Learn More",
    modalContent: (
      <React.Fragment>
        <h2 className="text-3xl mb-4">Tax Benefits</h2>
        <p>
          Investing in real estate offers various tax benefits that can significantly enhance investors' financial returns. One key advantage is the ability to deduct expenses associated with owning and operating rental properties, including mortgage interest, property taxes, maintenance costs, insurance premiums, and depreciation. These deductions can significantly reduce the taxable income generated by rental properties, resulting in lower overall tax liability. Additionally, real estate investors may benefit from tax-deferred exchanges, such as 1031 exchanges, which allow them to defer capital gains taxes when selling a property and reinvesting the proceeds into a similar property. Moreover, real estate investments qualify for preferential tax treatment on long-term capital gains, with lower tax rates compared to ordinary income. Investors can also leverage strategies such as cost segregation to accelerate depreciation deductions and maximize tax savings. Overall, the favorable tax treatment of real estate investments can help investors preserve more of their income and enhance their after-tax returns, making real estate an attractive asset class for tax-conscious investors.
        </p>
      </React.Fragment>
    ),
  },
  {
    title: "Leverage",
    description: "Leverage can amplify returns, potentially increasing the overall profitability of the investment.",
    linkText: "Learn More",
    modalContent: (
      <React.Fragment>
        <h2 className="text-3xl mb-4">Leverage</h2>
        <p>
          Leverage is a powerful tool that real estate investors utilize to amplify their returns and expand their investment portfolios. Unlike some other forms of investment, real estate allows investors to use borrowed funds, typically through mortgages, to finance a significant portion of the property's purchase price. By leveraging debt, investors can control a more substantial asset than they could afford with their own capital alone. This ability to magnify the potential return on investment is one of the key advantages of real estate investing. Additionally, because real estate values tend to appreciate over time, leveraging allows investors to multiply the growth on their equity. For example, if an investor purchases a property with a 20% down payment and the property appreciates by 5% annually, the return on investment is effectively amplified to 25% due to the leverage. However, it's important to recognize that leveraging also increases risk, as borrowing magnifies both gains and losses. Therefore, investors must carefully manage their debt levels and ensure they can cover mortgage payments even during periods of market downturns. Overall, leverage is a fundamental strategy in real estate investing that, when used wisely, can significantly enhance investors' wealth-building potential.
        </p>
      </React.Fragment>
    ),
  },
  {
    title: "Demand Stability",
    description: "There is always demand for real estate, whether for residential, commercial, or industrial purposes",
    linkText: "Learn More",
    modalContent: (
      <React.Fragment>
        <h2 className="text-3xl mb-4">Demand Stability</h2>
        <p>
          Demand stability is a fundamental characteristic of real estate investment that stems from the persistent and essential need for shelter and commercial space. Regardless of economic conditions, people will always require housing, whether it be for rent or purchase, ensuring a consistent level of demand in the real estate market. This stability is further bolstered by demographic factors such as population growth, urbanization, and changes in household formation rates, which continuously drive the need for residential properties. Similarly, businesses require office, retail, and industrial spaces to operate, creating ongoing demand for commercial real estate. Additionally, factors such as immigration, job growth, and lifestyle changes influence demand dynamics, contributing to the resilience of the real estate market. Unlike some other investment assets, real estate benefits from its physical presence and utility, making it less susceptible to rapid fluctuations in demand. Overall, the enduring need for real estate properties ensures a stable and predictable demand environment, providing investors with confidence in their investment decisions and long-term viability.
        </p>
      </React.Fragment>
    ),
  },
  {
    title: "Stocks & bonds Vs Real-estate investing",
    description: "Stocks and bonds and real estate investing are two popular investment strategies that offer different...",
    linkText: "Learn More",
    modalContent: (
      <React.Fragment>
        <h2 className="text-3xl mb-4">Stocks & bonds vs Real-estate investing</h2>
        <p>
          Stocks and bonds, as well as real estate investing, are popular investment strategies that offer different benefits and risks. Investing in stocks and bonds involves buying financial assets traded on the stock market, with stocks offering potential profits from company performance and bonds providing returns from interest payments. Real estate investing, on the other hand, involves buying, selling, or renting properties, offering the potential for rental income and property value appreciation. While stocks and bonds are generally more liquid, real estate can provide higher returns but requires more active management. Diversifying investments in both financial assets and real estate can help mitigate risk and maximize returns. Additionally, investors should carefully assess their investment goals, time horizon, and risk tolerance when determining the optimal allocation between stocks, bonds, and real estate in their portfolios. Moreover, it's essential to stay informed about market conditions and economic trends that may impact the performance of both asset classes, enabling investors to make well-informed investment decisions. Finally, maintaining a balanced and diversified portfolio is key to achieving long-term financial success and weathering market fluctuations effectively.
        </p>
      </React.Fragment>
    ),
  },
];


function ResouceContent() {
  const [data, setDrawerData] = React.useState();

  const receiveDataObject = (dataObject) => {
    setDrawerData(dataObject);
  };
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  }

  const description = "According to the survey released on Tuesday, March 5, at the 17th edition of the FICCI Real Estate Summit, there was a 7 per cent increase in investors considering residential real estate as a viable investment option, with 36 per cent of expected buyers viewing properties as an investment option in the latter half of 2023. The Indian real estate industry has experienced a significant positive shift in homebuyer sentiment and investment during the second half of 2023, as per a recent survey conducted by trade body FICCI and real estate consultant Anarock.";
  const shortDescription = description.substring(0, 150) + "... see more";

  return (
    <div className="w-[100%] md:w-[90%] max-w-7xl mx-auto px-4 vsm:px-6 lg:px-8 py-8 lg:-mt-[270px] xl:-mt-[300px] relative">
      <div className="mobile-filter-drawer absolute bottom-0">
        <ReadMoreDrawer open={openDrawer}
          closeDrawer={handleDrawer}
          data={data} />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 vsm:gap-y-6 lg:mt-0">
        {MainData.map((data, index) => (
          <NavHashLink to={data.linkToSection} smooth key={index}
            className={`p-4 md:py-8 flex flex-col items-center justify-center bg-white/20 backdrop-blur-xl rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]`} style={{
              background: index === 0 || index === 2 ? 'linear-gradient(135deg, #13072E, #3F2182)' : 'linear-gradient(135deg, #C770DC, #6853D2)',
            }}>
            <div className="vsm:w-[110px] msm:w-[120px] sm:w-[140px] vsm:h-[70px] md:w-[145px] lg:w-[200px] lg:h-[80px]  xl:w-[220px]  xl:h-[100px] flex justify-center items-center">
              <p className="flex items-center justify-center uppercase font-['Playfair-Display'] vsm:text-lg md:text-xl lg:text-3xl  text-white font-bold  md:mt-0">
                {data.Type}
              </p>
            </div>
          </NavHashLink>
        ))}
      </div>
      <div className="pt-2 my-[30px]" id="education">
        <h1 className="text-4xl pb-2 flex justify-center YesevaFont">
          EDUCATION
        </h1>
        <Education handleDrawer={handleDrawer}
          passDataObject={receiveDataObject} />
      </div>
      <div className="pt-2 my-[30px]" id="articles">
        <h1 className="text-4xl pb-2 flex justify-center YesevaFont">
          ARTICLES
        </h1>
        <div className="">
          <Carousel
            cols={2}
            rows={1}
            gap={10}
            arrowLeft={<LeftArrow dir="left" />}
            arrowRight={<RightArrow dir="left" />}
            loop
          >
            {ArticleData.map((article, index) => (
              <Carousel.Item key={index}>
                <div className="bg-white/20 backdrop-blur-xl font-['Playfair-Display'] shadow-md rounded-md w-full p-6 mb-4 vsm:h-full md:h-[300px] lg:h-[250px]">
                  <h2 className="text-lg font-semibold text-gray-800 text-left ">
                    {article.title}
                  </h2>
                  <div className="mt-2">
                    <p className="text-black md:hidden">
                      {article.desc.length > 175
                        ? `${article.desc.substring(0, 165)}...`
                        : article.desc}
                    </p>
                    <p className="text-black vsm:hidden md:block">
                      {article.desc.length > 210
                        ? `${article.desc.substring(0, 200)}...`
                        : article.desc}
                    </p>
                  </div>
                  <div className="mt-4">
                    <Link
                      to={article.url}
                      target="_blank"
                      className="text-[#6e30a7] hover:underline "
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="pt-2 my-[30px]" id="keywords">
        <h1 className="text-4xl pb-2 flex justify-center YesevaFont">
          KEYWORDS
        </h1>
        <div className="">
          <Carousel
            cols={2}
            rows={1}
            gap={10}
            arrowLeft={<LeftArrow dir="right" />}
            arrowRight={<RightArrow dir="right" />}
            loop
          >
            {KeywordData.map((keywords, index) => (
              <Carousel.Item key={index}>
                <div className="bg-white/20 backdrop-blur-xl font-['Playfair-Display'] shadow-md rounded-md w-full p-6 mb-4 vsm:h-[400px] md:h-[300px] lg:h-[230px]">
                  <h2 className="text-lg font-semibold text-gray-800 text-center ">
                    {keywords.title}
                  </h2>
                  <div className="mt-2">
                    <p className="text-black">
                      {keywords.content}
                    </p>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="pt-2 pb-8 my-[30px]" id="REI">
        <h1 className="text-4xl text-center pb-2 flex justify-center YesevaFont">
          Why Real Estate Investments
        </h1>
        <div className="bg-white/20 backdrop-blur-xl p-4 rounded-lg pb-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <h1 className="text-xl font-semibold font-['Playfair-Display'] text-center mb-4 text-black uppercase">
            Why choose real estate investments
          </h1>
          <div className="flex font-['Playfair-Display'] flex-wrap">
            {reiData.map((data, index) => (
              <div className="w-full md:w-1/2 lg:w-1/3 p-2" key={index}>
                <Card data={data} handleDrawer={handleDrawer}
                  passDataObject={receiveDataObject} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
};

function EducationPage() {
  return (
    <div className="">
      <Helmet>
        <title>Resources</title>
        <meta name="description" content="Real Estate listed projects website" />
        <link rel="canonical" href="/resources" />
      </Helmet>
      <div className="categoryMain">
        <NavBar />
        <div className="lg:h-[70vh] xl:h-[65vh] YesevaFont flex items-center justify-center relative flex-col">
          <div className="flex flex-col justify-start items-center h-[90%] relative">
            <p className="text-[3.5rem] md:text-[4.5rem] text-shadow-xl text-purple-600 uppercase mt-2"> Resources </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          < ResouceContent />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EducationPage;
