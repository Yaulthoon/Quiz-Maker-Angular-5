import { Injectable } from '@angular/core';
import { QuestionCompilerService } from './question-compiler.service';


@Injectable({
  providedIn: 'root'
})
export class QuizScorerService {
	
  constructor(public _answersKey: QuestionCompilerService) { }
  
  answers;
  scoring;
  incorrect;
  scored: boolean = false;
  
  gatherAnswers() {
	  var i = 0;
	  var inputs = (<any>document.getElementsByClassName("radio"));
	  var choices = document.getElementsByClassName("answer");
	  var userKey = [];
	  for(i; i < inputs.length; i++) {
		  if(inputs[i].checked) {
			  userKey.push(choices[i].innerHTML);
		  }
	  }
	  this.answers = userKey;
	  console.log(this.answers);
  }
  
  score() {
	  var userScore = 0;
	  this.gatherAnswers();
	  if(this.answers.length !== this._answersKey.answersKey.value.length) {
		  console.log('error answering questions');
		  return;
	  } else {
		  console.log('success');
		  for(var i = 0; i < this.answers.length; i++) {
			  console.log("your answer " + this.answers[i] + " and real answer " + this._answersKey.answersKey.value[i]);
		  if(this.answers[i] === this._answersKey.answersKey.value[i]) {
			  userScore += 1;
		  }
		  }
		  console.log("Your score was: " + Math.round(userScore/this.answers.length *100));
		  this.scored = true;
		  this.scoring = Math.round(userScore/this.answers.length *100);
		  this.incorrect = this.answers.length - userScore;
	  }
  }

}
