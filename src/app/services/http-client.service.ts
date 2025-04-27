import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../models/question';
import { Answer } from '../models/answer';
import { Answerer } from '../models/answerer';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  
  domainServer:string = "http://localhost:8080";

  constructor(private http: HttpClient){ }
  
  getData(){
      const url = `${this.domainServer}/question/list`;
      return this.http.get(url); 
  }

  postData(question:Question){
    const url = `${this.domainServer}/question/create`;
    return this.http.post(url, question); 
  }

  putData(question:Question){
    if(!question.id)return;
    const url = `${this.domainServer}/question/change`;
    const params = new HttpParams().set("id", question.id);
    return this.http.put(url, question, {params}); 
  }

  deleteData(id: number){
    const url = `${this.domainServer}/question/delete`;
    const params = new HttpParams().set("id", id);
    return this.http.delete(url, {params}); 
  }

  postAnswer(answer:Answer){
    const url = `${this.domainServer}/answer/create`;
    return this.http.post(url, answer); 
  }

  getAnswerers(){
    const url = `${this.domainServer}/answerer/list`;
    return this.http.get(url);
  }

  postAnswerer(answerer:Answerer){
    const url = `${this.domainServer}/answerer/create`;
    return this.http.post(url, answerer);
  }

  getOrder(){
    const url = `${this.domainServer}/order/list`;
    return this.http.get(url);
  }

}
