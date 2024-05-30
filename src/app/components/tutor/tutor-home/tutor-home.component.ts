import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/entity/Role';
import { ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { ClassroomServiceService } from 'src/app/services/classroom/classroom-service.service';
import { AuthStorageService } from 'src/app/services/auth-storage.service';
import { ClassRoomDTO } from 'src/app/entity/ClassRoomDTO';

@Component({
  selector: 'app-tutor-home',
  templateUrl: './tutor-home.component.html',
  styleUrls: ['./tutor-home.component.scss']
})
export class TutorHomeComponent implements OnInit {

  // classArr = [1,2,3,4,5,6,7,8,9,1,2,3];
  classArr:ClassRoomDTO[] = [];
  number_of_btn = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,91,2,3,4,5,6,7,8,9];
  type: string | null | undefined;  /*1 for classes 2 for quizzes*/
  role = Role.tutor;

  constructor(@Inject(DOCUMENT) private _document:Document,private _Activatedroute:ActivatedRoute,private classroomServiceService:ClassroomServiceService,private authStorage:AuthStorageService) { }

  ngOnInit(): void {

    this._document.body.classList.add('tutorbg-color');
    this._Activatedroute.paramMap.subscribe(params => { 
      
      // this.type =  params.get('entity_name')=="classroom"?"classroom":params.get('entity_name'); 
      this.type =  params.get('entity_name'); 
    });
    this.getAllClassRoomsByUser();
  }

  getAllClassRoomsByUser(){
    this.classroomServiceService.getUsingUserId(this.authStorage.getToken().userId,this.role).subscribe(res=>{
      if(res){
       this.classArr = res;
        
      }
    })
  }

}
