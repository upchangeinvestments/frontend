import Footer from "../../commonComponents/Footer";
import Navbar from "../../commonComponents/NavBar";
import ContactForm from "./Contact";
import "../../styles/CategoryPage/categoryPage.css";

function ContactPage() {
    return (
        <div className="">
            <div className="aboutMain">
                <div className="">
                    <Navbar />
                    <div className="h-[49vh] overflow-hidden flex items-center justify-center">
                        <p className='uppercase text-white font-bold vsm:text-2xl md:text-5xl mt-[12px]'>CONTACT US</p>
                    </div>
                </div>
            </div>
            <ContactForm />
            <div className="mt-16">
                <Footer />
            </div>
        </div>
    )

}

export default ContactPage