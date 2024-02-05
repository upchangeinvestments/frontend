import bgImage from "../assets/login_BG.jpeg";
import { Link } from "react-router-dom";

const LoginButton = (props) => {
    return (
        <Link to="/signin" className="">
            <button style={{ backgroundImage: `url(${bgImage})` }}
                className="whitespace-nowrap md:px-4 md:py-1.5 lg:px-6 lg:py-2.5 rounded-full md:text-base lg:text-lg font-medium text-black bg-no-repeat bg-cover bg-center">
                {props.Text}
            </button>
        </Link>
    );
};

export default LoginButton;