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


function UserDataModal() {
  const { user, setUser, backendUrl, isAuth } = useAuth();
  const [isOpen, setOpen] = useState(isAuth && !user.updatedInfo);

  // const handleOpen = () => setOpen(!isOpen);
  const [valueDOB, onChangeDOB] = useState(new Date());

  const updateUserDataHandler = async (event) => {
    event.preventDefault();

    const location = event.target.location.value;
    const postData = {
      location: location,
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
        <div className="absolute inset-0 z-50 bg-white/20 backdrop-blur-sm flex items-center justify-center  text-white">
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
                <div className="mt-1">
                  <p variant="h6" color="blue-gray" className="">
                    Date of birth
                  </p>
                  <DatePicker onChange={onChangeDOB} required={true} value={valueDOB} name="" className="w-full text-black focus:outline-non " calendarIcon={<CiCalendar size="25px" />} />
                </div>
                <div className="mt-1">
                  <p variant="h6" color="blue-gray" className="">
                    State
                  </p>
                  <input
                    type="text"
                    name="location"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                    required
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button className="mt-6 bg-top vsm:px-4 vsm:py-1 lg:py-1 rounded-md md:text-base lg:text-base  xl:text-lg text-black  bg-cover " style={{ backgroundImage: `url(${bgImage})` }}>
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