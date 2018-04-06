import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class QuestionCompilerService {

  constructor() { }
  
  private answersKey = new BehaviorSubject<any>([]);
  aK = this.answersKey.asObservable();
  
  private storeAnswersKey = new BehaviorSubject<any>([]);
  sAK = this.storeAnswersKey.asObservable();
  
  private questionsKey = new BehaviorSubject<any>([]);
  qK = this.questionsKey.asObservable();
  
  answers = [];

  collectData () {
		var i = 0;
		var j = 0;
		var l = 0;
		var answers = document.getElementsByName('answers');
		var answersText = document.getElementsByName('answersText');
		var questions = document.getElementsByName('questionsText');
		var firstQuestion = (questions[0] as HTMLInputElement).value;
		var firstAnswerText = (answersText[0] as HTMLInputElement).value;
		if (firstQuestion === "" || firstAnswerText === "") {
			firstQuestion = "Be sure to fill your questions out completely." +
			"  You need to fill out the question area and at least one answer area.";
			return;
		}
		if (this.questionsKey.value.length !== this.storeAnswersKey.value.length ||
			this.storeAnswersKey.value.length !== this.answersKey.value.length ||
			this.questionsKey.value.length !== this.answersKey.value.length) {
				firstQuestion = "There was an error with the " +
				"last question.  Please review and delete it before continuing.";
				return;
		}
		var printAnswersKey = [];
		for (i; i < answers.length; i++) {
			if ((answers[i] as HTMLInputElement).checked) {
				this.answersKey.value.push((answers[i] as HTMLInputElement).value);
				this.answers.push((answers[i] as HTMLInputElement).value);
			}
			printAnswersKey.push((answersText[i] as HTMLInputElement).value);
			for (l = 0; l < printAnswersKey.length; l++) {
			if (printAnswersKey[l] === "") {
				printAnswersKey.splice(l,1);
			}
			}
		}
		this.questionsKey.value.push((questions[0] as HTMLInputElement).value);
		this.storeAnswersKey.value.push(printAnswersKey);
		(questions[0] as HTMLInputElement).value = "";
		for (j; j < answersText.length; j++) {
			(answersText[j] as HTMLInputElement).value = "";
		}
	console.log(this.answersKey.value.length);
	console.log(this.answers);
	console.log(this.questionsKey.value + " this is the question for the quiz");
	}
	
	

   
   removeQuestions(i) {
	   this.storeAnswersKey.value.splice(i,1);
	   this.questionsKey.value.splice(i,1);
	   this.answersKey.value.splice(i,1);
   }

	
  }
