import React, { useState } from "react";
import "../../styles/LandingPage/Questions.css";
import video from "../../assets/introVideo.mp4";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../utils/AuthContext";
import SuccessToast from "../../utils/successToast";
import Error from "../../utils/Error";

const quizData = [
  {
    question: "Q. What is your Investment Goal?",
    a: "SHORT-TERM",
    b: "MID-TERM",
    c: "LONG-TERM",
    d: "NOT SURE",
  },
  {
    question: "Q. How much would you like to invest?",
    a: "$100-$5,000",
    b: "$5,000-$50,000",
    c: "$50,000-$100,000",
    d: "$100,000-$1M+",
  },
  {
    question: "Q. Which sector would you like to invest in?",
    a: "RESIDENTIAL",
    b: "COMMERCIAL",
    c: "WAREHOUSE",
    d: "NOT SURE",
  },
];

const Questions = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const navigate = useNavigate();
  const { backendUrl, isAuth, user } = useAuth();

  const QuizHandler = async (event) => {
    event.preventDefault();

    try {
      const responses = selectedAnswer.map((option) => ({
        question: quizData[selectedAnswer.indexOf(option)].question,
        selectedOption: option,
        selectedText: quizData[selectedAnswer.indexOf(option)][option],
      }));


      if (isAuth) {
        const res = await axios.post(`${backendUrl}/updatequiz`, { responses, user });
        if (res.status === 200) {
          SuccessToast("Responses saved successfully!");
        }
      } else {

        const userData = { email, name, responses };
        const existUser = await axios.get(`${backendUrl}/auth/getUserByEmail?email=${email}`);

        if (existUser.data.message === true) {
          const res = await axios.post(`${backendUrl}/updatequiz`, { responses, user: { email, name } });
          if (res.status === 200) {
            SuccessToast("Responses saved successfully!");
            navigate("/signin?isLogin=true", { state: { userData: userData } });
          }
        } else {
          const res = await axios.post(`${backendUrl}/landingPage/quiz`, { userData });
          if (res.status === 200)
            SuccessToast("Responses saved successfully!");
          navigate("/signin?isLogin=false", { state: { userData: userData } });
        }
      }
    }
    catch (error) {
      // console.log("error: ", error)
      var message;
      if (error.response) {
        const code = error.response.data.message.substring(0, 6);
        if (code === 'E11000') {
          message = "Welcome back! Please Sign up to get your results.";
        } else {
          message = "Responses not saved, an error occurred. Please try later!"
        }
      } else {
        message = "Responses not saved, an error occurred. Please try later!"
      }
      Error(message);
    }
  };

  const loadQuiz = () => {
    const currentQuizData = quizData[currentQuiz];

    return (
      <div className="quiz-container  px-4 py-2 flex flex-col items-center justify-center vsm:w-full lg:text-xl">
        <p className="text-left px-4 font-['Playfair-Display'] md:w-[100%] flex justify-center">
          {currentQuizData.question}
        </p>
        <ul className="vsm:w-[90%] md:w-[65%]">
          {['a', 'b', 'c', 'd'].map((option) => (
            <li key={option}>
              <input
                type="radio"
                name="answer"
                id={option}
                className="answer text-center"
                onClick={() => {
                  setSelectedAnswer([...selectedAnswer, option]);
                  setCurrentQuiz(currentQuiz + 1);
                }}
              />
              <label
                className="text-center border-[1px] font-['Playfair-Display'] border-[#9747FF]"
                htmlFor={option}
                id={option + "_text"}
              >
                {currentQuizData[option]}
              </label>
            </li>
          ))}
          <div
            className={currentQuiz > 0 ? "flex justify-center" : "hidden"}
            onClick={() => {
              setSelectedAnswer(selectedAnswer.slice(0, -1)); // Remove the last selected answer
              setCurrentQuiz(currentQuiz - 1);
            }}
          >
            <p className="ml-4 font-['Playfair-Display']">PREVIOUS</p>
          </div>
        </ul>

      </div>
    );
  };

  return (
    <div
      className="bg-white/20 backdrop-blur-sm rounded-lg flex flex-col justify-center items-center shadow-lg hover:shadow-xl py-2 my-6 vsm:mx-6 vsm:-mt-4 lg:mx-24 sm:-mt-4 lg:-mt-2"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="my-4 lg:mb-8 vsm:text-2xl md:text-3xl YesevaFont uppercase">
        LET US <span className="text-purple-600">KNOW YOU</span> BETTER
      </div>
      <div className="flex vsm:flex-col lg:flex-row w-full mx-16 lg:items-center lg:justify-center">
        <div className="vsm:w-full vsm:px-6 vsm:mb-6 lg:w-6/12 flex items-center vsm:justify-center lg:justify-end px-4 xl:w-[40%]">
          <video
            className="rounded-xl lg:-mr-4 w-[90%]"
            src={video}
            autoPlay
            playsInline
            controls
            loop
            muted
          ></video>
        </div>
        <div className="vsm:w-full vsm:px-6  lg:w-6/12 flex items-center justify-center lg:-mt-8">
          {currentQuiz < quizData.length ? (
            loadQuiz()
          ) : (
            <div className="w-full font-['Playfair-Display'] vsm:pb-6">
              <form
                className="flex flex-col justify-center items-center w-ful gap-8"
                onSubmit={QuizHandler}
              >
                <p className="text-2xl">Get your results!</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-b-2 w-[65%] p-2 text-[#6e30a7] focus:border-transparent focus:outline-none border-b-[#6e30a7] focus:border-b-[#6e30a7] input-quiz"
                  type="email"
                  placeholder="Email"
                  required
                />
                <input
                  onChange={(e) => setName(e.target.value)}
                  className="bg-transparent border-b-2 w-[65%] p-2 text-[#6e30a7] focus:border-transparent focus:outline-none border-b-[#6e30a7] focus:border-b-[#6e30a7] input-quiz"
                  type="text"
                  placeholder="Name"
                  required
                />

                <div className="whitespace-nowrap inline-flex items-center justify-center vsm:px-4 vsm:py-1 lg:px-6 lg:py-1.5 border border-transparent rounded-full shadow-sm vsm:text-base lg:text-base xl:text-lg font-medium text-white bg-[#6e30a7] hover:bg-[#8e47ec] bg-gradient-to-r from-purple-500 to-purple-700">
                  <button>SUBMIT</button>
                </div>
                {currentQuiz > 0 && (
                  <div
                    className="flex justify-center mt-4"
                    onClick={() => setCurrentQuiz(quizData.length - 1)}
                  >
                    <p className="ml-4 font-['Playfair-Display']">PREVIOUS</p>
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Questions;
