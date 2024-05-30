import { AnswerDTO } from './AnswerDTO';
import { QuizDTO } from './QuizDTO';
import { TutorDTO } from './TutorDTO';

export class QuestionDTO{

      id:number  = 0;
	  text:string = "";
	  weight:number = 0 ;
	  display_order:number = 0;
	  label:string  = "";
	answerList:AnswerDTO[] | undefined;
	  correctAnswer:AnswerDTO | undefined;
	  tutor:TutorDTO | undefined;
	  quizList:QuizDTO[] | undefined;
}