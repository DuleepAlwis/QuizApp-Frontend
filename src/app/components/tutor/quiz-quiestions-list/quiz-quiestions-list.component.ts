import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { QuestionDTO } from 'src/app/entity/QuestionDTO';
import { QuizDTO } from 'src/app/entity/QuizDTO';
import { AuthStorageService } from 'src/app/services/auth-storage.service';
import { ClassroomServiceService } from 'src/app/services/classroom/classroom-service.service';
import { QuizServiceService } from 'src/app/services/quiz/quiz-service.service';

@Component({
  selector: 'app-quiz-quiestions-list',
  templateUrl: './quiz-quiestions-list.component.html',
  styleUrls: ['./quiz-quiestions-list.component.scss']
})
export class QuizQuiestionsListComponent implements OnInit {

  @Input() entity_name:string | undefined;

    quizList: QuizDTO[] = [{name:"qqqaaaaaaaaaaaaaa",number_of_question:11,time:'',description:'',result:0,grade:'',attempt:0,classRooms:null,questionList:null,studentList:null,id:0},
    {name:"qqq",number_of_question:11,time:'',description:'',result:0,grade:'',attempt:0,classRooms:null,questionList:null,studentList:null,id:0},
    {name:"qqq",number_of_question:11,time:'',description:'',result:0,grade:'',attempt:0,classRooms:null,questionList:null,studentList:null,id:0},
    {name:"qqq",number_of_question:11,time:'',description:'',result:0,grade:'',attempt:0,classRooms:null,questionList:null,studentList:null,id:0},
    {name:"qqq",number_of_question:11,time:'',description:'',result:0,grade:'',attempt:0,classRooms:null,questionList:null,studentList:null,id:0},
    {name:"qqq",number_of_question:11,time:'',description:'',result:0,grade:'',attempt:0,classRooms:null,questionList:null,studentList:null,id:0},
    {name:"qqq",number_of_question:11,time:'',description:'',result:0,grade:'',attempt:0,classRooms:null,questionList:null,studentList:null,id:0},
    {name:"qqq",number_of_question:11,time:'',description:'',result:0,grade:'',attempt:0,classRooms:null,questionList:null,studentList:null,id:0},
    {name:"qqq",number_of_question:11,time:'',description:'',result:0,grade:'',attempt:0,classRooms:null,questionList:null,studentList:null,id:0},
    {name:"qqq",number_of_question:11,time:'',description:'',result:0,grade:'',attempt:0,classRooms:null,questionList:null,studentList:null,id:0}
  
  ];
  // quizList: QuizDTO[] = [];
  questionList:QuestionDTO[] = [];
  
  constructor(@Inject(DOCUMENT) private _document:Document) { }

  ngOnInit(): void {

    this._document.body.classList.add('tutorbg-color');

  }

}
