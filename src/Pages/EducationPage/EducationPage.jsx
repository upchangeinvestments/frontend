import React from 'react';
import Education from "./Education"
import Footer from "../../commonComponents/Footer"
import NavBar from "../../commonComponents/NavBar"

function EducationPage() {
    return (
        <div className="main vsm:w-[125vw] md:w-[107vw] lg:w-[100%] vsm:h-[130vh] md:h-[110vh] lg:h-[100vh]">
            <NavBar />
            <Education />
            <Footer />
        </div>
    )
}

export default EducationPage