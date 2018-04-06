import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MakeCssComponent } from './make-css/make-css.component';
import { InitialComponent } from './initial/initial.component';
import { MakeCss2Component } from './make-css2/make-css2.component';
import { QuestionairreComponent } from './questionairre/questionairre.component';
import { ReviewQuestionsComponent } from './review-questions/review-questions.component';
import { AboutComponent } from './about/about.component';
import { PrintQuizComponent } from './print-quiz/print-quiz.component';







const routes: Routes = [

{
	
	path: '',
	component: InitialComponent,
	data: { animation: "''" }
},

{
	path: 'makeCSS',
	component: MakeCssComponent,
	data: { animation: 'makeCSS' }
},

{
	path: 'makeCSS2',
	component: MakeCss2Component,
	data: { animation: 'makeCSS2' }
},

{
	path: 'questionairre',
	component: QuestionairreComponent,
	data: { animation: 'questionairre' }
},

{
	path: 'reviewQuestions',
	component: ReviewQuestionsComponent,
	data: { animation: 'reviewQuestions' }
},

{
	path: 'about',
	component: AboutComponent,
	data: { animation: 'about' }
},

{
	path: 'printQuiz',
	component: PrintQuizComponent,
	data: { animation: 'printQuiz' }
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
