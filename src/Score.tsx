import React from "react";
import { useSelector } from "react-redux";

import { initialStateType } from "./types";

const Score = () => {
  const { score, total, question } = useSelector((state: initialStateType) => ({
    score: state.correct,
    total: state.total,
    question: state.question,
  }));

  return (
    <div className="container score">
      <div className="item">
        <h5>
          Question {question + 1} of {total}
        </h5>
      </div>
      <div className="item">
        <h5>
          Score: {score !== 0 ? `${((score / question) * 100).toFixed()}%` : 0}
        </h5>
      </div>
    </div>
  );
};

export default Score;
