import { StudentDTO } from './StudentDTO';
import { TutorDTO } from './TutorDTO';

export class UserDTO{

      id!: number;
	  name!: string;
	  password!: string;
	  otp!: string;
	  email!: string;
	  role!: string;
	  lastLogging!: string;
	  tutor!: TutorDTO;
	  student!: StudentDTO;
}