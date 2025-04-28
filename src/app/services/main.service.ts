import { EventEmitter, Injectable } from '@angular/core';
import { Answerer } from '../models/answerer';
import { HttpClientService } from './http-client.service';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private httpClientService:HttpClientService){}

  questions:Question[] = [];

  answerer: Answerer = {
    id: undefined,
    name: '',
    group: undefined,
    age: undefined,
    additional: undefined,
    createTime: new Date()
  };

  ngOnInit(){
    this.httpClientService.getData().subscribe({
      next:(data:any|null) => {
        if(data!==null)
        this.questions = data;
      },
      error: error => {console.log(error);}
    })
  }

  public getAnswerer(){
    return this.answerer;
  }

  public getQuestions(num:number|undefined) {
    this.ngOnInit();
    console.log(this.questions);
    if(num){
    return this.questions.filter(o=>o.id === num);
    } else {
      return this.questions;
    }
  }

  // private clickCnt:number = 0;
  // onClick:EventEmitter<number> = new EventEmitter();

  // public doClick(){
  //   this.clickCnt++;
  //   this.onClick.emit(this.clickCnt);
  // }

}
