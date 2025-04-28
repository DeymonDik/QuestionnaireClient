import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClientService } from "../services/http-client.service";
import { MainService } from "../services/main.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  enabled: boolean = false;

  constructor(
    private router: Router,
    private mainService: MainService,
  ) {
    this.mainService.getQuestions(undefined).subscribe();
  }

  goStart() {
    this.router.navigate(["answerer"]);
    this.enabled = true;
  }

}
