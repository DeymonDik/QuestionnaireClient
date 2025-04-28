import { Variant } from "./variant";

export interface Answer {
  id: number | undefined;
  questionId: number;
  answererId: number;
  answers: Variant[] | undefined;
  answer: string | undefined;
  createTime: Date;
}
