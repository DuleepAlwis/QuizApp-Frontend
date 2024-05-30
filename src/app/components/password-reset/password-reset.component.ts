import { Component, OnInit } from '@angular/core';
import { GlobalPropsService } from 'src/app/services/global-props.service';
import {DOCUMENT} from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  app_name="";
  app_icon="";
  app_sub_name="";
  email = "";
  code = "";
  codeSend = false;

  constructor(@Inject(DOCUMENT) private _document:Document,private globalPropsService:GlobalPropsService) { }

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

  sendCode(){
    if(this.codeSend==false){
      this.codeSend = true;
    }
    else {
      this.codeSend = false;
    }
  }

}
