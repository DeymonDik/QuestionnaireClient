import { EventEmitter, Injectable } from '@angular/core';
import { Answerer } from '../models/answerer';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private httpClient:HttpClientService){}

  answerer: Answerer = {
    id: undefined,
    name: '',
    group: undefined,
    age: undefined,
    additional: undefined,
    createTime: new Date()
  };

  public getAnswerer(){
    return this.answerer;
  }

  public getQuestions(){
    return this.httpClient.getData().subscribe()
  }

  // private clickCnt:number = 0;
  // onClick:EventEmitter<number> = new EventEmitter();

  // public doClick(){
  //   this.clickCnt++;
  //   this.onClick.emit(this.clickCnt);
  // }

}
