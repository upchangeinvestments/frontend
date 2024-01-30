import React, { useState } from 'react';
import '../../styles/Questions.css';

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
    a: "$100-#1,000",
    b: "$1,000-$5,000",
    c: "$5,000-$20,000",
    d: "$20,000-#100,000",
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
      <div className="quiz-container px-4 py-2 flex flex-col w-[75%] ">
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
      className="bg-white/20 backdrop-blur-sm rounded-lg flex flex-col justify-center items-center shadow-lg hover:shadow-xl py-2 my-12 mx-24"
      style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))",
        backgroundBlendMode: "overlay",
      }}>
      <div className="my-4 text-2xl">
        {/* headline */}
        Let us know you better
      </div>
      <div className="flex w-full mx-16">
        <div className="w-6/12 flex items-center justify-center">

          {/* illustration */}
        </div>
        <div className="w-6/12 flex items-center justify-center">
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