import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnswerDTO } from 'src/app/entity/AnswerDTO';
import { QuestionDTO } from 'src/app/entity/QuestionDTO';
import { QuizDTO } from 'src/app/entity/QuizDTO';
import { TutorDTO } from 'src/app/entity/TutorDTO';
import { AnswerService } from 'src/app/services/answer/answer.service';
import { AuthStorageService } from 'src/app/services/auth-storage.service';
import { QuestionService } from 'src/app/services/question/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  q_text:string = "";
  weight:number  = 0;
  quizList: QuizDTO[] = [];
  ansList:AnswerDTO[] = [];
  questionList:QuestionDTO[] = [];
  question:QuestionDTO = new QuestionDTO();
  c_answer:string |undefined  = "0";

  entity_name:string = "questions";

  newQuestion:boolean = true;

  constructor(@Inject(DOCUMENT) private _document:Document,private questionService:QuestionService,private answerService:AnswerService,private authStorage:AuthStorageService) { }

  ngOnInit(): void {

    this._document.body.classList.add('tutorbg-color');
    this.getAllQuestions(this.authStorage.getToken().userId);

  }

  save(form:NgForm){
   
    this.ansList.forEach(i=>{
      console.log(i.text);
    });
    console.log("ca "+this.c_answer);
    console.log("w "+this.weight);

    if(form.valid){

      
      this.q_text = form.control.get("q_text")?.value;
      this.c_answer = form.control.get("c_answer")?.value;
      this.weight = form.control.get("weight")?.value;

      this.question.text = this.q_text;
      let c_ans_dto = new AnswerDTO();
      c_ans_dto.label = this.c_answer+"";
      this.question.correctAnswer = c_ans_dto;
      this.question.answerList = this.ansList;
      this.question.weight = this.weight;

      let tutor = new TutorDTO();

      tutor.id = this.authStorage.getToken().userId;

      this.question.tutor = tutor;
      
     
      this.questionService.save(this.question,this.newQuestion).subscribe(
        res=>{
          if(res!=null && res==true){
            alert("Question Saved Success");
            this.getAllQuestions(this.authStorage.getToken().userId);
            this.reset(form);
          }
          else{
            alert("Question Saved UnSuccess");

          }
      })
    }
    else{
      alert("Please fill all the required fields");
    }
  

  }

  addAnswer(){

    let answer = new AnswerDTO();
    answer.text = "AAA";
    answer.label = (this.ansList.length+1)+"";
    
    this.ansList.push(answer);
  }

  getAllQuestions(tutorId:number){

    this.questionService.getAllQuestions(tutorId).subscribe(
      res=>{
        console.log(res);
        this.questionList = res;
      }
    );
  }

  selectQuestion(i:any){

   let  qt_sel:QuestionDTO = this.questionList[i];
   this.q_text = qt_sel.text;
   this.weight = qt_sel.weight;
   this.c_answer = qt_sel.correctAnswer?.label;

   this.answerService.getAnswersByQuestion(qt_sel.id).subscribe(
     res=>{
       this.ansList = res;
       this.newQuestion = false;
     }
   )

  }

  removeAnswer(index:any){

    if(this.newQuestion==false){
      this.answerService.removeAnswer(this.ansList[index].id).subscribe(
        res =>{
          if(res==true){
            alert("Answer removed Success");
          }
          else{
            alert("Answer removed UnSuccess");

          }
        }
      );
    }
    this.ansList.splice(index,1);

  }

  removeQuestion(index:any){

    this.questionService.remove(this.questionList[index].id).subscribe(
      res=>{
        if(res==true){
          alert("Question removed success");
          this.questionList.splice(index,1);
        }
        else{
          alert("Question remove unsuccess");
        }
      }
    )
  }

  reset(form:NgForm){
    this.ansList.length = 0;
    form.reset();
  }


}
