import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Global } from '../entity/Global';
import { Token } from '../entity/Token';
import { UserDTO } from '../entity/UserDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  
  private url = Global.base_url+"/api/user";

  constructor(private http:HttpClient) { }

  login(email:string,password:string):Observable<Token>{

    return this.http.get<Token>(this.url+"/login"+"?email="+email+"&password="+password);
  }

  signup(user:UserDTO):Observable<Token>{

    return this.http.post<Token>(this.url,user);
  }

  resetPassword(email:string){
    return this.http.get<string>(this.url+"/update/otp?email="+email);
  }

  logOut(token:string){
    return this.http.get<string>(this.url+"/logout");
  }
}
