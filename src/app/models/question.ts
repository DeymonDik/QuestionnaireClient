import { Variant } from "./variant";

export interface Question {
  type: string;
  question: string;
  variants: Variant[];
  group: string;
  createTime: Date;
  id?: number | undefined;
  textarea?: string | undefined;
}
