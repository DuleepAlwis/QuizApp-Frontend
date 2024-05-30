import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from '../entity/Token';

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService {

   token!: Token;

  constructor() { }

  getToken():Token{
    
    var localStorageToken = localStorage.getItem("token");
    if(localStorageToken!=null){
      return JSON.parse(localStorageToken);
    }

    return this.token;
  }

  setToken(token:Token){
    this.token = token;
    localStorage.setItem("token",JSON.stringify(token));
    
  }

  tokenExist(){
    this.token = this.getToken();
    if(this.token!=null && (this.token.token!="" || this.token.token!=null)){
      return true;
    }
    return false;
  }

  removeToken(){
    localStorage.clear();
  }
}
