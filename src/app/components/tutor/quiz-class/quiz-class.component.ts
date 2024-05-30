import { Component, Input, OnInit } from '@angular/core';
import { AuthStorageService } from 'src/app/services/auth-storage.service';
import { ClassroomServiceService } from 'src/app/services/classroom/classroom-service.service';
import { QuizServiceService } from 'src/app/services/quiz/quiz-service.service';

@Component({
  selector: 'app-quiz-class',
  templateUrl: './quiz-class.component.html',
  styleUrls: ['./quiz-class.component.scss']
})
export class QuizClassComponent implements OnInit {

  @Input() entity_name:string = "AAA";
  @Input() entity_id:number = 1;
  @Input() role!:number;
  @Input() type!:string | null | undefined; 
  @Input() score:number = 1;

  constructor(private classroomServiceService:ClassroomServiceService,private quizService:QuizServiceService,private authStorage:AuthStorageService) { }

  ngOnInit(): void {
  }

  

  

}
