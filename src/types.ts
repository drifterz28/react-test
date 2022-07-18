export type questionTypes = {
  question: string;
  A: string;
  B: string;
  C: string;
  D: string;
  Ans: string[];
};

export type initialStateType = {
  questions: Array<questionTypes>;
  question: number;
  total: number;
  correct: number;
};
