import { Component, Input, OnInit } from '@angular/core';
import { ClassRoomDTO } from 'src/app/entity/ClassRoomDTO';
import { AuthStorageService } from 'src/app/services/auth-storage.service';
import { ClassroomServiceService } from 'src/app/services/classroom/classroom-service.service';
import { QuizServiceService } from 'src/app/services/quiz/quiz-service.service';

@Component({
  selector: 'app-list-quiz-class',
  templateUrl: './list-quiz-class.component.html',
  styleUrls: ['./list-quiz-class.component.scss']
})
export class ListQuizClassComponent implements OnInit {

  @Input() entity_name:string = "AAA";
  @Input() entity_id:number = 1;
  // classRoomArr = [1,2,3];
  classRoomArr:ClassRoomDTO[] = [];
  @Input() role!:number;
  @Input() type!:number; 

  constructor(private classroomServiceService:ClassroomServiceService,private quizService:QuizServiceService,private authStorage:AuthStorageService) { }

  ngOnInit(): void {
  }

  

  getQuizzes(){
    
  }
  

}
