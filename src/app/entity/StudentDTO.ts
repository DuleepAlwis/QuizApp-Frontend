import { ClassRoomDTO } from './ClassRoomDTO';
import { QuizDTO } from './QuizDTO';

export class StudentDTO{

      id:number | undefined;
	  name:string | undefined;
	  pro_pic:string | undefined;
	classRooms:ClassRoomDTO[] | undefined;
	 quizzes:QuizDTO[] | undefined;
	  attempt:number | undefined;
	  result:number | undefined;
	  grade:string | undefined;
	
}