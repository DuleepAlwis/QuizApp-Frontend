import { QuestionDTO } from './QuestionDTO';

export class AnswerDTO{

      id:number = 0;
	  label:string = "0";
	  text:string = "";
	  question:QuestionDTO | undefined;
}