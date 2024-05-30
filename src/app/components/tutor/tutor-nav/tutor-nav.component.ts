import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStorageService } from 'src/app/services/auth-storage.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-tutor-nav',
  templateUrl: './tutor-nav.component.html',
  styleUrls: ['./tutor-nav.component.scss']
})
export class TutorNavComponent implements OnInit {

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
