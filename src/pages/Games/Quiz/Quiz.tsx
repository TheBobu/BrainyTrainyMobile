import { IonCard, IonCardContent } from "@ionic/react";
import { useState } from "react";
import "./Quiz.css";
const Quiz: React.FC = () => {
  const questions = [
    {
      questionText: "Unde locuiesti?",
      answerOptions: [
        { answerText: "Sibiu", isCorrect: false },
        { answerText: "Iasi", isCorrect: false },
        { answerText: "Cluj", isCorrect: true },
        { answerText: "China", isCorrect: false },
      ],
    },
    {
      questionText: "Care este numele copilului tau?",
      answerOptions: [
        { answerText: "Alin", isCorrect: true },
        { answerText: "Matias", isCorrect: false },
        { answerText: "Robert", isCorrect: false },
        { answerText: "Daniel", isCorrect: false },
      ],
    },
    {
      questionText: "Cati ani ai?",
      answerOptions: [
        { answerText: "65", isCorrect: true },
        { answerText: "43", isCorrect: false },
        { answerText: "78", isCorrect: false },
        { answerText: "74", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const rightAnswers = questions.map((question, key) => {
    return (
      <span key={key} className="text-center text-white">
        {key + 1} :{" "}
        {question.answerOptions.find((item) => item.isCorrect)?.answerText}
      </span>
    );
  });
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
        <>
          <IonCard>
            <IonCardContent>
              <div className="scoreSection text-center">
                You scored {score} out of {questions.length}
              </div>
              <div className="rightAnswers">{rightAnswers}</div>
              {console.log(rightAnswers)}
            </IonCardContent>
          </IonCard>
        </>
      ) : (
        <>
          <div className="questionSection  text-white">
            <div className="questionCount  text-right text-white">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="questionText textWhite textCenter">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answerSection text-white text-center">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, key) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                  key={key}
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
