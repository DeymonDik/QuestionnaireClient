import { Variant } from "./variant";

export interface Question{
    id:number|undefined;
    type:string;
    question:string;
    variants:Variant[];
    group:string;
    createTime:Date;
    textarea:string|undefined;
}