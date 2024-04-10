import React, { useState, useEffect } from "react";
import { MuiTelInput } from 'mui-tel-input';
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import UsStates from "../../assets/US_states.json";
import axios from "axios";
import Error from "../../utils/Error";
import SuccessToast from "../../utils/successToast";
import { useAuth } from "../../utils/AuthContext";


const Profile = () => {
    const { user, backendUrl, setUser } = useAuth();
    const [Name, setName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [phone, setPhone] = useState("");
    const [isFormChanged, setIsFormChanged] = useState(false);

    const [inputStateValue, setInputStateValue] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [openStateDropdown, setStateDropdown] = useState(false);

    const updateProfile = async (e) => {
        e.preventDefault();
        const newDetails = { user, name: Name, dob: dateOfBirth, phone: phone, location: selectedState };
        // console.log(newDetails);
        const res = await axios.post(`${backendUrl}/updateUser`, newDetails);
        if (res.status === 200) {
            setUser(res.data.user);
            SuccessToast("Data updated successfully");
        } else if (res.status === 500) {
            Error("Internal Server Error, try again later!");
        } else {
            Error("Something went wrong, please try again later!");
        }
    }
    const handleInputChange = () => {
        setIsFormChanged(true);
    }

    useEffect(() => {
        setName(user.name || '');
        setDateOfBirth(user.dob ? new Date(user.dob).toISOString().split('T')[0] : "");
        setPhone(user.phone || '');
        setSelectedState(user.location || '');
    }, [user]);

    return (
        <div className="">
            <form className="mx-auto w-[90%]" onSubmit={updateProfile}>
                <div className="mb-4 mt-10">
                    <label htmlFor="Name" className="block mb-1 uppercase font-bold md:text-lg lg:text-xl">
                        First Name
                    </label>
                    <input type="text" id="Name" value={Name} onChange={(e) => { setName(e.target.value); handleInputChange(); }}
                        className="bg-transparent w-full border-gray-900 border-b-2 p-2 focus:outline-none focus:ring-[#6e30a7] focus:border-[#6e30a7] md:text-lg lg:text-xl "
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="Name" className="block mb-1 uppercase font-bold md:text-lg lg:text-xl ">
                        Email
                    </label>
                    <input type="email" id="email" value={user.email} readOnly={true}
                        className="bg-transparent w-full border-gray-900 border-b-2 p-2 focus:outline-none md:text-lg lg:text-xl "
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="dateOfBirth" className="block mb-1 uppercase font-bold md:text-lg lg:text-xl">
                        Date of Birth
                    </label>
                    <input type="date" id="dateOfBirth" value={dateOfBirth} onChange={(e) => { setDateOfBirth(e.target.value); handleInputChange(); }}
                        className="bg-transparent w-full border-gray-900 border-b-2 p-2 focus:outline-none focus:ring-[#6e30a7] focus:border-[#6e30a7] md:text-lg lg:text-xl"
                    />
                </div>
                {/* -----------------US states dropdown ----------------- */}
                <div className="mb-4 uppercase">
                    <div className="font-bold md:text-lg lg:text-xl mb-2">State</div>
                    <div
                        onClick={() => setStateDropdown(!openStateDropdown)}
                        className={`bg-gray-200 text-black w-full p-2 flex items-center justify-between ${openStateDropdown ? "rounded-t-lg" : "rounded-lg"} ${!selectedState && "text-black"}`}>
                        {selectedState
                            ? selectedState?.length > 25
                                ? selectedState?.substring(0, 25) + "..."
                                : selectedState
                            : "Select State"}
                        <BiChevronDown size={20} className={`${openStateDropdown && "rotate-180"}`} />
                    </div>
                    <ul>
                        <div className={`flex items-center px-2 sticky top-0 bg-white ${openStateDropdown ? "block" : "hidden"}`}>
                            <AiOutlineSearch size={18} className="text-black" />
                            <input
                                type="text"
                                value={inputStateValue}
                                onChange={(e) => setInputStateValue(e.target.value.toLowerCase())}
                                placeholder="Enter State "
                                className="placeholder:text-gray-700  p-2 outline-none bg-transparent text-black"
                            />
                        </div>
                        <div className={`overflow-y-auto rounded-b-lg ${openStateDropdown ? "max-h-60" : "max-h-0"} `}>
                            {UsStates?.map((country) => (
                                <li
                                    key={country?.name}
                                    className={`p-2 pl-6 text-sm bg-white text-black hover:bg-[#6e30a7] hover:text-white ${country?.name?.toLowerCase() === selectedState?.toLowerCase() &&
                                        "bg-[#6e30a7] "} ${country?.name?.toLowerCase().startsWith(inputStateValue)
                                            ? "block"
                                            : "hidden"
                                        }`}
                                    onClick={() => {
                                        if (country?.name?.toLowerCase() !== selectedState.toLowerCase()) {
                                            setSelectedState(country?.name);
                                            setStateDropdown(false);
                                            setInputStateValue("");
                                        }
                                    }}
                                >
                                    {country?.name}
                                </li>
                            ))}
                        </div>
                    </ul>
                </div>
                {/* -----------------end of US states dropdown ----------------- */}
                <div className="mb-4">
                    <label htmlFor="phone" className="block mb-1 uppercase font-bold md:text-lg lg:text-xl">
                        Phone
                    </label>
                    <div className="">
                        <MuiTelInput className="w-full border-b-2 " value={phone} onChange={(newValue) => { setPhone(newValue); handleInputChange(); }} />
                    </div>
                </div>
                <button type="submit" className={isFormChanged ? "bg-[#6e30a7] text-white py-2 px-4 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-[#6e30a7]"
                    : "hidden"}>
                    Update Profile
                </button>
            </form>
        </div>
    );
}

export default Profile;