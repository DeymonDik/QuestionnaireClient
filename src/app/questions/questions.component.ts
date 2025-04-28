import { Component } from '@angular/core';
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
export class QuestionsComponent {
  constructor(private router: Router, private mainService:MainService){};

  questionsis:Question[]=[];

  ngOnInit(){
    console.log("ВОтвот")
    this.questionsis = this.mainService.getQuestions(undefined);
    console.log("sfdsfsdga");
    console.log(this.questionsis);
  }

  getStart(nuber:number|undefined){
    this.router.navigate([`start/${nuber}`]);
  }

}
