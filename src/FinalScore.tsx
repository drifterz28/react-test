import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { initialStateType } from "./types";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
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
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <img
          src="/congratulations.jpeg"
          alt="congratulations image"
          height={200}
        />
      </Grid>
      <Grid item>
        <Typography variant="h3" align="center" gutterBottom>
          You’re a Trivia master!
        </Typography>
      </Grid>
      <Grid item>
        <Typography align="center" gutterBottom>
          You got {correct} out of {total} questions right!
        </Typography>
      </Grid>
      {highScore.date && (
        <Grid item>
          <Typography align="center" gutterBottom>
            Your best score so far was {highScore.correct} out of{" "}
            {highScore.total} questions which you got on {highScore.date}.
          </Typography>
        </Grid>
      )}
      <Grid item>
        <Button
          className="playAgain"
          variant="contained"
          color="primary"
          size="large"
          onClick={handleClick}
        >
          Play Again
        </Button>
      </Grid>
    </Grid>
  );
};

export default FinalScore;
