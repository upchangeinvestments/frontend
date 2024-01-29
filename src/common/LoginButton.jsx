import bgImage from "../assets/login_BG.jpeg" 

const LoginButton = (props) => {
    return (
        <a href="#" className="">
            <button style={{ backgroundImage: `url(${bgImage})`}}
            className="whitespace-nowrap px-6 py-2 rounded-full text-base font-medium text-black bg-no-repeat bg-cover bg-center text-black">
                {props.Text} 
            </button>
        </a>
    );
};

export default LoginButton;