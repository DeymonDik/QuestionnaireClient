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

  public questions: Question[] = [
    {
      question: "Сосал?",
      variants: [
        {
          id: 1,
          questionId: 123,
          text: 'Да',
          isTrue: true,
        },
        {
          id: 2,
          questionId: 123,
          text: 'Конечно',
          isTrue: false,
        },
      ],
      type: 'radio',
      group: 'xdd',
      id: 228,
      createTime: new Date(),
    },
    {
      question: "Сосал?",
      variants: [
        {
          id: 1,
          questionId: 123,
          text: 'Да',
          isTrue: true,
        },
        {
          id: 2,
          questionId: 123,
          text: 'Да',
          isTrue: true,
        },
      ],
      type: 'radio',
      group: 'xdd',
      createTime: new Date(),
    },
    {
      question: "Сосал?",
      variants: [
        {
          id: 1,
          questionId: 123,
          text: 'Да',
          isTrue: true,
        },
        {
          id: 2,
          questionId: 123,
          text: 'Да',
          isTrue: true,
        },
      ],
      type: 'radio',
      group: 'xdd',
      createTime: new Date(),
    },
    {
      question: "Сосал?",
      variants: [
        {
          id: 1,
          questionId: 123,
          text: 'Да',
          isTrue: true,
        },
        {
          id: 2,
          questionId: 123,
          text: 'Да',
          isTrue: true,
        },
      ],
      type: 'radio',
      group: 'xdd',
      createTime: new Date(),
    },
    {
      question: "Сосал?",
      variants: [
        {
          id: 1,
          questionId: 123,
          text: 'Да',
          isTrue: true,
        },
        {
          id: 2,
          questionId: 123,
          text: 'Да',
          isTrue: true,
        },
      ],
      type: 'radio',
      group: 'xdd',
      createTime: new Date(),
    },
  ];

  ngOnInit() {
    this.questions = this.mainService.getQuestions(undefined);
  }

  public change(question: Question) {
    if (!question.id) return;

    console.log(question);
    this.router.navigate([`create/${question.id}`], {state: {question}});
  }

}
