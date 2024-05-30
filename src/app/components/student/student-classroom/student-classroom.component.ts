import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthStorageService } from 'src/app/services/auth-storage.service';
import { ClassroomServiceService } from 'src/app/services/classroom/classroom-service.service';
import { QuizServiceService } from 'src/app/services/quiz/quiz-service.service';

@Component({
  selector: 'app-student-classroom',
  templateUrl: './student-classroom.component.html',
  styleUrls: ['./student-classroom.component.scss']
})
export class StudentClassroomComponent implements OnInit {

  classRoomArr:string[] = ["AAAaaaaaaa","BBBaaaaaaaa","CCCaaaaaaaaaaa","CCCaaaaaaaaaaa","CCCaaaaaaaaaaa","CCCaaaaaaaaaaa","CCCaaaaaaaaaaa","CCCaaaaaaaaaaa","CCCaaaaaaaaaaa"]; 
  
  constructor(@Inject(DOCUMENT) private _document:Document) { }

  ngOnInit(): void {

    this._document.body.classList.add('studentbg-color');

  }

 
  

}
