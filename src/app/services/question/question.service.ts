import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Global } from 'src/app/entity/Global';
import { QuestionDTO } from 'src/app/entity/QuestionDTO';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private url:string = Global.base_url+"/api/question";

  constructor(private http:HttpClient) { }


  save(question:QuestionDTO,newQuestion:boolean):Observable<Boolean>{
    if(newQuestion==true){
      return this.http.post<Boolean>(this.url,question);

    }
    else{
      return this.update(question);

    }
  }

  update(question:QuestionDTO):Observable<Boolean>{
    return this.http.put<Boolean>(this.url+"/update",question);
  }

  getAllQuestions(tutorId:number):Observable<QuestionDTO[]>{
    return this.http.get<QuestionDTO[]>(this.url+"/getAll/"+tutorId);
  }

  remove(qid:number):Observable<Boolean>{
    return this.http.delete<Boolean>(this.url+"/remove/"+qid);
  }
}
