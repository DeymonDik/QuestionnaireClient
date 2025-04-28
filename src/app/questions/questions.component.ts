import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question';
import { Router } from '@angular/router';
import { MainService } from '../services/main.service';
import { HttpClientService } from "../services/http-client.service";
import { switchMap, tap } from "rxjs";

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent implements OnInit {
  constructor(
    private router: Router,
    private mainService: MainService,
    private httpService: HttpClientService,
  ) {
  };

  public questions: Question[] = [];

  ngOnInit() {
    this.questions = this.mainService.questions;
    this.mainService.getQuestions(undefined).subscribe((questions => {
      this.questions = questions;
    }));
  }

  public change(question: Question) {
    if (!question.id) return;

    this.router.navigate([`create/${question.id}`], {state: {question}});
  }

  public delete(question: Question) {
    if (!question.id) return;

    this.httpService.deleteData(question.id)
      .pipe(
        switchMap(() => {
          return this.mainService.getQuestions(undefined).pipe(
            tap(questions => {
              this.questions = questions;
            })
          );
        })
      ).subscribe()
  }

}
