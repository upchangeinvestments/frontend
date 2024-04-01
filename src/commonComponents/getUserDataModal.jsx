import React, { useState } from "react";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { CiCalendar } from "react-icons/ci";
import axios from "axios";
import Error from "../utils/Error";
import bgImage from "../assets/login_BG.jpeg";
import { useAuth } from "../utils/AuthContext"
import "../App.css";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import UsStates from "../assets/US_states.json"


function UserDataModal() {
  const { user, setUser, backendUrl, isAuth } = useAuth();
  const [isOpen, setOpen] = useState(isAuth && !user.updatedInfo);
  // const [countries, setCountries] = useState(null);
  const [inputStateValue, setInputStateValue] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [openDropdown, setDropdown] = useState(false);

  // const handleOpen = () => setOpen(!isOpen);
  const [valueDOB, onChangeDOB] = useState(new Date());

  const updateUserDataHandler = async (event) => {
    event.preventDefault();

    const dob = new Date(valueDOB);
    const today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    if (age < 18) {
      Error("You must be at least 18 years old to invest.");
      return;
    }

    const postData = {
      location: selectedState,
      valueDOB: valueDOB,
      user: user,
    };

    if (!user.name) {
      postData.name = event.target.name.value;
    }
    const res = await axios.post(`${backendUrl}/updateUser`, postData);
    // console.log(res);
    if (res.status === 200) {
      setUser(res.data.user);
      setOpen(false);
    }
    if (res.status === 500) {
      Error("Internal Server Error, try again later!");
    }
  }

  React.useEffect(() => {
    if (isAuth && !user.updatedInfo) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [isAuth, user]);

  return (
    <div className="">
      {isOpen && (
        <div className="absolute inset-0 z-50 bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-['Playfair-Display']">
          <div className="flex flex-col justify-center items-center w-[600px] bg-gradient-to-r from-[#6e30a7] to-purple-300 p-6 py-8 rounded-xl relative">
            {/* <div className="absolute right-4 top-4" onClick={handleOpen}><ImCross size="20px" /></div> */}
            <div>
              <p className="text-2xl">Let us know more about you!</p>
            </div>
            <div className="my-2 w-80 max-w-screen-lg sm:w-96 text-lg">
              <form onSubmit={updateUserDataHandler}>
                {!user.name && (
                  <div className="">
                    <p variant="h6" color="blue-gray" className="">
                      Your Name
                    </p>
                    <input
                      type="text"
                      name="name"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                      required
                    />
                  </div>
                )}

                <div className="mt-4">
                  <p variant="h6" color="blue-gray" className="">
                    Date of Birth
                  </p>
                  <DatePicker onChange={onChangeDOB} required={true} value={valueDOB} maxDate={new Date()} name="" className="w-full text-black focus:outline-non " calendarIcon={<CiCalendar size="25px" />} />
                </div>

                {/* -----------------US states dropdown ----------------- */}
                <div className="mt-4">
                  <div>Select State</div>
                  <div
                    onClick={() => setDropdown(!openDropdown)}
                    className={`bg-white/20 backdrop-blur-sm w-full p-2 flex items-center justify-between rounded ${!selectedState && "text-black"}`}>
                    {selectedState
                      ? selectedState?.length > 25
                        ? selectedState?.substring(0, 25) + "..."
                        : selectedState
                      : "Select State"}
                    <BiChevronDown size={20} className={`${openDropdown && "rotate-180"}`} />
                  </div>
                  <ul>
                    <div className={`flex items-center px-2 sticky top-0 bg-white/20 backdrop-blur-sm  ${openDropdown ? "block" : "hidden"}`}>
                      <AiOutlineSearch size={18} className="text-gray-700" />
                      <input
                        type="text"
                        value={inputStateValue}
                        onChange={(e) => setInputStateValue(e.target.value.toLowerCase())}
                        placeholder="Enter State "
                        className="placeholder:text-gray-700 p-2 outline-none bg-transparent"
                      />
                    </div>
                    <div className={`overflow-y-auto ${openDropdown ? "max-h-60" : "max-h-0"} `}>
                      {UsStates?.map((country) => (
                        <li
                          key={country?.name}
                          className={`p-2 pl-6 text-sm bg-white/20 backdrop-blur-sm hover:bg-[#6e30a7] hover:text-white ${country?.name?.toLowerCase() === selectedState?.toLowerCase() &&
                            "bg-[#6e30a7] "} ${country?.name?.toLowerCase().startsWith(inputStateValue)
                              ? "block"
                              : "hidden"
                            }`}
                          onClick={() => {
                            if (country?.name?.toLowerCase() !== selectedState.toLowerCase()) {
                              setSelectedState(country?.name);
                              setDropdown(false);
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
                <div className="flex items-center justify-center">
                  <button className="mt-6 bg-top vsm:px-4 vsm:py-1 lg:py-1 rounded-md md:text-base lg:text-base  xl:text-lg text-black font-semibold bg-cover " style={{ backgroundImage: `url(${bgImage})` }}>
                    Save Details
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserDataModal;