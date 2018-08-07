import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
  import { Directive, ElementRef, HostListener } from '@angular/core';
  
  @Injectable()
  export class ColorChangerService {
  
	constructor() { 
		
	}

	//Question Area Background
	public backgroundQuestionRed = new BehaviorSubject(255);
  	public backgroundQuestionGreen = new BehaviorSubject(255);
  	public backgroundQuestionBlue = new BehaviorSubject(255);
  	
  	//Question Area Font
  	public fontQuestionRed = new BehaviorSubject(0);	
  	public fontQuestionGreen = new BehaviorSubject(0);
  	public fontQuestionBlue = new BehaviorSubject(0);
  	
  	//Answer Area Background
  	public backgroundAnswerRed = new BehaviorSubject(255);
  	public backgroundAnswerGreen = new BehaviorSubject(255);
  	public backgroundAnswerBlue = new BehaviorSubject(255);
  	
  	//Answer Area Font
  	public fontAnswerRed = new BehaviorSubject(0);
  	public fontAnswerGreen = new BehaviorSubject(0);
  	public fontAnswerBlue = new BehaviorSubject(0);

  	
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
  
	adjustColor(id, color) {
		var slider = (<any>document.getElementById(id));
		slider.oninput = () => {
			color.next(slider.value);
		}
	}
	
notNumber = function(red, green, blue): boolean {
		if(isNaN(red)) {
			return true;
		} else if (isNaN(green)) {
			return true;
		} else if (isNaN(blue)) {
			return true;
		} else {
			return false;
		}
	};
	
rgbRange = function(red, green, blue): boolean {
		if(red < 0 || red > 255) {
			return true;
		} else if (green < 0 || green > 255) {
			return true;
		} else if (blue < 0 || blue > 255) {
			return true;
		} else {
			return false;
		}
	};
	
currentHex: String = '';

componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

rgbToHex(r, g, b) {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
}
	
	adjustColorRGB(reds, greens, blues, type) {
		var red = document.getElementsByClassName('redInput');
		var green = document.getElementsByClassName('greenInput');
		var blue = document.getElementsByClassName('blueInput');
		if(type === 'question') {
		if (this.notNumber((<any>red[0]).value, (<any>green[0]).value, (<any>blue[0]).value)) {
			console.log('these are not numbers');
			return false;
		} else if (this.rgbRange((<any>red[0]).value, (<any>green[0]).value, (<any>blue[0]).value)) {
			console.log('numbers are too large');
			return false;
		}
		reds.next((<any>red[0]).value);
		greens.next((<any>green[0]).value);
		blues.next((<any>blue[0]).value);
		this.currentHex = this.rgbToHex(Number(reds.value), Number(greens.value), Number(blues.value));
		} else {
			if (this.notNumber((<any>red[1]).value, (<any>green[1]).value, (<any>blue[1]).value)) {
			console.log('these are not numbers');
			return false;
		} else if (this.rgbRange((<any>red[1]).value, (<any>green[1]).value, (<any>blue[1]).value)) {
			console.log('numbers are too large');
			return false;
		}
		reds.next((<any>red[1]).value);
		greens.next((<any>green[1]).value);
		blues.next((<any>blue[1]).value);
		this.currentHex = this.rgbToHex(Number(reds.value), Number(greens.value), Number(blues.value));
		}
	}
	
	hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

rgbConvert(hex, reds, greens, blues) {
	if (this.hexToRgb(hex) === null) {
		console.log('error on convert');
		return false;
	}
	reds.next(this.hexToRgb(hex).r);
	greens.next(this.hexToRgb(hex).g);
	blues.next(this.hexToRgb(hex).b);
	console.log(this.hexToRgb(hex).r + ', ' + this.hexToRgb(hex).g + ', ' + this.hexToRgb(hex).b);
}
  		
}