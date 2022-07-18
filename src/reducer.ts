import { configureStore, createSlice } from "@reduxjs/toolkit";

import questions from "./quiz.json";
import { initialStateType } from "./types";

const initialState: initialStateType = {
  question: 0,
  correct: 0,
  total: questions.length,
  questions,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    nextQuestion: (state, action) => {
      state.question++;
      state.correct = action.payload;
    },
  },
});

export const { nextQuestion } = quizSlice.actions;

export default configureStore({
  reducer: quizSlice.reducer,
});
