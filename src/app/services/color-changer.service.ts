import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
  import { Directive, ElementRef, HostListener } from '@angular/core';
  
  @Injectable()
  export class ColorChangerService {
  
	constructor() { 
		
	}
	
   isActive: boolean = false;
   displayer = function() {
	   if(window.outerWidth > 750) {
		   return "inline-block";
	   } else if (this.isActive === true) {
		  return "inline-block";
	  } else {
		  return "none";
	  }
  };
	
	//Question Area Start
	currentBQHex = '';
	currentBQColor = '#133d15';
	currentFQHex = '';
	currentFQColor = '#ceeba0';
	currentBorderQuestionColor = "#ceeba0";
	currentBorderQuestionHex = '';
	currentBorderQuestionSize = '0px';
	currentBorderQuestionRadius = "0px";
	//////////////////////
	
	//Answer Area Start
	currentBAHex = '';
	currentBAColor = '#ffffff';
	currentFAHex = '';
	currentFAColor = '#133d15';
	currentBorderAnswerColor = "#ceeba0";
	currentBorderAnswerHex = '';
	currentBorderAnswerSize = '0px';
	currentBorderAnswerRadius = "0px";
	///////////////////////
	
	toggleShow() {
		if (this.isActive === false) {
		  this.isActive = true;
	  } else {
		  this.isActive = false;
	  }
  }
	
	colorSet(backgroundColor, color, borderSize, borderColor, borderRadius, type) {
		if(type === "question") {
		return {
		"background-color": backgroundColor,
		"color": color,
		"border-width": borderSize,
		"border-color": borderColor,
		"border-style": "solid",
		"border-radius": borderRadius
		}
		} else {
			return {
		"background-color": backgroundColor,
		"color": color,
		"border-width": borderSize,
		"border-color": borderColor,
		"border-style": "solid",
		"border-radius": borderRadius,
		"display": this.displayer()
		}
		}
	}
	
	rgbRange (red, green, blue) {
		if(red < 0 || red > 255) {
			return false;
		} else if (green < 0 || green > 255) {
			return false;
		} else if (blue < 0 || blue > 255) {
			return false;
		} else {
			return true;
		}
	}
	
	componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
    }

    rgbToHex(r, g, b) {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }
	
	rgbHex(currentColor, currentHex) {
		var res = currentHex.substring(4, currentHex.length);
		var res2 = res.substring(0, res.indexOf(')'));
		var res3 = res2.split(',');
		if(!this.rgbRange(res3[0], res3[1], res3[2])) {
			return this[currentColor];
		}
		if (isNaN(res3[0]) || isNaN(res3[1]) || isNaN(res3[2])) {
			return this[currentColor];
		}  else {
		return this.rgbToHex(Number(res3[0]), Number(res3[1]), Number(res3[2]));
		}
	}
	
	hexSet(currentColor, currentHex) {
		if(currentHex.substring(0,4) === 'rgb(') {
			this[currentColor] = this.rgbHex(currentColor, currentHex);
		}
		else if (currentHex.substring(0,1) === "#") {
			this[currentColor] = currentHex;
		} else {
			this[currentColor] = "#" + currentHex;
		}
	}
	manualColorSet(currentColor, currentHex) {
		this.hexSet(currentColor, currentHex);
	}
	
  }