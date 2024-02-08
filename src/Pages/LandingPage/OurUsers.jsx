import React from 'react'
import Marquee from "react-fast-marquee";
import UsersComponent from "./UsersComponent";
import SevenEleven from "../../assets/UsersLogos/711-2.png";
import Amazon from "../../assets/UsersLogos/amazon.png";
import EY from "../../assets/UsersLogos/ey2.png";
import Philips from "../../assets/UsersLogos/Philips.png";
import TripAdvisor from "../../assets/UsersLogos/TripAdvisor.png";
import BankOfAmerica from "../../assets/UsersLogos/bankOfAmerica.png";
import capitalOne from "../../assets/UsersLogos/capitalOne.png";
import CitiBank from "../../assets/UsersLogos/citiBank.png";
import Microsoft from "../../assets/UsersLogos/microsoft.png";
import Samsung from "../../assets/UsersLogos/samsung.png";


function OurUsers() {
    return (
        <section className="bg-transparent pb-2 ">
            <div className="mx-auto">
                <h2 className="text-3xl font-bold mb-2 text-center">OUR USERS</h2>
                <p className="text-lg mx-auto text-[#A474E2] text-center">
                    Where Professionals Unite: From Wall Street to Main Street, we bring
                    together the best of Bank of America, PWC, 7/11, Citi Bank, Amazon,
                    and more!
                </p>
                <p className="text-center text-[#A474E2] font-bold">
                    Join the synergy of success with our multi-background community.
                </p>
                <div className="flex items-center justify-center">
                    <Marquee className="flex items-start"
                        gradient={false}
                        loop={0}
                        direction="left"
                        speed={60}>
                        <UsersComponent image={SevenEleven} className="" />
                        <UsersComponent image={Amazon} className="mt-4" />
                        <UsersComponent image={EY} className="w-24 -mt-6" />
                        <UsersComponent image={Philips} className="" />
                        <UsersComponent image={TripAdvisor} className="w-36 mt-2" />
                        <UsersComponent image={BankOfAmerica} className="w-44 " />
                        <UsersComponent image={capitalOne} className="-mt-2" />
                        <UsersComponent image={CitiBank} className="-mt-2" />
                        <UsersComponent image={Microsoft} className="" />
                        <UsersComponent image={Samsung} className="" />
                    </Marquee>
                </div>
            </div>
        </section>
    )
}

export default OurUsers;