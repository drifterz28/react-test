import React from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { initialStateType } from "./types";

const Score = () => {
  const { score, total, question } = useSelector((state: initialStateType) => ({
    score: state.correct,
    total: state.total,
    question: state.question,
  }));

  console.log({ score, question });

  return (
    <Grid container className="score">
      <Grid item xs={5}>
        Question {question + 1} of {total}
      </Grid>
      <Grid container item xs={5} md={2}>
        Score: {score !== 0 ? `${((score / question) * 100).toFixed()}%` : 0}
      </Grid>
    </Grid>
  );
};

export default Score;
