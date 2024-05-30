import { ClassRoomDTO } from './ClassRoomDTO';
import { QuestionDTO } from './QuestionDTO';
import { StudentDTO } from './StudentDTO';

export class QuizDTO{

      id:number | undefined;
	  name:string | undefined;
	  time:string | undefined;
	  number_of_question:number | undefined;
	  description:string | undefined;
	  result:number | undefined;
	  grade:string | undefined;
	  attempt:number | undefined;
	classRooms:ClassRoomDTO[] | null | undefined;
	  questionList:QuestionDTO[] | null | undefined;
	 studentList:StudentDTO[] | null | undefined;
}