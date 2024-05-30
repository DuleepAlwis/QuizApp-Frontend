import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassRoomDTO } from '../entity/ClassRoomDTO';
import { Global } from '../entity/Global';
import { Role } from '../entity/Role';

@Injectable({
  providedIn: 'root'
})
export class ClassroomServiceService {

  private url = Global.base_url+"/api/classroom";
  private httpOptions = {
    http_header:""
  }

  constructor(private http:HttpClient) { }


  saveClass(classRoom:ClassRoomDTO,newClass:boolean):Observable<boolean>{
    if(newClass){
      return this.http.post<boolean>(this.url,classRoom);

    }
    else{
      return this.updateClass(classRoom);
    }

  }

  updateClass(classRoom:ClassRoomDTO):Observable<boolean>{
    return this.http.put<boolean>(this.url+"/update",classRoom);

  }

  removeClass(id:number):Observable<boolean>{
    return this.http.delete<boolean>(this.url+"/remove/"+id);
  }

  getAll():Observable<ClassRoomDTO[]>{
    return this.http.get<ClassRoomDTO[]>(this.url+"/getAll");
  }

  getUsingStudentId(id:string):Observable<ClassRoomDTO[]>{
    return this.http.get<ClassRoomDTO[]>(this.url+"/getByUserId/"+id+"/"+Role.student);
  }

  getUsingTutorId(id:string):Observable<ClassRoomDTO[]>{
    return this.http.get<ClassRoomDTO[]>(this.url+"/getByUserId/"+"/"+Role.tutor);
  }

 

  getUsingUserId(userid:number,role:number):Observable<ClassRoomDTO[]>{
    return this.http.get<ClassRoomDTO[]>(this.url+"/getByUserId/"+userid+"/"+role);
  }

  getClassDetails(classId:string):Observable<ClassRoomDTO>{
    return this.http.get<ClassRoomDTO>(this.url+"/getByID/"+classId);
  }
}
