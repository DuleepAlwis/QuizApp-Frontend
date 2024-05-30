import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStorageService } from 'src/app/services/auth-storage.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-student-nav',
  templateUrl: './student-nav.component.html',
  styleUrls: ['./student-nav.component.scss']
})
export class StudentNavComponent implements OnInit {

  constructor(private authStorage:AuthStorageService,private authentication:AuthenticationService,private route:Router) { }

  ngOnInit(): void {
  }

  logOut(){
    return this.authentication.logOut(this.authStorage.getToken().token).subscribe(
      res=>{
        this.authStorage.removeToken();
        this.route.navigate(['/quizapp']);
      }
    )
  }

}
