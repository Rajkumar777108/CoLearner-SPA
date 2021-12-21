import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { CommonService } from './Services/common.service';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InterviewQuestionsComponent } from './interview-questions/interview-questions.component';
import { GetInterviewedComponent } from './get-interviewed/get-interviewed.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ColorHighlighterDirective } from './color-highlighter.directive';
import { OOPSComponent } from './oops/oops.component';
import { IsUserLoggedinGuard } from './is-user-loggedin.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes=[
      {path:'', redirectTo:'/home', pathMatch:'full'},
      {path:'home', component:HomeComponent},
      {path:'interviewquestions', component:InterviewQuestionsComponent, canActivate:[IsUserLoggedinGuard],},
      {path:'getinterviwed', component:GetInterviewedComponent},
      {path:'oops', component:OOPSComponent},  
      {path:'login', component:LoginComponent},   
      {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  declarations: [	
    AppComponent,
    TestComponentComponent,
    MenuComponent,
    HomeComponent,
    InterviewQuestionsComponent,
    GetInterviewedComponent,
    PageNotFoundComponent,
    ColorHighlighterDirective,
    OOPSComponent,
    LoginComponent
   ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [IsUserLoggedinGuard,CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
