import bgImage from "../assets/login_BG.jpeg";
import { Link } from "react-router-dom";

const LoginButton = (props) => {
    return (
        <Link to="/signin" className="">
            <button style={{ backgroundImage: `url(${bgImage})` }}
                className="whitespace-nowrap px-6 py-2.5 rounded-full text-lg font-medium text-black bg-no-repeat bg-cover bg-center">
                {props.Text}
            </button>
        </Link>
    );
};

export default LoginButton;