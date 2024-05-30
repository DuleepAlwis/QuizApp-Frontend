import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnswerDTO } from 'src/app/entity/AnswerDTO';
import { Global } from 'src/app/entity/Global';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  private url = Global.base_url+"/api/answer";

  private httpOptions = {
    http_header:""
  }
  
  constructor(private http:HttpClient) { }


  getAnswersByQuestion(questionId:number):Observable<AnswerDTO[]>{

    return this.http.get<AnswerDTO[]>(this.url + "/getAnswerByQuestion/" + questionId);
  }

  removeAnswer(id:number){

    return this.http.delete<Boolean>(this.url+"/remove/"+id);
  }
}
