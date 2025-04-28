import { Component } from '@angular/core';
import { Question } from '../models/question';
import { Variant } from '../models/variant';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {

  options: Variant[] = [
    { id: 1, questionId: undefined, text: 'hello', isTrue: true, isSelected: true },
    { id: 2, questionId: undefined, text: 'hello1', isTrue: true, isSelected: false },
    { id: 3, questionId: undefined, text: 'hello2', isTrue: true, isSelected: false }
  ];

  question:Question = {
    id:undefined,
    question:'Здесь будет вопрос',
    group:'',
    type:"checkbox",
    createTime:new Date(),
    variants:this.options,
    textarea:''
  }

  constructor(private route: ActivatedRoute, private mainService:MainService){}
  ngOnInit() {
      this.route.paramMap.pipe(
          switchMap(params => params.getAll("id"))
      )
      .subscribe(data=> {
        const que = this.mainService.getQuestions(+data).at(0);
        if(que)
        this.question = que;
      });
    }

  nextQuestion(){
    console.log(this.question);
  }

}
