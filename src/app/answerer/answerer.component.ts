import { Component } from '@angular/core';
import { Answerer } from '../models/answerer';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../services/main.service';
import { Question } from "../models/question";
import { HttpClientService } from '../services/http-client.service';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-answerer',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './answerer.component.html',
  styleUrl: './answerer.component.css'
})
export class AnswererComponent {
  public firstQuestion: Question;

  constructor(
    private router: Router,
    private mainService: MainService,
    private httpClientService: HttpClientService
  ) {
    this.firstQuestion = this.mainService.questions[0];
  }

  public answerer: Answerer = this.mainService.getAnswerer();

  onSubmit() {
    this.mainService.questionCounter = 0;
    this.httpClientService.postAnswerer(this.answerer).subscribe(
      (data)=>{
          this.mainService.answerer = data as Answerer;
          this.answerer = data as Answerer;
          console.log(this.answerer);
      },
      (error)=>{
        console.log(error);
      }
    )
    this.router.navigate(["start", this.firstQuestion.id]);
  }
}
