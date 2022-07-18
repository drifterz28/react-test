import React from "react";
import { ReactComponent as Logo } from "./IndeedLogo.svg";
import "./App.css";
import Container from "@material-ui/core/Container";
import Question from "./Question";
import Score from "./Score";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Container maxWidth="md">
          <Score />
          <Question />
        </Container>
      </header>
    </div>
  );
}
