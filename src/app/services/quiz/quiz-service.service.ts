import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { ClassRoomDTO } from '../../entity/ClassRoomDTO';
import { Global } from '../../entity/Global';
import { QuizDTO } from '../../entity/QuizDTO';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

  private url = Global.base_url+"/api/quizzes";


  constructor(private http:HttpClient) { }

  getQuizzesByClass(classId:number):Observable<QuizDTO>{

    return this.http.get<QuizDTO>(this.url+"/"+classId);

  }

}
