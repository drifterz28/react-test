import { configureStore, createSlice } from "@reduxjs/toolkit";

import questions from "./quiz.json";
import { initialStateType } from "./types";

const initialState: initialStateType = {
  question: 0,
  correct: 0,
  total: questions.length,
  questions,
};

const setHeighScore = (state: initialStateType) => {
  const highScore = JSON.parse(localStorage.getItem("quiz") || "{}");

  if (!highScore?.correct || highScore?.correct < state.correct) {
    const finalScore = {
      correct: state.correct,
      total: state.total,
      date: new Date().toLocaleDateString(),
    }
    localStorage.setItem("quiz", JSON.stringify(finalScore));
  }
}

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {

    nextQuestion: (state, action) => {
      state.question++;
      state.correct = action.payload;
    },
    reset: (state) => {
      setHeighScore(state);
      return initialState
    }
  },
});

export const { nextQuestion, reset } = quizSlice.actions;

export default configureStore({
  reducer: quizSlice.reducer,
});
