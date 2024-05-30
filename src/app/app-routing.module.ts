import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { HomeComponent } from './components/home/home.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { StudentHomeComponent } from './components/student/student-home/student-home.component';
import { CreateClassComponent } from './components/tutor/create-class/create-class.component';
import { QuestionsComponent } from './components/tutor/questions/questions.component';
import { TutorHomeComponent } from './components/tutor/tutor-home/tutor-home.component';
import {AuthGuardService as AuthGuard} from './services/auth-guard.service';
import { AuthenticationService } from './services/authentication.service';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'create_account',
    component:CreateUserComponent
  },
  {
    path:'reset_password',
    component:PasswordResetComponent
  },
  {
    path:'student_home',
    component:StudentHomeComponent,
    canActivate: [AuthGuard] 
  },
  {
    path:'tutor_home/:entity_name',
    component:TutorHomeComponent,
    canActivate: [AuthGuard] 
  },
  {
    path:'create-class/:classId',
    component:CreateClassComponent,
    canActivate: [AuthGuard] 
  },
  {
    path:'tutor_questions',
    component:QuestionsComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
