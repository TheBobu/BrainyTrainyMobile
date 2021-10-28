import { useState } from "react";
import "./Quiz.css";
const Quiz: React.FC = () => {
  const questions = [
    {
      questionText: "Care este culoarea preferata a Andreei",
      answerOptions: [
        { answerText: "Black", isCorrect: false },
        { answerText: "Yellow", isCorrect: false },
        { answerText: "Purple", isCorrect: true },
        { answerText: "Orange", isCorrect: false },
      ],
    },
    {
      questionText: "Who is president of US?",
      answerOptions: [
        { answerText: "Biden", isCorrect: true },
        { answerText: "Elon Musk", isCorrect: false },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Trump", isCorrect: false },
      ],
    },
    {
      questionText: "The react was created by which company?",
      answerOptions: [
        { answerText: "Facebook", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect: any) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="scoreSection">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="questionSection  textWhite">
            <div className="questionCount   textRight textWhite">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="questionText textWhite textCenter">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answerSection textWhite textCenter">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
