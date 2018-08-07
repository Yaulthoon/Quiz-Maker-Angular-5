import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  import { AppRoutingModule } from './app-routing.module';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { AppComponent } from './app.component';
  import { MakeCssComponent } from './make-css/make-css.component';
  import { MakeCss2Component } from './make-css2/make-css2.component';
  import { InitialComponent } from './initial/initial.component';
 import { QuestionairreComponent } from './questionairre/questionairre.component';
  import { ReviewQuestionsComponent } from './review-questions/review-questions.component';
  import { ColorChangerService } from './color-changer.service';
  import { QuestionCompilerService } from './question-compiler.service';
import { QuizScorerService } from './quiz-scorer.service';
  import { AboutComponent } from './about/about.component';
  import { PrintQuizComponent } from './print-quiz/print-quiz.component';


  
  
  @NgModule({
	declarations: [
	AppComponent,
	MakeCssComponent,
	MakeCss2Component,
	InitialComponent,
	QuestionairreComponent,
	ReviewQuestionsComponent,
	AboutComponent,
	PrintQuizComponent
	],
    imports: [
      BrowserModule,
      AppRoutingModule,
	BrowserAnimationsModule,
	FormsModule
    ],
  providers: [ColorChangerService, QuestionCompilerService, QuizScorerService],
    bootstrap: [AppComponent]
  })
  export class AppModule { }