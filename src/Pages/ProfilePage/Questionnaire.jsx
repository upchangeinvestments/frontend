import React, { useState } from "react";
import "../../styles/LandingPage/Questions.css";
import SuccessToast from "../../utils/successToast";

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

const Questionnaire = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState([]);

  const QuizHandler = (event) => {
    event.preventDefault();
    const responses = selectedAnswer;
    console.log(responses);
    SuccessToast("Questionnaire updated");
  };

  const loadQuiz = () => {
    const currentQuizData = quizData[currentQuiz];
    const quizLength = quizData.length;

    return (
      <div className="quiz-container px-4 py-2 flex flex-col items-center justify-center vsm:w-full lg:text-xl">
        <p className="text-left px-4 md:w-[100%] flex justify-center">
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
                if (currentQuiz < quizLength - 1) {
                  setCurrentQuiz(currentQuiz + 1);
                }
              }}
            />
            <label
              className="text-center border-[1px] border-[#9747FF]"
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
                if (currentQuiz < quizLength - 1) {
                  setCurrentQuiz(currentQuiz + 1);
                }
              }}
            />
            <label
              className="text-center border-[1px] border-[#9747FF]"
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
                if (currentQuiz < quizLength - 1) {
                  setCurrentQuiz(currentQuiz + 1);
                }
              }}
            />
            <label
              className="text-center border-[1px] border-[#9747FF]"
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
                if (currentQuiz < quizLength - 1) {
                  setCurrentQuiz(currentQuiz + 1);
                }
              }}
            />
            <label
              className="text-center border-[1px] border-[#9747FF]"
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
            <p className="ml-4">PREVIOUS</p>
          </div>
        </ul>
      </div>
    );
  };

  return (
    <div className="bg-white/20 backdrop-blur-sm rounded-lg flex flex-col justify-center items-center py-2 shadow-lg hover:shadow-xl container mx-auto m-4 relative">
      <div className="flex vsm:flex-col lg:flex-row w-full mx-16 lg:items-center lg:justify-center">
        <div className="vsm:w-full vsm:px-6  lg:w-6/12 flex items-center justify-center m-4 mb-8 mx-auto">
          {loadQuiz()}
        </div>
      </div>
      <div className="vsm:mt-[300px] vsm:right-[15px] md:mt-[300px] md:right-[15px]  lg:mt-4 absolute lg:bottom-8 lg:right-8">
        <button
          onClick={QuizHandler}
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold vsm:py-[3px] vsm:px-[5px] md:py-[5px] md:px-[5px] lg:py-2 lg:px-4 rounded"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Questionnaire;
