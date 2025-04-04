import bgImage from "../assets/login_BG.jpeg";
import { Link } from "react-router-dom";

const LoginButton = (props) => {

    return (
        <Link to={props.disable ? '#' : props.link} target={props.target ? props.target : ""} className={`${props.disable ? 'cursor-not-allowed opacity-50' : ''}`}>
            <button style={{ backgroundImage: `url(${bgImage})` }} className={`bg-top whitespace-nowrap vsm:px-4 vsm:py-1 lg:px-6 lg:py-1.5 rounded-full md:text-base lg:text-base xl:text-lg text-black font-bold bg-no-repeat bg-cover ${props.classname === undefined ? '' : props.classname}`}>
                {props.Text}
            </button>
        </Link >
    );
};

export default LoginButton;