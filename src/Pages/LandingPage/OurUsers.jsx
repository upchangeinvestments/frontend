import React from 'react'
import Marquee from "react-fast-marquee";
import UsersComponent from "./UsersComponent";

function OurUsers() {
    return (
        <section className="bg-white py-6">
            <div className="mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Our Users</h2>
                <p className="text-lg mx-auto mb-4 text-[#A474E2] text-center">
                    Where Professionals Unite: From Wall Street to Main Street, we bring
                    together the best of Bank of America, PWC, 7/11, Citi Bank, Amazon,
                    and more!
                </p>
                <p className="text-center mb-8 text-[#A474E2] font-bold">
                    Join the synergy of success with our multi-background community.
                </p>
                <div className="flex items-center justify-center">
                    <Marquee className=""
                        gradient={false}
                        loop={0}
                        direction="left"
                        speed={100}>
                        <UsersComponent image="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w7680-h4320-rw" />
                        <UsersComponent image="https://i.postimg.cc/qhGYn1mB/Bankof-America.jpg" />
                        <UsersComponent image="https://i.postimg.cc/ykGGFgTR/citiBank.jpg" />
                        <UsersComponent image="https://i.postimg.cc/PPJcpz1h/EY.jpg" />
                        <UsersComponent image="https://i.postimg.cc/fSTPvYFc/philips.jpg" />
                        <UsersComponent image="https://i.postimg.cc/tgqvBVCW/samsung.jpg" />
                        <UsersComponent image="https://i.postimg.cc/nM0ghwj0/stanford.jpg" />
                        <UsersComponent image="https://i.postimg.cc/FfmcBvbZ/Whats-App-Image-2024-01-31-at-11-35-28-PM.jpg" />
                        <UsersComponent image="https://i.postimg.cc/qtLnfFjd/Whats-App-Image-2024-01-31-at-11-39-29-PM.jpg" />
                    </Marquee>
                </div>
            </div>
        </section>
    )
}

export default OurUsers;