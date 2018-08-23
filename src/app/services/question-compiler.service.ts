 import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
  
  @Injectable()
  export class QuestionCompilerService {
    constructor() { }
    
    public answersKey = new BehaviorSubject<any>([]);

    public storeAnswersKey = new BehaviorSubject<any>([]);

    public questionsKey = new BehaviorSubject<any>([]);

  question: String;
  selected;
  error: boolean = false;
  answer = {
	  choice1: '',
	  choice2: '',
	  choice3: '',
	  choice4: ''
  };
  
  showData() {
	  if(typeof this.selected === "undefined" || this.selected === null) {
		  console.log("error on choosing");
		  this.error = true;
		  return;
	  }
	  this.error = false;
	  const storeAnswers = [];
	  this.questionsKey.value.push(this.question);
	  for(var answers in this.answer) {
		  if(this.answer[answers] === '') {
		  } else {
		  storeAnswers.push(this.answer[answers]);
		  }
	  }
	  this.storeAnswersKey.value.push(storeAnswers);
	  this.answersKey.value.push(this.selected);
	  console.log("List of questions: " + this.questionsKey.value);
	  console.log("List of possible answers: " + this.storeAnswersKey.value);
	  console.log("List of answers: " + this.answersKey.value);
	  this.question = '';
	  this.selected = null;
	  for(var answers in this.answer) {
		  this.answer[answers] = '';
	  }
  }
      
     removeQuestions(i) {
  	   this.storeAnswersKey.value.splice(i,1);
  	   this.questionsKey.value.splice(i,1);
  	   this.answersKey.value.splice(i,1);
     }
	
   
    }
