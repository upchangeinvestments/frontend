import React from 'react'
import EduModal from "./EduModal";

const Card = ({ data, handleDrawer, passDataObject }) => {
    const [modalOpen, setModalOpen] = React.useState(false);
    const handleOpen = () => setModalOpen(!modalOpen);

    return (
        <div className="">
            <EduModal isOpen={modalOpen} handleOpen={handleOpen} modalContent={data.modalContent} />
            <div className="block bg-white/20 backdrop-blur-xl shadow-md p-4 rounded-lg vsm:h-[250px] msm:h-[230px] lg:h-[220px] xl:h-[200px] relative border border-1 border-[#6e30a7]">
                <h2 className="vsm:text-xl lg:text-lg font-['Playfair-Display'] font-semibold mb-2 md:hidden">
                    {data.title.length > 33
                        ? `${data.title.substring(0, 30)}...`
                        : data.title}
                </h2>
                <h2 className="vsm:text-2xl lg:text-lg font-['Playfair-Display'] font-semibold mb-2 vsm:hidden md:block">
                    {data.title}
                </h2>
                <p className="">
                    {" "}
                    {data.description.length > 120
                        ? `${data.description.substring(0, 117)}...`
                        : data.description}
                </p>
                <button onClick={handleOpen} className="hidden md:block bg-[#6e30a7] hover:bg-purple-700 text-white py-1 px-2 rounded mt-2 absolute bottom-4">
                    {data.linkText}
                </button>
                <button onClick={() => {
                    handleDrawer();
                    passDataObject(data.modalContent);
                }} className="md:hidden bg-[#6e30a7] hover:bg-purple-700 text-white py-1 px-2 rounded mt-2 absolute bottom-4">
                    {data.linkText}
                </button>
            </div>
        </div>
    );
};

export default Card