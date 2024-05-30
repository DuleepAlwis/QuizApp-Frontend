import { QuizDTO } from './QuizDTO';
import { StudentDTO } from './StudentDTO';
import { TutorDTO } from './TutorDTO';

export class ClassRoomDTO {

  id: number = 0;
  name: string = "";
  description: string = "";
  create_date: string = "";
  quizList: QuizDTO[] = [];
  studentList: StudentDTO[] = [];
  tutor: TutorDTO = new TutorDTO;
  score: number = 0;
  joined_date: string = "";
}