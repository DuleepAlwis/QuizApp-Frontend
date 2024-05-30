import { Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthStorageService } from 'src/app/services/auth-storage.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { GlobalPropsService } from 'src/app/services/global-props.service';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class HomeComponent implements OnInit,OnDestroy {
 

   login_form = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  });

   app_name="";
   app_icon="";
   app_sub_name="";

  constructor(@Inject(DOCUMENT) private _document:Document,private authenticationService:AuthenticationService,private globalPropsService:GlobalPropsService,private authStorage:AuthStorageService,private route:Router) { 
    console.log("constructer");
  }
  
  ngOnDestroy(): void {
    this._document.body.classList.remove('homebg-color');
    console.log("ngOnDestroy");

  }

  ngOnInit(): void {

     this._document.body.classList.add('homebg-color');
    console.log("ngOnInit");

    this.globalPropsService.loadHomePageProps().subscribe(
      res=>{
        console.log(res);
        if(res!= null && res.length!=0){
          this.app_name = res[0];
          this.app_sub_name = res[1];
          this.app_icon = res[2];
        }
      }

      
    )
    console.log('aaa');
    
  }

  

  login(){

    var email = this.login_form.get("email");
    var password = this.login_form.get("password");

    if(!email?.valid){
      alert("Please enter email");
    }
    else if(!password?.valid){
      alert("Please enter password");
    }
    else{
      this.authenticationService.login(email.value,password.value).subscribe(
        res=> {
          console.log(res);
          if(res!=null){
            this.authStorage.setToken(res);
            if(res){
              this.authStorage.setToken(res);
              if(res.role=="STUDENT"){
                this.route.navigate(['/student_home']);
  
              }
              else if(res.role=="TUTOR"){
                this.route.navigate(['/tutor_home/classroom']);
              }
          }
          else{
            alert("Credentials are not valid");
          }
        }
      }
      )

    }
  }

}
