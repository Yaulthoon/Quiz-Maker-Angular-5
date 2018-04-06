import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MakeCssComponent } from './make-css/make-css.component';
import { InitialComponent } from './initial/initial.component';
import { MakeCss2Component } from './make-css2/make-css2.component';
import { QuestionairreComponent } from './questionairre/questionairre.component';
import { ReviewQuestionsComponent } from './review-questions/review-questions.component';
import { ColorChangerService } from './color-changer.service';
import { QuestionCompilerService } from './question-compiler.service';
import { AboutComponent } from './about/about.component';
import { PrintQuizComponent } from './print-quiz/print-quiz.component';




@NgModule({
  declarations: [
    AppComponent,
    MakeCssComponent,
    InitialComponent,
    MakeCss2Component,
    QuestionairreComponent,
    ReviewQuestionsComponent,
    AboutComponent,
    PrintQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	BrowserAnimationsModule
  ],
  providers: [ColorChangerService, QuestionCompilerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
