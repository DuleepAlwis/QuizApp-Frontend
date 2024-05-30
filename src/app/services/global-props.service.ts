import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Global } from '../entity/Global';

@Injectable({
  providedIn: 'root'
})
export class GlobalPropsService {

  private url:string = Global.base_url+'/api/globalProps';
  
  constructor(private http:HttpClient) { }

  loadHomePageProps():Observable<string[]>{
    console.log("LOADa");
    return this.http.get<string[]>(this.url + "/homeProps",{responseType: 'json'});
  }
}
