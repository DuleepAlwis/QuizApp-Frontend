import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-pop-over',
  templateUrl: './quiz-pop-over.component.html',
  styleUrls: ['./quiz-pop-over.component.scss']
})
export class QuizPopOverComponent implements OnInit {

  classRoomArr = [1,2,3];
  constructor() { }

  ngOnInit(): void {
  }

}
