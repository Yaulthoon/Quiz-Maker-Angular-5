import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Injectable()
export class ColorChangerService {

  constructor() { 
	  
  }
  
    //Question Area Background
  	private backgroundQuestionRed = new BehaviorSubject(255);
	bQR = this.backgroundQuestionRed.asObservable();
	
	private backgroundQuestionGreen = new BehaviorSubject(255);
	bQG = this.backgroundQuestionGreen.asObservable();
	
	private backgroundQuestionBlue = new BehaviorSubject(255);
	bQB = this.backgroundQuestionBlue.asObservable();
	
	//Question Area Font
	private fontQuestionRed = new BehaviorSubject(0);
	fQR = this.fontQuestionRed.asObservable();
	
	private fontQuestionGreen = new BehaviorSubject(0);
	fQG = this.fontQuestionGreen.asObservable();
	
	private fontQuestionBlue = new BehaviorSubject(0);
	fQB = this.fontQuestionBlue.asObservable();
	
	//Answer Area Background
	private backgroundAnswerRed = new BehaviorSubject(255);
	bAR = this.backgroundAnswerRed.asObservable();
	
	private backgroundAnswerGreen = new BehaviorSubject(255);
	bAG = this.backgroundAnswerGreen.asObservable();
	
	private backgroundAnswerBlue = new BehaviorSubject(255);
	bAB = this.backgroundAnswerBlue.asObservable();
	
	//Answer Area Font
	
	private fontAnswerRed = new BehaviorSubject(0);
	fAR = this.fontAnswerRed.asObservable();
	
	private fontAnswerGreen = new BehaviorSubject(0);
	fAG = this.fontAnswerRed.asObservable();
	
	private fontAnswerBlue = new BehaviorSubject(0);
	fAB = this.fontAnswerBlue.asObservable();
	
	setStyle (section) {
		if (section === 'question') {
		return {
			"background-color":  "rgb(" + this.backgroundQuestionRed.value + 
				',' + this.backgroundQuestionGreen.value + ',' +
			    this.backgroundQuestionBlue.value + ')',
				"color": "rgb(" + this.fontQuestionRed.value + ',' + 
				this.fontQuestionGreen.value + ',' + this.fontQuestionBlue.value + ")"
		}
		}
		if (section === 'answer') {
		return {
			"background-color":  "rgb(" + this.backgroundAnswerRed.value + 
				',' + this.backgroundAnswerGreen.value + ',' +
			    this.backgroundAnswerBlue.value + ')',
				"color": "rgb(" + this.fontAnswerRed.value + ',' + 
				this.fontAnswerGreen.value + ',' + this.fontAnswerBlue.value + ")"
		}
		}	
		
		
	}
		
	
	interval: number;
  
  changeBQR (colorArea, increment, speed) {
	  if (increment === 'plus') {
	  this.interval = setInterval (function () {
		  if (colorArea.value === 255) {
	  clearInterval(this.interval);
	  return;
	  }
	  colorArea.next(colorArea.value + 1);
	  console.log(colorArea.value);
	  }, speed);
		console.log(colorArea.value);
	  } else if (increment === 'minus') {
		  this.interval = setInterval (function () {
		  if (colorArea.value === 0) {
		     clearInterval(this.interval);
	         return;
	  }
	  colorArea.next(colorArea.value - 1);
	  console.log(colorArea.value);
	  }, speed);
		console.log(colorArea.value);
  }
  }
  
  	handleMouseUp () {
	  clearInterval(this.interval);
  }
		  
		
  }
