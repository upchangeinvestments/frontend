import React, { useState } from 'react';
import '../../styles/Questions.css';
import video from "../../assets/introVideo.mp4"
import LoginButton from "../../common/LoginButton"

const quizData = [
  {
    question: "What is your Investment Goals?",
    a: "SHORT-TERM",
    b: "MID-TERM",
    c: "LONG-TERM",
    d: "NOT SURE",
  },
  {
    question: "How much would you like to invest?",
    a: "$100-$5,000",
    b: "$1,000-$5,000",
    c: "$5,000-$20,000",
    d: "$20,000-$100,000",
  },
  {
    question: "Which sector would you like to invest in?",
    a: "RESIDENTIAL",
    b: "COMMERCICAL",
    c: "HOTEL",
    d: "MEDICAL & SCHOOL",
  }
];


const Questions = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  // const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState([]);

  const UpdateQuestion = (value) => {
  }

  const loadQuiz = () => {
    const currentQuizData = quizData[currentQuiz];

    return (
      <div className="quiz-container px-4 py-2 flex flex-col vsm:w-full lg:text-xl">
        <p className='text-left px-4 md:w-[100%]'>{currentQuizData.question}</p>
        <ul className='md:w-[65%] ml-8'>
          <li>
            <input
              type="radio"
              name="answer"
              id="a"
              className="answer text-center"
              onClick={() => {
                setSelectedAnswer(...selectedAnswer, "a");
                setCurrentQuiz(currentQuiz + 1);
              }}
            />
            <label className="text-center" htmlFor="a" id="a_text">
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
                setSelectedAnswer(...selectedAnswer, "b");
                setCurrentQuiz(currentQuiz + 1);
              }}
            />
            <label className="text-center" htmlFor="b" id="b_text">
              {currentQuizData.b}
            </label>
          </li>
          <li>
            <input
              type="radio"
              name="answer"
              id="c"
              className="answer"
              onClick={() => {
                setSelectedAnswer(...selectedAnswer, "c");
                setCurrentQuiz(currentQuiz + 1);
              }}
            />
            <label className="text-center" htmlFor="c" id="c_text">
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
                setSelectedAnswer(...selectedAnswer, "d");
                setCurrentQuiz(currentQuiz + 1);
              }}
            />
            <label className="text-center" htmlFor="d" id="d_text">
              {currentQuizData.d}
            </label>
          </li>
          <div className={currentQuiz > 0 ? "flex justify-center" : "hidden"} onClick={() => {
            setCurrentQuiz(currentQuiz - 1);
          }}>
            <svg className="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="black" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" /></svg>
          </div>
        </ul>
      </div>
    );
  };

  return (
    <div
      className="bg-white/20 backdrop-blur-sm rounded-lg flex flex-col justify-center items-center shadow-lg hover:shadow-xl py-2 my-12 vsm:mx-6 lg:mx-24"
      style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))",
        backgroundBlendMode: "overlay",
      }}>
      <div className="my-4 lg:mb-8 vsm:text-2xl md:text-3xl font-bold" style={{ color: "#9747FF" }}>
        {/* headline */}
        LET US KNOW YOU BETTER
      </div>
      <div className="flex vsm:flex-col lg:flex-row w-full mx-16 lg:items-center lg:justify-center">
        <div className="vsm:w-full vsm:px-6 vsm:mb-6 lg:w-6/12 flex items-center vsm:justify-center lg:justify-end px-4 xl:w-[40%]">
          <video className="rounded-xl lg:-mr-4" src={video} autoPlay controls loop></video>
        </div>
        <div className="vsm:w-full vsm:px-6  lg:w-6/12 flex items-center justify-center lg:-mt-4">
          {currentQuiz < quizData.length ? (
            loadQuiz()
          ) : (
            // <h2>You answered {score}/{quizData.length} questions correctly</h2>
            <div className="">
              <LoginButton Text="Login" />
            </div>
          )}
        </div>
      </div>
    </div >
  );
};

export default Questions;