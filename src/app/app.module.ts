import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';

 import {MatInputModule } from '@angular/material/input';
 import {MatButtonModule} from '@angular/material/button';
 import { MatAutocompleteModule} from '@angular/material/autocomplete';
 import { MatCheckboxModule} from '@angular/material/checkbox';
 import { MatDatepickerModule} from '@angular/material/datepicker';
 import { MatRadioModule} from '@angular/material/radio';
 import { MatSelectModule} from '@angular/material/select';
 import { MatSliderModule} from '@angular/material/slider';
 import {MatIconModule} from '@angular/material/icon';
 import {MatListModule} from '@angular/material/list';
 import {MatCardModule} from '@angular/material/card';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { AuthenticationService } from './services/authentication.service';
import { GlobalPropsService } from './services/global-props.service';
import { StudentHomeComponent } from './components/student/student-home/student-home.component';
import { TutorHomeComponent } from './components/tutor/tutor-home/tutor-home.component';
import { TokenInterceptor } from './auth/token.interceptor';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthStorageService } from './services/auth-storage.service';
import { ListQuizClassComponent } from './components/student/list-quiz-class/list-quiz-class.component';
import { StudentNavComponent } from './components/student/student-nav/student-nav.component';
import { StudentClassroomComponent } from './components/student/student-classroom/student-classroom.component';
import { QuizPopOverComponent } from './components/student/quiz-pop-over/quiz-pop-over.component';
import { TutorNavComponent } from './components/tutor/tutor-nav/tutor-nav.component';
import { QuizClassComponent } from './components/tutor/quiz-class/quiz-class.component';
import { CreateClassComponent } from './components/tutor/create-class/create-class.component';
import { CreateQuizComponent } from './components/tutor/create-quiz/create-quiz.component';
import { QuizQuiestionsListComponent } from './components/tutor/quiz-quiestions-list/quiz-quiestions-list.component';
import { QuestionsComponent } from './components/tutor/questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateUserComponent,
    PasswordResetComponent,
    StudentHomeComponent,
    TutorHomeComponent,
    ListQuizClassComponent,
    StudentNavComponent,
    StudentClassroomComponent,
    QuizPopOverComponent,
    TutorNavComponent,
    QuizClassComponent,
    CreateClassComponent,
    CreateQuizComponent,
    QuizQuiestionsListComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule, 
    MatButtonModule, 
    MatCheckboxModule,
     MatDatepickerModule,
      MatFormFieldModule, 
      MatInputModule,
       MatRadioModule,
        MatSelectModule, 
        MatSliderModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatIconModule
     
  ],
  providers: [AuthenticationService,GlobalPropsService,AuthGuardService,AuthStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
