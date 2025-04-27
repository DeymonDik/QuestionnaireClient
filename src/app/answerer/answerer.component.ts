import { Component } from '@angular/core';
import { Answerer } from '../models/answerer';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-answerer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './answerer.component.html',
  styleUrl: './answerer.component.css'
})
export class AnswererComponent {
  
  constructor(private router: Router, private mainService: MainService){}

  answerer: Answerer = this.mainService.getAnswerer();

  onSubmit(){
    console.log(this.answerer);
    this.router.navigate(["start"]);
  }

}
