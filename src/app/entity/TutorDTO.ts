import { ClassRoomDTO } from './ClassRoomDTO';
import { QuestionDTO } from './QuestionDTO';

export class TutorDTO{

      id:number | undefined;
	  name:string | undefined;
	  pro_pic:string | undefined;
	 classRooms:ClassRoomDTO[] | undefined;
	questions:QuestionDTO[] | undefined;
}