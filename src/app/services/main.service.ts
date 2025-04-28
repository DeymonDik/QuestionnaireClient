import { EventEmitter, Injectable } from '@angular/core';
import { Answerer } from '../models/answerer';
import { HttpClientService } from './http-client.service';
import { Question } from '../models/question';
import { map, Observable, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  public questionCounter = 0;

  constructor(private httpClientService: HttpClientService) {
  }

  public questions: Question[] = [];

  answerer: Answerer = {
    id: undefined,
    name: '',
    group: undefined,
    age: undefined,
    additional: undefined,
    createTime: new Date()
  };

  ngOnInit() {
  }

  public getAnswerer() {
    return this.answerer;
  }

  public getQuestions(num: number | undefined): Observable<Question[]> {
    return this.httpClientService.getData().pipe(
      map(questions => {
        if (num) {
          return questions.filter(o => o.id === num);
        } else {
          return questions;
        }
      }),
      tap((data: any | null) => {
          if (data !== null)
            this.questions = data;
        }
      ),
    )
  }

  public nextQuestion() {
    return this.questions[this.questionCounter++];
  }

  // private clickCnt:number = 0;
  // onClick:EventEmitter<number> = new EventEmitter();

  // public doClick(){
  //   this.clickCnt++;
  //   this.onClick.emit(this.clickCnt);
  // }

}
