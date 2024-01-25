import logo from "../assets/logo.svg"

const NavBar = () => {
    return (
        <div className="flex items-center ">
            <div className="">
                <img src={logo} alt="" />
                <p>UPCIN</p>
            </div>
            <div className="">
                <ul>
                    <li className="text-[red]">Real Estate</li>
                    <li>About Us</li>
                    <li>Investments</li>
                    <li>Education</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="">
                <div className="signup">
                    <button>SIGN UP</button>
                </div>
                <div className="login">
                    <button>LOGIN</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;