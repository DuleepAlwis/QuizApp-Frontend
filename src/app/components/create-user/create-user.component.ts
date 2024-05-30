import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDTO } from 'src/app/entity/UserDTO';
import { AuthStorageService } from 'src/app/services/auth-storage.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { GlobalPropsService } from 'src/app/services/global-props.service';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  register_form  = new FormGroup({
    name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required]),
    role:new FormControl('',[Validators.required])
  })

  app_name="";
  app_icon="";
  app_sub_name="";

  constructor(@Inject(DOCUMENT) private _document:Document,private authenticationService:AuthenticationService,private authStorage:AuthStorageService,private globalPropsService:GlobalPropsService,private render:Renderer2,private route:Router) { }

  ngOnInit(): void {
    this._document.body.classList.add('homebg-color');

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

  ngOnDestroy(): void {
    this._document.body.classList.remove('homebg-color');
    console.log("ngOnDestroy");

  }

  Signup(){

    var name = this.register_form.get("name");
    var email = this.register_form.get("email");
    var password = this.register_form.get("password");
    var role = this.register_form.get("role");

    if(!name?.valid){
      alert("User name is required");
    }
    else if(!email?.valid){
      alert("Email is required");
    }
    else if(!password?.valid){
      alert("Password required");
    }
    else if(!role?.valid){
      alert("Role is required");
    }
    else{
      var user:UserDTO = new UserDTO();
      user.name = name.value;
      user.email = email?.value;
      user.password = password?.value;
      user.role = role?.value;
      this.authenticationService.signup(user).subscribe(
        res=>{
          console.log(res);
          if(res){
            this.authStorage.setToken(res);
            if(res.role=="STUDENT"){
              this.route.navigate(['/student_home']);

            }
            else if(res.role=="TUTOR"){
              this.route.navigate(['/tutor_home',"classes"]);
            }
          }
          else{
            alert("Invalid credentials");
          }
      })
      
    }
  }
}
