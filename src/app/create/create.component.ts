import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  question:string = "Здесь будет вопрос";
  items:number[] = [1];

  click(){
    this.items.push(this.items.length+1);
  }

  delete(item:number){
    this.items.splice(item-1,1);
  }

}
