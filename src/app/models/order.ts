import { Answer } from "./answer";

export interface Order{
    id:number|undefined;
    answers:Answer[];
}