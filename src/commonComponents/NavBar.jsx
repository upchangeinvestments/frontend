import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
// import logo from "../assets/logo.svg"
import bgImage from "../assets/login_BG.jpeg";
import logo from "../assets/blackLogo.png";
import { IoMdHelpCircle, IoIosHome } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

const profileMenuItems = [
  {
    label: "My Profile",
    icon: FaUserCircle,
    link: "/profile",
  },
  {
    label: "Investment",
    icon: IoIosHome,
    link: "/category",
  },
  {
    label: "Contact",
    icon: IoMdHelpCircle,
    link: "/contact",
  },
  {
    label: "Sign Out",
    icon: FaSignOutAlt,
    link: "#",
  },
];

function ProfileMenu({ HandleLogout, user }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          {user.image === undefined ? (
            <FaUserCircle
              variant="circular"
              size="sm"
              alt="user"
              className="border border-gray-900 p-0.5 rounded-full w-10 text-[#6e30a7]"
              src=""
            />
          ) : (
            <div>
              <img src={user.image} alt="user" className="rounded-full w-10" />
            </div>
          )}
          <RiArrowDropDownLine
            className={`h-5 w-5 transition-transform text-[#6e30a7] ${isMenuOpen ? "rotate-180" : ""
              }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-4 w-[200px] bg-white/50 backdrop-blur-xl border-none z-50">
        {profileMenuItems.map(({ label, icon, link }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className="flex items-center font-['Playfair-Display'] gap-3 my-1 rounded "
            >
              {React.createElement(icon, {
                className: `h-4 w-4  ${isLastItem ? "text-[#6e30a7]" : "text-[#6e30a7]"
                  }`,
                strokeWidth: 1,
              })}
              {isLastItem ? (
                <div onClick={HandleLogout}>
                  <Typography as="span" variant="lead" className="font-['Playfair-Display']">
                    {label}
                  </Typography>
                </div>
              ) : (
                <Link to={link}>
                  <Typography
                    as="span"
                    variant="lead"
                    className="font-normal"
                    color={isLastItem ? "[#6e30a7]" : "inherit"}
                  >
                    {label}
                  </Typography>
                </Link>
              )}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  const { isAuth, logout, user } = useAuth();

  const HandleLogout = () => {
    logout();
  };

  return (
    <>
      <div
        className={
          open
            ? "absolute w-full backdrop-blur-3xl bg-slate-50/10 z-40 h-[90vh] font-['Playfair-Display']"
            : "relative backdrop-blur-sm bg-slate-50/10 z-40 font-['Playfair-Display']"
        }
      >
        <div className="w-full mx-auto px-4 sm:px-6">
          <div className="flex justify-center items-center py-2">
            <div className="flex vsm:w-[100%] vsm:justify-between md:w-auto md:flex-none md:justify-start ">
              <div className="">
                <Link to="/">
                  <div className="flex flex-row items-center lg:gap-2 ">
                    <img
                      className="w-auto vsm:h-12 lg:h-16"
                      src={open ? "" : logo}
                      alt=""
                    />
                    {/* <p className='md:text-xl lg:text-3xl font-extrabold'>UPCIN</p> */}
                  </div>
                </Link>
              </div>
              <div className="md:hidden ">
                <button
                  type="button"
                  className="rounded-md p-2 inline-flex items-center justify-center text-gray-600 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setOpen(!open)}
                >
                  <span className="sr-only">Open menu</span>
                  {/* Heroicon name: outline/menu */}
                  <svg
                    className="h-10 w-10"
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
                </button>
              </div>
            </div>
            <div className="hidden md:flex md:justify-center font-['Playfair-Display']  md:items-center md:flex-auto md:gap-4 lg:gap-6 xl:gap-8 md:text-sm font-bold lg:text-xl">
              <Link
                to="/"
                className="font-medium text-black hover:text-gray-900 md:text-nowrap"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="font-medium text-black hover:text-gray-900 md:text-nowrap"
              >
                About
              </Link>
              <Link
                to="/rei-firms"
                className="font-medium text-black hover:text-gray-900 md:text-nowrap"
              >
                REI Firms
              </Link>
              <Link
                to="/roi-calculator"
                className="font-medium text-black hover:text-gray-900 md:text-nowrap"
              >
                ROI Calculator
              </Link>
              <Link
                to="/resources"
                className="font-medium text-black hover:text-gray-900 md:text-nowrap"
              >
                Resources
              </Link>
              <Link
                to="/contact"
                className="font-medium text-black hover:text-gray-900 md:text-nowrap"
              >
                Contact
              </Link>
            </div>
            {isAuth === true ? (
              <ProfileMenu HandleLogout={HandleLogout} user={user} />
            ) : (
              <div className="hidden md:flex md:justify-end items-center font-['Playfair-Display'] md:flex-none gap-x-4 font-semibold">
                <Link
                  to="/signin?isLogin=false"
                  className="whitespace-nowrap inline-flex items-center justify-center md:px-4 md:py-1 lg:px-6 lg:py-1.5 border border-transparent rounded-full shadow-sm md:text-base lg:text-base xl:text-lg text-white bg-[#6e30a7] hover:bg-[#8e47ec] "
                >
                  SIGN UP
                </Link>
                <Link to="/signin?isLogin=true" className="">
                  <button
                    style={{ backgroundImage: `url(${bgImage})` }}
                    className="bg-top whitespace-nowrap vsm:px-4 md:py-1 lg:px-6 lg:py-1.5 rounded-full md:text-base lg:text-base xl:text-lg text-black bg-no-repeat bg-cover"
                  >
                    LOGIN
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div
          className={
            open
              ? "opacity-100 scale-100 ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden bg-white/20 backdrop-blur-3xl"
              : "opacity-0 scale-0 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2  bg-white/10 backdrop-blur-sm">
            <div className="pt-2 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <Link to="/">
                    <span className="sr-only">Workflow</span>
                    <div className="flex flex-row items-center gap-2 ">
                      <img className="h-8 w-auto vsm:h-12" src={logo} alt="" />
                    </div>
                  </Link>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className="h-6 w-6"
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link
                    to="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/chart-bar */}
                    <IoIosHome className="h-6 w-6 text-[#6e30a7]" />
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Home
                    </span>
                  </Link>

                  <Link
                    to="/about"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/chart-bar */}
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-[#6e30a7]"
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
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      About
                    </span>
                  </Link>
                  <Link
                    to="/rei-firms"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/cursor-click */}
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-[#6e30a7]"
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
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      REI Firms
                    </span>
                  </Link>
                  <Link
                    to="/roi-calculator"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/shield-check */}
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-[#6e30a7]"
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      ROI Calculator
                    </span>
                  </Link>
                  <Link
                    to="/resources"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/view-grid */}
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-[#6e30a7]"
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
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Resources
                    </span>
                  </Link>
                  <Link
                    to="/contact"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-[#6e30a7]"
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
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Contact
                    </span>
                  </Link>
                </nav>
              </div>
            </div>
            <div className="py-6 font-['Playfair-Display'] px-5 space-y-6">
              {isAuth === false && (
                <div>
                  <Link
                    to="/signin?isLogin=false"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-xl font-medium text-white  bg-[#6e30a7] hover:bg-purple-600"
                  >
                    SIGN UP
                  </Link>
                  <p className="mt-6 text-center text-xl font-medium text-gray-500">
                    Existing User?
                    <Link
                      to="/signin?isLogin=true"
                      className="ml-2 text-[#6e30a7] hover:text-purple-600"
                    >
                      LOGIN
                    </Link>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
