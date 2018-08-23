import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  import { AppRoutingModule } from './app-routing.module';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { AppComponent } from './app.component';
  import { MakeCssComponent } from './components/make-css/make-css.component';
  import { MakeCss2Component } from './components/make-css2/make-css2.component';
  import { InitialComponent } from './components/initial/initial.component';
 import { QuestionairreComponent } from './components/questionairre/questionairre.component';
  import { ReviewQuestionsComponent } from './components/review-questions/review-questions.component';
  import { ColorChangerService } from './services/color-changer.service';
  import { QuestionCompilerService } from './services/question-compiler.service';
import { QuizScorerService } from './services/quiz-scorer.service';
  import { AboutComponent } from './components/about/about.component';
  import { PrintQuizComponent } from './components/print-quiz/print-quiz.component';
import { ColorComponent } from './components/make-css/subcomponents/color/color.component';
import { BackgroundComponent } from './components/make-css/subcomponents/background/background.component';
import { BorderComponent } from './components/make-css/subcomponents/border/border.component';


  
  
  @NgModule({
	declarations: [
	AppComponent,
	MakeCssComponent,
	MakeCss2Component,
	InitialComponent,
	QuestionairreComponent,
	ReviewQuestionsComponent,
	AboutComponent,
	PrintQuizComponent,
	ColorComponent,
	BackgroundComponent,
	BorderComponent
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