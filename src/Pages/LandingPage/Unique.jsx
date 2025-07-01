import "../../styles/LandingPage/LandingPage.css";

function Unique() {

  return (
    <div className="flex items-center w-[80%] flex-col mx-auto my-8">
      <h1 className="font-bold text-2xl whitespace-nowrap md:text-3xl font-['Playfair-Display'] uppercase">
        <span className="hidden md:flex md:flex-col md:items-center md:justify-center">
          <p>Where Smart <span className="text-purple-600">Capital</span></p>
          <p>Meets the right Real Estate Firms</p>
        </span>
        <span className="text-center md:hidden text-wrap">
          <p>Where Smart <span className="text-purple-600">Capital</span> Meets the right Real Estate Firms</p>
        </span>
      </h1>
      <p className="font-['Playfair-Display'] text-xl mt-4 text-justify md:text-center">At LynkInfinite Investments, we believe real estate
        investing starts with the right partnership, not just the right project. Our platform is designed to give investors a smarter, more strategic way
        to discover and compare verified real estate investment firms all in one place. With detailed insights into firm performance, risk profiles, fees,
        and geographic focus, you gain the clarity to tailor your investment strategy with confidence. Whether you’re optimizing for long-term growth,
        diversification, or cash flow, LynkInfinite empowers you to make informed decisions and align with firms that match your financial goals Intelligently
        and Transparently.
      </p>
      {/* <div className="flex items-center justify-center w-[170%] md:w-[130%] lg:w-[100%]">
        <video className="rounded-xl w-[90%]" src={Video} autoPlay playsInline loop muted></video>
      </div> */}
    </div>
  );
}

export default Unique;
