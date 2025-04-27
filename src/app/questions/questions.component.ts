import { Component } from '@angular/core';
import { Question } from '../models/question';
import { HttpClientService } from '../services/http-client.service';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent {
  constructor(private httpClientService:HttpClientService){};

  questionsis:Question[]=[];

  ngOnInit(){
    this.httpClientService.getData().subscribe({
      next:(data:any|null) => {
        if(data!==null)
        this.questionsis.unshift(data);
        console.log(this.questionsis);
      },
      error: error => {console.log(error);}
    })
  }

  getDa(){
    this.questionsis.forEach(o=>{console.log(o.id)});
  }

}
