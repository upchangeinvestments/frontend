import React from 'react'
import hospital from "../../assets/categories/hospital.jpg";
import hotel from "../../assets/categories/hotel.jpg";
import infrastructure from "../../assets/categories/infrastructure.jpg";
import office from "../../assets/categories/office.jpg";
import resident from "../../assets/categories/resident.jpg";
import retail from "../../assets/categories/retail.jpg";
import school from "../../assets/categories/school.jpg";
import warehouse from "../../assets/categories/warehouse.jpg";
import storage from "../../assets/categories/storage.jpg";

const Images = [hospital, hotel, warehouse, storage, school, retail, office, infrastructure, resident];
const Texts = ["Hospital", "Hotels", "Warehouse", "Storage", "School", "Retail", "Office", "Infrastructure", "Resident"];

const categoryData = Images.map((image, index) => ({
    image: image,
    text: Texts[index],
}));

function Categories() {
    return (
        <div className="grid vsm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-x-6 gap-y-12 mx-8 ">
            {categoryData.map((element, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                    <div className='vsm:w-[100%] lg:w-[80%] flex items-center justify-center'>
                        <img src={element.image} alt="" className='rounded-3xl object-cover h-[350px]' />
                    </div>
                    <div className='vsm:w-[100%] lg:w-[80%] flex items-center justify-center pt-2'>
                        <p className='CustomizeFontH text-lg'>{element.text}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Categories;