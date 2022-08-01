import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initialStateType } from "./types";

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

  const handleChange = (event: any) => {
    console.log(event.target.value);
    const isRightAnser = question.Ans.includes(event.target.value);
    setIsCorrect(isRightAnser);
    setIsWrong(!isRightAnser);
    setValue(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const correctAnswer = question.Ans.includes(value) ? correct + 1 : correct;
    dispatch(nextQuestion(correctAnswer));
    event.target.reset();
  };

  useEffect(() => {
    setValue("");
    setIsCorrect(false);
    setIsWrong(false);
  }, [question]);

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>{question.question}</legend>
        <label>
          <input
            disabled={!!value}
            value="A"
            type="radio"
            name="answers"
            onClick={handleChange}
          />
          {question.A}
        </label>
        <label>
          <input
            disabled={!!value}
            value="B"
            type="radio"
            name="answers"
            onClick={handleChange}
          />
          {question.B}
        </label>
        <label>
          <input
            disabled={!!value}
            value="C"
            type="radio"
            name="answers"
            onClick={handleChange}
          />
          {question.C}
        </label>
        <label>
          <input
            disabled={!!value}
            value="D"
            type="radio"
            name="answers"
            onClick={handleChange}
          />
          {question.D}
        </label>
      </fieldset>
      {isCorrect && <div className="alert success">You got it right!</div>}
      {isWrong && <div className="alert error">Sorry, that is wrong!</div>}
      <div className="item">
        <button disabled={!value} className="nextButton">
          Next Question
        </button>
      </div>
    </form>
  );
};

export default Question;
