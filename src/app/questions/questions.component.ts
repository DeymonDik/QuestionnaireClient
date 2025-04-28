import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question';
import { Router } from '@angular/router';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent implements OnInit {
  constructor(private router: Router, private mainService: MainService) {
  };

  public questions: Question[] = [];

  ngOnInit() {
    this.mainService.getQuestions(undefined).subscribe((questions => {
      this.questions = questions;
    }));
  }

  public change(question: Question) {
    if (!question.id) return;

    this.router.navigate([`create/${question.id}`], {state: {question}});
  }

}
