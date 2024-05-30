import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassRoomDTO } from 'src/app/entity/ClassRoomDTO';
import { QuizDTO } from 'src/app/entity/QuizDTO';
import { TutorDTO } from 'src/app/entity/TutorDTO';
import { AuthStorageService } from 'src/app/services/auth-storage.service';
import { ClassroomServiceService } from 'src/app/services/classroom/classroom-service.service';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.scss']
})
export class CreateClassComponent implements OnInit {

  classId:number = 0;
  className: string = "";
  description: string = "";
  score:number = 1;
  quizNumber: number = 0;
  newClass = true;
  entity_name: string = "Quizzes";
  classRoomDTO: ClassRoomDTO = new ClassRoomDTO();
  tutorDTO: TutorDTO = new TutorDTO();
  //   quizList: QuizDTO[] = [{name:"qqq",number_of_question:11,time:'',description:'',result:0,grade:'',attempt:0,classRooms:null,questionList:null,studentList:null,id:0},
  //   {name:"qqq",number_of_question:11,time:'',description:'',result:0,grade:'',attempt:0,classRooms:null,questionList:null,studentList:null,id:0},
  //   {name:"qqq",number_of_question:11,time:'',description:'',result:0,grade:'',attempt:0,classRooms:null,questionList:null,studentList:null,id:0},
  //   {name:"qqq",number_of_question:11,time:'',description:'',result:0,grade:'',attempt:0,classRooms:null,questionList:null,studentList:null,id:0},
  //   {name:"qqq",number_of_question:11,time:'',description:'',result:0,grade:'',attempt:0,classRooms:null,questionList:null,studentList:null,id:0},
  //   {name:"qqq",number_of_question:11,time:'',description:'',result:0,grade:'',attempt:0,classRooms:null,questionList:null,studentList:null,id:0},
  //   {name:"qqq",number_of_question:11,time:'',description:'',result:0,grade:'',attempt:0,classRooms:null,questionList:null,studentList:null,id:0},
  //   {name:"qqq",number_of_question:11,time:'',description:'',result:0,grade:'',attempt:0,classRooms:null,questionList:null,studentList:null,id:0},
  //   {name:"qqq",number_of_question:11,time:'',description:'',result:0,grade:'',attempt:0,classRooms:null,questionList:null,studentList:null,id:0},
  //   {name:"qqq",number_of_question:11,time:'',description:'',result:0,grade:'',attempt:0,classRooms:null,questionList:null,studentList:null,id:0}

  // ];
  quizList: QuizDTO[] = [];

  constructor(private classRoomService: ClassroomServiceService, private authStorage: AuthStorageService,private _Activatedroute:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(param=>{
       let classId:any = param.get("classId");
      
      if(classId!="newClass"){
        this.getClassDetails(classId);
      }
    })
  }

  save(class_form: NgForm) {


    this.className = class_form.control.get("className")?.value;
    this.description = class_form.control.get("description")?.value;
    this.quizNumber = class_form.control.get("quizNumber")?.value;
    
    if (class_form.valid) {
      this.classRoomDTO.id = this.classId;
      this.classRoomDTO.name = this.className;
      this.classRoomDTO.description = this.description;
      this.classRoomDTO.quizList = this.quizList;
      this.tutorDTO.id = this.authStorage.getToken().userId;
      this.classRoomDTO.tutor = this.tutorDTO;
      this.classRoomDTO.score = this.score;

      this.classRoomService.saveClass(this.classRoomDTO,this.newClass).subscribe(
        res => {

          if (res != null) {
            if (res == true) {
              alert("Class Saved Success");
              class_form.reset();
            }
            else {
              alert("Class Saved UnSuccess");
              class_form.reset();
            }
          }
          else {
            alert("Class Saved UnSuccess");
            class_form.reset();
          }

        });
    }
    else {
      alert("Class information invalid");
    }

    // if(this.className?.length>0){
    //   if(this.description.length>0){
    //     this.classRoomDTO.name = this.className;
    //     this.classRoomDTO.description = this.description;
    //     this.classRoomDTO.quizList = this.quizList;
    //     if(this.classRoomService.saveClass(this.classRoomDTO)){
    //       alert("Class Saved Success");
    //     }
    //     else{
    //       alert("Class Saved UnSuccess");
    //     }
    //   }
    //   else{
    //     alert("Class description can't be empty");
    //   }
    // }
    // else{
    //   alert("Class name can't be empty");
    // }
  }

  getClassDetails(classId:string){
   

    this.classRoomService.getClassDetails(classId).subscribe(
      res=>{
        if(res!=null){
          this.className = res.name;
          this.classId = res.id;
          this.description = res.description;
          this.score = res.score;
          this.newClass = false;
          this.classRoomDTO.create_date = res.create_date;
        }
        else{
          this.route.navigate(["/tutor_home","classes"]);
        }
      }
    )
  }

  reset(form: NgForm) {
    form.reset();
  }

}
