import { EventEmitter, Injectable } from '@angular/core';
import { Answerer } from '../models/answerer';
import { HttpClientService } from './http-client.service';
import { Question } from '../models/question';
import { map, Observable, tap } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  public questionCounter = 0;

  constructor(
    private httpClientService: HttpClientService,
    private router: Router,
  ) {
  }

  public questions: Question[] = [
    {
      type: '',
      question: '',
      variants: [{
        id: undefined,
        questionId: undefined,
        text: '',
        isTrue: false
      }],
      group: '',
      id: 1337,
      createTime: new Date(),
    }
  ];

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

  public nextQuestion(): Question {
    return this.questions[++this.questionCounter];
  }
}
