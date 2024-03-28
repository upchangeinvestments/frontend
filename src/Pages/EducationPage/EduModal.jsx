import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import logo from "../../assets/logo.png";

function EduModal({ isOpen, handleOpen }) {
    return (
        <div className="">
            {isOpen && (<div className="absolute inset-0 z-50 flex items-center justify-center  text-white">
                <div className="flex flex-col justify-center items-center w-[600px] bg-gradient-to-r from-[#6e30a7] to-purple-300 p-6 py-8 rounded-xl relative">
                    <div className="absolute right-4 top-4" onClick={handleOpen}><ImCross size="20px" /></div>
                    <div className="flex items-center justify-center mb-3">
                        <img src={logo} alt="logo" className="w-[50%]" />
                    </div>
                    <div className="font-['Playfair-Display']">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos explicabo eligendi numquam at asperiores soluta sapiente deserunt rerum, aliquid alias,
                            neque perspiciatis eveniet quaerat quam quidem et accusamus esse dolores, reiciendis earum illo distinctio molestiae. Omnis quibusdam nihil officiis
                            exercitationem ipsum repellat corporis ratione iste numquam distinctio, reprehenderit, incidunt veniam iusto? Nesciunt consequuntur laborum ea? Quaerat
                            est placeat odit eos quae explicabo quas mollitia recusandae amet, illum dolorum, sapiente cupiditate quos eum in culpa ex qui cumque tempore. Sequi nisi
                            architecto pariatur? Ullam vero tempora dolorem, maiores dolores dignissimos a? Nulla, dolorum porro eum dolor odit facere minus consequatur sapiente.
                        </p>
                    </div>
                </div>
            </div>)}
        </div>
    );
}

export default EduModal;