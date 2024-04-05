import Footer from "../../commonComponents/Footer";
import Navbar from "../../commonComponents/NavBar";
import ContactForm from "./Contact";
import "../../styles/CategoryPage/categoryPage.css";

function ContactPage() {
  return (
    <div className="">
      <div className="categoryMain">
        <Navbar />
        <div className="h-[85vh] overflow-hidden flex items-center vsm:justify-center lg:justify-end">
          <p className="uppercase font-['Playfair-Display'] text-white vsm:text-4xl md:text-5xl xl:text-6xl lg:-mt-[350px] lg:mr-[220px] xl:-mt-[430px] xl:mr-[250px] ">
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
