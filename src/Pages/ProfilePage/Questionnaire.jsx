import React, { useState } from "react";
import "../../styles/LandingPage/Questions.css";
import SuccessToast from "../../utils/successToast";
import axios from "axios";
import { useAuth } from "../../utils/AuthContext";

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
  const [selectedAnswer, setSelectedAnswer] = useState(Array(quizData.length).fill(null)); // Initialize with null values for each question
  const [buttonClicked, setButtonClicked] = useState(false); // Track if the button has been clicked
  const { user, backendUrl } = useAuth();

  // Check if all questions have been answered
  const allQuestionsAnswered = selectedAnswer.every(answer => answer !== null);

  const QuizHandler = async () => {
    const responses = selectedAnswer.map((option, index) => ({
      question: quizData[index].question,
      selectedOption: option,
      selectedText: quizData[index][option],
    }));
    const res = await axios.post(`${backendUrl}/updatequiz`, { responses, user });
    if (res.status === 200) {
      setCurrentQuiz(0);
      SuccessToast("Questionnaire updated.");
      setButtonClicked(false); // Reset button click state after successful update
    } else {
      Error("Something went wrong, please try again later.");
    }
  };

  const handleOptionSelect = (option) => {
    const newSelectedAnswer = [...selectedAnswer];
    newSelectedAnswer[currentQuiz] = option;
    setSelectedAnswer(newSelectedAnswer);
    if (currentQuiz < quizData.length - 1) {
      setCurrentQuiz(currentQuiz + 1);
    }
  };

  const handlePreviousClick = () => {
    setSelectedAnswer(selectedAnswer.slice(0, -1)); // Remove the last selected answer
    setCurrentQuiz(currentQuiz - 1);
  };

  const loadQuiz = () => {
    const currentQuizData = quizData[currentQuiz];
    const quizLength = quizData.length;

    return (
      <div className="quiz-container px-4 py-2 flex flex-col items-center justify-center vsm:w-full lg:text-xl">
        <p className="text-left px-4 md:w-[100%] font-['Playfair-Display'] flex justify-center">
          {currentQuizData.question}
        </p>
        <ul className="vsm:w-[90%] font-['Playfair-Display'] md:w-[65%]">
          {['a', 'b', 'c', 'd'].map((option) => (
            <li key={option}>
              <input
                type="radio"
                name="answer"
                id={option}
                className="answer text-center"
                onClick={() => handleOptionSelect(option)}
              />
              <label
                className="text-center border-[1px] font-['Playfair-Display'] border-[#6e30a7]"
                htmlFor={option}
                id={option + "_text"}
              >
                {currentQuizData[option]}
              </label>
            </li>
          ))}
          <div
            className={currentQuiz > 0 ? "flex justify-center" : "hidden"}
            onClick={handlePreviousClick}
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
        <button onClick={QuizHandler} className={`bg-${allQuestionsAnswered && !buttonClicked ? "[#6e30a7]" : "gray"} ${!allQuestionsAnswered || buttonClicked ? "bg-purple-400" : ""} font-['Playfair-Display'] text-white font-bold vsm:py-[3px] vsm:px-[5px] md:py-[5px] md:px-[5px] lg:py-2 lg:px-4 rounded`} disabled={!allQuestionsAnswered || buttonClicked}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Questionnaire;





