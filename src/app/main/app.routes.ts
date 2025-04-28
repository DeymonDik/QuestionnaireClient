import { Routes } from '@angular/router';
import { StartComponent } from '../start/start.component';
import { CreateComponent } from '../create/create.component';
import { AnswererComponent } from '../answerer/answerer.component';
import { QuestionsComponent } from '../questions/questions.component';
import { CongratulationsComponent } from "../congratulations/congratulations.component";

export const routes: Routes = [
    { path: "start", component: StartComponent },
    { path: "start/:id", component: StartComponent },
    { path: "create", component: CreateComponent },
    { path: "create/:id", component: CreateComponent},
    { path: "answerer", component: AnswererComponent },
    { path: "questions", component: QuestionsComponent},
    { path: "final", component: CongratulationsComponent},
    { path: "**", redirectTo: "" }
];
