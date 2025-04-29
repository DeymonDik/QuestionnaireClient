import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MainService } from "../services/main.service";
import { tap } from 'rxjs';
import { Question } from '../models/question';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  enabled: boolean = false;
  start = '';
  public firstQuestion!: Question;

  constructor(
    private router: Router,
    private mainService: MainService,
  ) {
    this.mainService.getQuestions(undefined)
    .pipe(
      tap(() => {
        this.firstQuestion = this.mainService.questions[0];
        this.start = `/start/${this.firstQuestion.id}`
      })
    )
    .subscribe();
  }

  goStart() {
    this.router.navigate(["answerer"]);
    this.enabled = true;
  }

}
