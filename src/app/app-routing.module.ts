import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MakeCssComponent } from './components/make-css/make-css.component';
import { InitialComponent } from './components/initial/initial.component';
import { MakeCss2Component } from './components/make-css2/make-css2.component';
import { QuestionairreComponent } from './components/questionairre/questionairre.component';
import { ReviewQuestionsComponent } from './components/review-questions/review-questions.component';
import { AboutComponent } from './components/about/about.component';
import { PrintQuizComponent } from './components/print-quiz/print-quiz.component';
import { ColorComponent } from './components/make-css/subcomponents/color/color.component';
import { BackgroundComponent } from './components/make-css/subcomponents/background/background.component';
import { BorderComponent } from './components/make-css/subcomponents/border/border.component';


const routes: Routes = [

{
	
	path: '',
	component: InitialComponent,
	data: { animation: "''" }
},

{
	path: 'makeCSS',
	component: MakeCssComponent,
	data: { animation: 'makeCSS' },
	children: [
	{
		path: '',
		component: BackgroundComponent
	},
	
	{
		path: 'answerArea',
		component: ColorComponent
	},
	
	{
		path: 'both',
		component: BorderComponent
	}
	]
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
