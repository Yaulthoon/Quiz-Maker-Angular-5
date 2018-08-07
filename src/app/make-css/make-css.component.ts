import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
  import { Router } from '@angular/router';
  import { ColorChangerService } from '../color-changer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  
  @Component({
    selector: 'app-make-css',
	templateUrl: './make-css.component.html',
    styleUrls: ['./make-css.component.css']
  })
  export class MakeCssComponent implements OnInit {
	
  isActive: Boolean = true;
  color1 = '#00205e';
  color2 = '#ffffff';
  
    constructor(public route: ActivatedRoute, public router: Router, 
    public _data: ColorChangerService) {
  
    }
	
	 ngOnInit() {

}
    
  ngAfterViewInit() {
  this._data.adjustColor('range1', this._data.backgroundQuestionRed);
  this._data.adjustColor('range2', this._data.backgroundQuestionGreen);
  this._data.adjustColor('range3', this._data.backgroundQuestionBlue);
  this._data.adjustColor('range4', this._data.fontQuestionRed);
  this._data.adjustColor('range5', this._data.fontQuestionGreen);
  this._data.adjustColor('range6', this._data.fontQuestionBlue);
  }
  
  
    sendPlaces(place) {
  	this.router.navigate([place]);
  }
  
  hexInput() {
	  return {"width": "9vw", "border": "2px solid black"};
  }

  backDiv(bg, font) {
	  return {"background-color": bg, "color": font};
  }
  
  sliderDiv(color, trigger) {
	  if (trigger === 'red') {
	  return { 
	  "background-color":  "rgb(" + color + ", 0, 0)",
	  "-webkit-appearance": "none",
      "height": "25px",
	  "width": "100%",
      "outline": "none",
      "opacity": "1",
      "-webkit-transition": ".2s",
    "transition": "opacity .2s"
	  }
	  } else if (trigger === 'green') {
		  return { 
	  "background-color":  "rgb(0," + color +  ",0)",
	  "-webkit-appearance": "none",
      "height": "25px",
	  "width": "100%",
      "outline": "none",
      "opacity": "1",
      "-webkit-transition": ".2s",
    "transition": "opacity .2s"
	  }
	  } else {
		  return { 
	  "background-color":  "rgb(0,0," + color + ")",
	  "-webkit-appearance": "none",
      "height": "25px",
	  "width": "100%",
      "outline": "none",
      "opacity": "1",
      "-webkit-transition": ".2s",
    "transition": "opacity .2s"
	  }
	  }
  }

  toggleStyle(truth) {
	  this.isActive = truth;
	  if(this.isActive) {
		  this.color1 = '#00205e';
		  this.color2 = '#ffffff';
		  console.log(this.isActive);
	  } else {
		  this.color1 = '#ffffff';
		  this.color2 = '#00205e';
		  console.log(this.isActive);
	  }
  }
  

  }
