import Footer from "../../commonComponents/Footer";
import Navbar from "../../commonComponents/NavBar";
import ContactForm from "./Contact";
import "../../styles/CategoryPage/categoryPage.css";

function ContactPage() {
  return (
    <div className="">
      <div className="contactMain">
        <div className="">
          <Navbar />
          <div className="h-[55vh] overflow-hidden   flex items-center justify-center">
            <p className="uppercase font-['Playfair-Display'] lg:text-5xl text-white  vsm:text-4xl md:text-5xl mt-[-151px]">
              CONTACT US
            </p>
          </div>
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
