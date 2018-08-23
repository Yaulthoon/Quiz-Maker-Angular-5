import { Component, OnInit } from '@angular/core';
import { ColorChangerService } from './services/color-changer.service';
import { QuestionCompilerService } from './services/question-compiler.service';
import { Router } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

//navActive preference ceeba0

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   animations: [
  trigger('routerAnimation',[
  transition('* => *', [
  query(':enter', stagger('.5s', [
  animate('.6s ease-in', keyframes([
  style({opacity: 0}),
  style({opacity: 0.2}),
  style({opacity: 0.4}),
  style({opacity: 0.6}),
  style({opacity: 0.8}),
  style({opacity: 1.0})
	]))]),  {optional: true})
  ])])]
})

export class AppComponent implements OnInit {
  title = 'app';
  toggle = false;
  screenWidth;
  
  ngOnInit() {
  }
  
  getScreenWidth() {
	  console.log(window.outerWidth);
  }
  
  toggler() {
	  if (this.toggle === false) {
		  this.toggle = true;
	  } else {
		  this.toggle = false;
	  }
  }
  
  trial() {
	  if(window.outerWidth > 750) {
		  return {
		  "display": "inline",
		  "font": "1.3vw Arial",
          "color": "#fff",
          "margin-left": "5.5%",
          "cursor": "pointer",
          "text-decoration": "underline"
		  }
	  }
  }
  
  resize() {
	  this.screenWidth = window.outerWidth;
  }
		  
  
  toggleMenu() {
	    if(this.toggle === true && window.outerWidth <= 760) {
			console.log(this.screenWidth);
			return {
			"display": "block",
			"width": "100%"
	}
	  } else if (this.toggle === false && window.outerWidth <= 760) {
		  console.log(this.screenWidth);
			return {
			  "display": "none"
		  }
	  }
  }
  
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation
  }

}
