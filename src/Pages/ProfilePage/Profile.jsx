import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Sidebar from "./Sidebar";
import MobileSidebar from "./mobileSidebar";
import { useAuth } from "../../utils/AuthContext";
import { MuiTelInput } from 'mui-tel-input';
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import UsStates from "../../assets/US_states.json";

const Profile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useAuth();
  const [tabContent, setTabContent] = useState({
    data: user,
    title: "PROFILE SECTION",
    linkId: "",
  });
  console.log(user);
  const [firstName, setFirstName] = useState(user.name);
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phone, setPhone] = useState('');
  const [isFormChanged, setIsFormChanged] = useState(false);

  const [inputStateValue, setInputStateValue] = useState("");
  const [selectedState, setSelectedState] = useState(user.location);
  const [openStateDropdown, setStateDropdown] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the user's information here
    console.log(firstName, dateOfBirth, phone);

  }
  const handleInputChange = () => {
    setIsFormChanged(true);
  }
  const handleIncomingData = (data, title, linkId) => {
    setTabContent({ data, title, linkId });
  };
  const sidebarHandler = () => {
    setSidebarOpen(!sidebarOpen);
  };

  let date = new Date(user.createdAt);
  let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let day = date.getUTCDate().toString().padStart(2, "0");
  let month = monthNames[date.getUTCMonth()];
  let year = date.getUTCFullYear().toString();
  const dateOfJoined = `${day} ${month} ${year}`;

  date = new Date(user.dob);
  day = date.getUTCDate().toString().padStart(2, "0");
  month = monthNames[date.getUTCMonth()];
  year = date.getUTCFullYear().toString();
  const DOB = `${day} ${month} ${year}`;

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
      <div className="hidden md:block vsm:col-span-2 md:col-span-3 lg:col-span-3">
        <Sidebar sendDataToProfile={handleIncomingData} />
      </div>
      <div className="vsm:col-span-10  md:col-span-9 lg:col-span-9">
        <div className="vsm:p-[10px] vsm:ml-[10px] vsm:mt-[45px]  sm:w-[100%] sm:mt-[45px] sm:ml-[10px] sm:p-[15px] md:mt-[50px] md:ml-[60px] md:p-[20px] md:w-[85%] lg:mt-[50px] lg:ml-[100px] lg:w-[80%] lg:p-4 xl:w-[80%] xl:p-[20px] xl:ml-[100px] bg-[#f1f1f8] rounded-lg shadow-md  relative">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {user.image ? (
                <div>
                  <img
                    src={user.image}
                    alt="user"
                    className="border border-gray-900 p-0.5 vsm:w-[60px] vsm:h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] rounded-full"
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
            <div className=" vsm:ml-3 sm:ml-4 md:ml-8 lg:ml-8 flex justify-start">
              <h2 className="vsm:text-[14px] sm:text-[15px] text-purple-800 md:text-[17px] lg:text-[19px] xl:text-[23px]  font-bold flex flex-start">
                Welcome {user.name} !
              </h2>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-purple-500 vsm:text-[11px] vsm:pt-[15px] sm:text-[12px] md:text-[13px] lg:text-[15px] xl:text-[18px]">
              Start sharing to unlock your experience.
            </p>
          </div>
        </div>
        <div className="grid col-span-9">
          <div className="vsm:mt-[20px] vsm:ml-[10px] vsm:p-[16px] sm:w-[100%] sm:mt-[20px] sm:p-[18px]  sm:ml-[10px] md:mt-[40px] md:w-[85%] md:ml-[60px] lg:mt-[40px]  lg:ml-[100px]  lg:w-[80%] lg:p-[15px]  bg-[#f1f1f8] rounded-lg shadow-md relative">
            {tabContent && (
              <div id={tabContent.linkId}>
                <h2 className="vsm:text-[18px] vsm:mt-[10px] sm:text-[20px] sm:mt-[12px] md:text-lg md:mt-[15px]  lg:text-[22px]  lg:mt-[18px] xl:text-[25px] xl:mt-[20px] text-[#6e30a7]  font-bold text-center">
                  {tabContent.title}
                </h2>
                <div className="">
                  <form className="mx-auto w-[90%]" onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="firstName" className="block mb-1">
                        First Name
                      </label>
                      <input type="text" id="firstName" value={firstName} onChange={(e) => { setFirstName(e.target.value); handleInputChange(); }}
                        className="bg-transparent w-full border-gray-300 border-b-2 p-2 focus:outline-none focus:ring-[#6e30a7] focus:border-[#6e30a7]"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="firstName" className="block mb-1">
                        Email
                      </label>
                      <input type="email" id="email" value={user.email} readOnly={true}
                        className="bg-transparent w-full border-gray-300 border-b-2 p-2 focus:outline-none "
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="dateOfBirth" className="block mb-1">
                        Date of Birth
                      </label>
                      <input type="date" id="dateOfBirth" value={dateOfBirth} onChange={(e) => { setDateOfBirth(e.target.value); handleInputChange(); }}
                        className="bg-transparent w-full border-gray-300 border-b-2 p-2 focus:outline-none focus:ring-[#6e30a7] focus:border-[#6e30a7]"
                      />
                    </div>
                    {/* -----------------US states dropdown ----------------- */}
                    <div className="mb-4">
                      <div>State</div>
                      <div
                        onClick={() => setStateDropdown(!openStateDropdown)}
                        className={`bg-white text-black w-full p-2 flex items-center justify-between ${openStateDropdown ? "rounded-t-lg" : "rounded-lg"} ${!selectedState && "text-black"}`}>
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
                            className="placeholder:text-gray-700 p-2 outline-none bg-transparent text-black"
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
                      <label htmlFor="phone" className="block mb-1">
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
