import React, { useState } from "react";
import "../../styles/LandingPage/Questions.css";
import video from "../../assets/introVideo.mp4";
import { useNavigate } from "react-router-dom";

// import { select } from '@material-tailwind/react';

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
  // console.log(selectedAnswer);

  const QuizHandler = (event) => {
    event.preventDefault();
    const responses = selectedAnswer;
    // console.log("Submitted Data:", {  });
    const userData = { email, name, responses };
    navigate("/signin", { state: { isLogin: false, userData: userData } });
  };

  const loadQuiz = () => {
    const currentQuizData = quizData[currentQuiz];

    return (
      <div className="quiz-container  px-4 py-2 flex flex-col items-center justify-center vsm:w-full lg:text-xl">
        <p className="text-left px-4 font-['Playfair-Display'] md:w-[100%] flex justify-center">
          {currentQuizData.question}
        </p>
        <ul className="vsm:w-[90%] md:w-[65%]">
          <li>
            <input
              type="radio"
              name="answer"
              id="a"
              className="answer text-center"
              onClick={() => {
                setSelectedAnswer([...selectedAnswer, "a"]);
                setCurrentQuiz(currentQuiz + 1);
              }}
            />
            <label
              className="text-center border-[1px] font-['Playfair-Display'] border-[#9747FF]"
              htmlFor="a"
              id="a_text"
            >
              {currentQuizData.a}
            </label>
          </li>
          <li>
            <input
              type="radio"
              name="answer"
              id="b"
              className="answer"
              onClick={() => {
                setSelectedAnswer([...selectedAnswer, "b"]);
                setCurrentQuiz(currentQuiz + 1);
              }}
            />
            <label
              className="text-center border-[1px] font-['Playfair-Display'] border-[#9747FF]"
              htmlFor="b"
              id="b_text"
            >
              {currentQuizData.b}
            </label>
          </li>
          <li>
            <input
              type="radio"
              name="answer"
              id="c"
              className="answer border-[1px]"
              onClick={() => {
                setSelectedAnswer([...selectedAnswer, "c"]);
                setCurrentQuiz(currentQuiz + 1);
              }}
            />
            <label
              className="text-center border-[1px] font-['Playfair-Display'] border-[#9747FF]"
              htmlFor="c"
              id="c_text"
            >
              {currentQuizData.c}
            </label>
          </li>
          <li>
            <input
              type="radio"
              name="answer"
              id="d"
              className="answer"
              onClick={() => {
                setSelectedAnswer([...selectedAnswer, "d"]);
                setCurrentQuiz(currentQuiz + 1);
              }}
            />
            <label
              className="text-center border-[1px] font-['Playfair-Display'] border-[#9747FF]"
              htmlFor="d"
              id="d_text"
            >
              {currentQuizData.d}
            </label>
          </li>
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
      <div
        className="my-4 lg:mb-8 vsm:text-2xl md:text-3xl font-['Playfair-Display']"
        style={{ color: "#6e30a7" }}
      >
        {/* headline */}
        LET US KNOW YOU BETTER
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
