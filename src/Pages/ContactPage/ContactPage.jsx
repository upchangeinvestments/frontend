import Footer from "../../commonComponents/Footer";
import Navbar from "../../commonComponents/NavBar";
import ContactForm from "./Contact";
import "../../styles/CategoryPage/categoryPage.css";
import { Helmet } from 'react-helmet-async';

function ContactPage() {
  return (
    <div className="">
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="Real Estate listed projects website" />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <div className="categoryMain">
        <Navbar />
        <div className="h-[85vh] overflow-hidden flex items-center vsm:justify-center lg:justify-end">
          <p className="uppercase font-['Playfair-Display'] text-white vsm:text-4xl md:text-5xl xl:text-6xl lg:-mt-[27%] mx-auto lg:ml-[60%]">
            CONTACT US
          </p>
        </div>
      </div>
      <ContactForm />
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default ContactPage;
