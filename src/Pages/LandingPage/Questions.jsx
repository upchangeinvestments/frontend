import React, { useState } from 'react';
import '../../styles/Questions.css';
import video from "../../assets/introVideo.mp4"

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
    question: "Which secor would you like to invest in?",
    a: "RESIDENTIAL",
    b: "COMMERCICAL",
    c: "HOTEL",
    d: "MEDICAL & SCHOOL",
  }
];

const Questions = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  // const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const loadQuiz = () => {
    const currentQuizData = quizData[currentQuiz];

    return (
      <div className="quiz-container px-4 py-2 flex flex-col vsm:w-full md:w-[75%] lg:text-xl">
        <h2 className='text-left px-4'>{currentQuizData.question}</h2>
        <ul className=''>
          <li>
            <input
              type="radio"
              name="answer"
              id="a"
              className="answer text-center"
              onChange={() => setSelectedAnswer('a')}
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
              onChange={() => setSelectedAnswer('b')}
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
              onChange={() => setSelectedAnswer('c')}
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
              onChange={() => setSelectedAnswer('d')}
            />
            <label className="text-center" htmlFor="d" id="d_text">
              {currentQuizData.d}
            </label>
          </li>
        </ul>
        <button
          id="submit"
          onClick={() => {
            if (selectedAnswer) {
              setCurrentQuiz(currentQuiz + 1);
              setSelectedAnswer('');
            }
          }}
        >
          Next <i className="fa-solid fa-chevron-right"></i>
        </button>
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
      <div className="my-4 text-2xl lg:text-3xl lg:mb-8">
        {/* headline */}
        LET US KNOW YOU BETTER
      </div>
      <div className="flex vsm:flex-col lg:flex-row w-full mx-16 lg:items-center lg:justify-center">
        <div className="vsm:w-full vsm:px-6 vsm:mb-6 lg:w-6/12 flex items-center justify-center px-4 xl:w-[40%]">
          <video className="rounded-xl" src={video} autoPlay controls loop></video>
          {/* illustration */}
        </div>
        <div className="vsm:w-full vsm:px-6  lg:w-6/12 flex items-center justify-center">
          {currentQuiz < quizData.length ? (
            loadQuiz()
          ) : (
            // <h2>You answered {score}/{quizData.length} questions correctly</h2>
            "render login details"
          )}
        </div>
      </div>
    </div>
  );
};

export default Questions;