import React from "react";
import { useSelector } from "react-redux";
import { initialStateType } from "./types";
import "./App.scss";
import Question from "./Question";
import Score from "./Score";
import FinalScore from "./FinalScore";

export default function App() {
  const { question, total } = useSelector((state: initialStateType) => ({
    question: state.question,
    total: state.total,
  }));

  return (
    <div className="App">
      <header className="AppHeader">
        <div className="quizContainer">
          {question < total ? (
            <>
              <Score />
              <Question />
            </>
          ) : (
            <FinalScore />
          )}
        </div>
      </header>
    </div>
  );
}
