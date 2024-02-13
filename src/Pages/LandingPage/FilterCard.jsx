import { FaCircleCheck } from "react-icons/fa6";


function FilterCard({ heading, items }) {
    const xNo = [Math.floor(Math.random() * 5), Math.floor(Math.random() * 5)];

    return (
        <div className='flex flex-col items-center rounded-lg justify-center p-4 bg-white vsm:w-60 msm:w-72 bg-white/50 backdrop-blur-[100px]'
            style={{
                backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))",
                backgroundBlendMode: "overlay",
            }}
        >
            <h2 className="text-[#9747FF] font-bold text-lg">{heading}</h2>
            <ol className="relative border-s border-purple-500 dark:border-purple-700 -py-8 my-6 h-[30%]">
                {items.map((element, index) => (
                    <li className="ms-6" key={index}>
                        <span className="absolute flex items-center justify-center w-2 h-2 rounded-full -left-1 ">
                            <div className="absolute top-1"><FaCircleCheck size="20px" className={xNo[0] === index || xNo[1] === index ? "text-[#9747FF]" : "text-[#C7C8CC]"} /></div>
                        </span>
                        <p className="mb-4 text-base font-normal ">{element}</p>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default FilterCard;
