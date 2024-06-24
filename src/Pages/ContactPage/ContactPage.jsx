import Footer from "../../commonComponents/Footer";
import Navbar from "../../commonComponents/NavBar";
import ContactForm from "./Contact";
import "../../styles/CategoryPage/categoryPage.css";
import { Helmet } from 'react-helmet-async';
import contactVideo from "../../assets/contactUsVideo.mp4"

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
        <div className="h-[70vh] YesevaFont flex items-center justify-center relative">
          <div className="flex justify-center items-start h-[80%] relative">
            <video className='absolute h-80 -mt-[9rem] -ml-[160%]' autoPlay loop muted playsInline>
              <source src={contactVideo} type='video/mp4' />
            </video>
            <div className="relative uppercase flex flex-col">
              <p className="text-8xl">  <span className="text-purple-600">Contact </span>Us</p>
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
