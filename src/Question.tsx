import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initialStateType } from "./types";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";

import { nextQuestion } from "./reducer";

const Question = () => {
  const dispatch = useDispatch();
  const { question, correct } = useSelector(
    ({ questions, question, correct }: initialStateType) => ({
      question: questions[question],
      correct,
    })
  );

  const [value, setValue] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isWrong, setIsWrong] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isRightAnser = question.Ans.includes(event.target.value);
    setIsCorrect(isRightAnser);
    setIsWrong(!isRightAnser);
    setValue(event.target.value);
  };

  const handleClick = () => {
    const correctAnswer = question.Ans.includes(value) ? correct + 1 : correct;
    dispatch(nextQuestion(correctAnswer));
  };

  useEffect(() => {
    setValue("");
    setIsCorrect(false);
    setIsWrong(false);
  }, [question]);

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{question.question}</FormLabel>
      <RadioGroup aria-label="answers" value={value} onChange={handleChange}>
        <FormControlLabel
          disabled={!!value}
          value="A"
          control={<Radio />}
          label={question.A}
        />
        <FormControlLabel
          disabled={!!value}
          value="B"
          control={<Radio />}
          label={question.B}
        />
        <FormControlLabel
          disabled={!!value}
          value="C"
          control={<Radio />}
          label={question.C}
        />
        <FormControlLabel
          disabled={!!value}
          value="D"
          control={<Radio />}
          label={question.D}
        />
      </RadioGroup>
      {isCorrect && (
        <Alert className="successAlert" variant="outlined" severity="success">
          You got it right!
        </Alert>
      )}
      {isWrong && (
        <Alert className="successAlert" variant="outlined" severity="error">
          Sorry, that is wrong!
        </Alert>
      )}
      <Grid item xs={12}>
        <Button
          disabled={!value}
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          Next Question
        </Button>
      </Grid>
    </FormControl>
  );
};

export default Question;
