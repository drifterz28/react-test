import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { initialStateType } from "./types";
import { reset } from "./reducer";

const FinalScore = () => {
  const dispatch = useDispatch();
  const { correct, total } = useSelector((state: initialStateType) => ({
    correct: state.correct,
    total: state.total,
  }));
  const highScore = JSON.parse(localStorage.getItem("quiz") || "{}");

  const handleClick = () => {
    dispatch(reset());
  };

  return (
    <div className="container flexColumn finalScore">
      <div className="item">
        {/* I was not able to get codersandbox to load an image. */}
        <img
          src="https://thumbs.dreamstime.com/b/illustration-calligraphic-inscription-congratulations-vector-element-design-illustration-calligraphic-inscription-149833255.jpg"
          alt="congratulations"
          height={200}
        />
      </div>
      <div className="item">
        <h3>You’re a Trivia master!</h3>
      </div>
      <p>
        You got {correct} out of {total} questions right!
      </p>
      {highScore.date && (
        <p>
          Your best score so far was {highScore.correct} out of{" "}
          {highScore.total} questions which you got on {highScore.date}.
        </p>
      )}
      <div className="item">
        <button className="playAgain" onClick={handleClick}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default FinalScore;
