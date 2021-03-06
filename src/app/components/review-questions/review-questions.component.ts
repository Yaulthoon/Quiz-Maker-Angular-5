import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { QuestionCompilerService } from '../../services/question-compiler.service';
import { ColorChangerService } from '../../services/color-changer.service';
import { QuizScorerService } from '../../services/quiz-scorer.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-review-questions',
  templateUrl: './review-questions.component.html',
  styleUrls: ['./review-questions.component.css'],
  animations: [
  trigger('loadedQuestion',[
  transition('* => *', [
	query(':leave', stagger('300ms', [
  animate('0.6s ease-in', keyframes([
  style({opacity: 1, transform: 'translateX(0)', offset:0}),
  style({opacity: .5, transform: 'translateX(10px)', offset:0.3}),
  style({opacity: 0, transform: 'translateX(-25%)', offset: 1})
	]))]),  {optional: true}),

  ])
  ])]
})
export class ReviewQuestionsComponent implements OnInit {

  constructor(public router: Router, public _quiz: QuestionCompilerService, 
  public _scorer: QuizScorerService, public _data: ColorChangerService) { }

  ngOnInit() {
  }

  sendPlaces(place) {
	  this.router.navigate([place]);
  }
  
}
