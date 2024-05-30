import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassRoomDTO } from 'src/app/entity/ClassRoomDTO';
import { Role } from 'src/app/entity/Role';
import { AuthStorageService } from 'src/app/services/auth-storage.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ClassroomServiceService } from 'src/app/services/classroom/classroom-service.service';
import { QuizServiceService } from 'src/app/services/quiz/quiz-service.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent implements OnInit {

  //classArr = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,91,2,3,4,5,6,7,8,9];
  //classArr = [1,2,3,4,5,6,7,8,9,1,2,3];
  classArr:ClassRoomDTO[] = [];
  number_of_btn = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,91,2,3,4,5,6,7,8,9];
  // header_title = "Join a class room and try a quiz";
  type = 1;  /*1 for classes 2 for quizzes*/
  role = Role.student;

  constructor(
    @Inject(DOCUMENT) private _document:Document,private authStorage:AuthStorageService,private authentication:AuthenticationService,private route:Router,
    private classroomServiceService:ClassroomServiceService,private quizService:QuizServiceService
    ) { }

  ngOnInit(): void {

    this._document.body.classList.add('studentbg-color');
  }

  getAllClassRoomsByUser(){
    this.classroomServiceService.getUsingUserId(this.authStorage.getToken().userId,this.role).subscribe(res=>{
      if(res){
       
        console.log(res);
        this.classArr = res;

        
      }
    })
  }
 
}
