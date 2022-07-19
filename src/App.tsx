import React from "react";
import { useSelector } from "react-redux";
import { initialStateType } from "./types";
import "./App.css";
import Container from "@material-ui/core/Container";
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
      <header className="App-header">
        <Container maxWidth="md">
          {question < total ? (
            <>
              <Score />
              <Question />
            </>
          ) : (
            <FinalScore />
          )}
        </Container>
      </header>
    </div>
  );
}
