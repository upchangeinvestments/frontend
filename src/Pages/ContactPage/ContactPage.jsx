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
        <div className="h-[60vh] FontLinikSans flex items-center justify-center relative">
          <div className="flex justify-center items-start h-[90%] relative">
            <div className="relative uppercase flex flex-col">
              <p className="text-[3.5rem] md:text-[4rem] xl:text-[5rem] text-shadow-xl">  <span className="text-purple-600">Contact </span>Us</p>
            </div>
          </div>
        </div>
        <ContactForm />
        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
