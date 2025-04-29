import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question';
import { Variant } from '../models/variant';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MainService } from '../services/main.service';
import { HttpClientService } from "../services/http-client.service";
import { Answer } from '../models/answer';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent implements OnInit {

  options: Variant[] = [
    {id: 1, questionId: undefined, text: 'hello', isTrue: true, isSelected: true},
    {id: 2, questionId: undefined, text: 'hello1', isTrue: true, isSelected: false},
    {id: 3, questionId: undefined, text: 'hello2', isTrue: true, isSelected: false}
  ];

  question: Question = {
    id: undefined,
    question: 'Здесь будет вопрос',
    group: '',
    type: "checkbox",
    createTime: new Date(),
    variants: this.options,
    textarea: ''
  }

  constructor(
    private route: ActivatedRoute,
    private mainService: MainService,
    private httpService: HttpClientService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll("id"))
    )
      .subscribe(data => {
        let id = +data;
        const que = this.mainService.questions.find(q => q.id === id);
        if (que) {
          this.question = que;
        }
        console.log(this.question);
      });
  }

  nextQuestion() {
    const answerId = this.mainService.answerer.id;
    if(!answerId || !this.question.id)return;

    let answerString = undefined;
    let answers = undefined;
    if(this.question.type !== 'radio' && this.question.type !== 'checkbox'){
      answerString = this.question.textarea;
    } else {
      answers = this.question.variants.filter(o=>o.isSelected);
    }
    const answer: Answer = {
      id: undefined,
      questionId:  this.question.id,
      answererId: answerId,
      answers: answers,
      answer: answerString,
      createTime: new Date()
    }
    this.httpService.postAnswer(answer).subscribe();
    const nextId = this.mainService.nextQuestion()?.id
    console.log(nextId);
    
    if (nextId) {
      this.router.navigate(["start", nextId]);
    } else {
      this.router.navigate(['final']);
    }
  }
}
