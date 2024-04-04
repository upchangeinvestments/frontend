import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import Sidebar from "./Sidebar";
import MobileSidebar from "./mobileSidebar";
import { useAuth } from "../../utils/AuthContext";
import { MuiTelInput } from 'mui-tel-input';
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import UsStates from "../../assets/US_states.json";
import axios from "axios";
import Error from "../../utils/Error";
import SuccessToast from "../../utils/successToast";

const Profile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, backendUrl, setUser } = useAuth();
  const [tabContent, setTabContent] = useState({
    data: user,
    title: "PROFILE SECTION",
    linkId: "",
  });
  console.log(user);
  const [Name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [isFormChanged, setIsFormChanged] = useState(false);

  const [inputStateValue, setInputStateValue] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [openStateDropdown, setStateDropdown] = useState(false);

  useEffect(() => {
    setName(user.name || '');
    setDateOfBirth(user.dob ? new Date(user.dob).toISOString().split('T')[0] : "");
    setPhone(user.phone || '');
    setSelectedState(user.location || '');
  }, [user]);

  const updateProfile = async (e) => {
    e.preventDefault();
    const newDetails = { user, name: Name, dob: dateOfBirth, phone: phone, location: selectedState };
    console.log(newDetails);
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
    console.log(dateOfBirth);
    console.log(typeof dateOfBirth);
    setIsFormChanged(true);
  }
  const handleIncomingData = (data, title, linkId) => {
    setTabContent({ data, title, linkId });
  };
  const sidebarHandler = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // let date = new Date(user.createdAt);
  // let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  // let day = date.getUTCDate().toString().padStart(2, "0");
  // let month = monthNames[date.getUTCMonth()];
  // let year = date.getUTCFullYear().toString();
  // const dateOfJoined = `${day} ${month} ${year}`;

  // date = new Date(user.dob);
  // day = date.getUTCDate().toString().padStart(2, "0");
  // month = monthNames[date.getUTCMonth()];
  // year = date.getUTCFullYear().toString();
  // const DOB = `${day} ${month} ${year}`;

  return (
    <div className="grid font-['Playfair-Display'] grid-cols-12">
      <div className="md:hidden" onClick={sidebarHandler}>
        <svg
          className="h-6 w-6 vsm:mt-[15px] vsm:ml-[8px]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        {sidebarOpen && (
          <div className="mobile-filter-drawer">
            <MobileSidebar
              handleIncomingData={handleIncomingData}
              open={sidebarOpen}
            />
          </div>
        )}
      </div>
      <div className="hidden md:block vsm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5 ">
        <Sidebar sendDataToProfile={handleIncomingData} />
      </div>
      <div className="vsm:col-span-10  md:col-span-9 lg:col-span-8 xl:col-span-7">
        <div className="vsm:p-[10px] vsm:ml-[10px] vsm:mt-[45px]  sm:w-[100%] sm:mt-[45px] sm:ml-[10px] sm:p-[15px] md:mt-[50px] md:ml-[60px] md:p-[20px] md:w-[85%] lg:mt-[50px] lg:ml-[100px] lg:w-[60%] lg:p-4 xl:w-[70%] xl:p-[20px]  bg-gradient-to-r from-purple-300 to-pink-200 rounded-lg shadow-md  relative">
          <div className="flex items-center">
            <div className="">
              {user.image ? (
                <div>
                  <img
                    src={user.image}
                    alt="user"
                    className="border border-gray-200 p-0.5 vsm:w-[60px] vsm:h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] rounded-full"
                  />
                </div>
              ) : (
                <FaUserCircle
                  variant="circular"
                  size="100px"
                  alt="user"
                  className="border border-gray-900 p-0.5 vsm:w-[60px] vsm:h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] rounded-full"
                />
              )}
            </div>
            <div className="vsm:ml-3 sm:ml-4 md:ml-8 lg:ml-8 mt-6 grid grid-rows-2 gap-y-4">
             <h2 className="vsm:text-[14px] sm:text-[15px] text-purple-800 md:text-[17px] lg:text-[28px] xl:text-5xl font-bold">
               Welcome!
             </h2>
              <p className="text-2xl font-semibold ml-2">{user.name}</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[#6e30a7] vsm:text-[11px] vsm:pt-[15px] sm:text-[12px] md:text-[13px] lg:text-[15px] xl:text-[18px]">
            Embark on Your Investment Journey: Let's Discover Your Preferences Together!
            </p>
          </div>
        </div>
        <div className="grid col-span-9">
          <div className="vsm:mt-[20px] vsm:ml-[10px] vsm:p-[16px] sm:w-[100%] sm:mt-[20px] sm:p-[18px]  sm:ml-[10px] md:mt-[40px] md:w-[85%] md:ml-[60px] lg:mt-[40px]  lg:ml-[100px]  lg:w-[60%] lg:p-[15px] xl:w-[70%]  bg-gradient-to-r from-purple-300 to-pink-200 backdrop-blur-xl rounded-lg shadow-md relative">
            {tabContent && (
              <div id={tabContent.linkId}>
                <h2 className="vsm:text-[18px] vsm:mt-[10px] sm:text-[20px] sm:mt-[12px] md:text-lg md:mt-[15px]  lg:text-[22px]  lg:mt-[18px] xl:text-[25px] xl:mt-[20px] text-[#6e30a7]   font-bold text-center">
                  {tabContent.title}
                </h2>
                <div className="">
                  <form className="mx-auto w-[90%]" onSubmit={updateProfile}>
                    <div className="mb-4 mt-10">
                      <label htmlFor="Name" className="block mb-1 uppercase font-bold text-xl">
                        First Name
                      </label>
                      <input type="text" id="Name" value={Name} onChange={(e) => { setName(e.target.value); handleInputChange(); }}
                        className="bg-transparent w-full border-gray-900 border-b-2 p-2 focus:outline-none focus:ring-[#6e30a7] focus:border-[#6e30a7] text-xl "
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="Name" className="block mb-1 uppercase font-bold text-xl ">
                        Email
                      </label>
                      <input type="email" id="email" value={user.email} readOnly={true}
                        className="bg-transparent w-full border-gray-900 border-b-2 p-2 focus:outline-none text-xl "
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="dateOfBirth" className="block mb-1 uppercase font-bold text-xl">
                        Date of Birth
                      </label>
                      <input type="date" id="dateOfBirth" value={dateOfBirth} onChange={(e) => { setDateOfBirth(e.target.value); handleInputChange(); }}
                        className="bg-transparent w-full border-gray-900 border-b-2 p-2 focus:outline-none focus:ring-[#6e30a7] focus:border-[#6e30a7] text-xl"
                      />
                    </div>
                    {/* -----------------US states dropdown ----------------- */}
                    <div className="mb-4 uppercase">
                      <div className="font-bold text-xl">State</div>
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
                      <label htmlFor="phone" className="block mb-1 uppercase font-bold text-xl">
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
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
