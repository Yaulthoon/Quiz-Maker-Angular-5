import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
  import { Router } from '@angular/router';
  import { ColorChangerService } from '../../services/color-changer.service';
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

getScreenWidth() {
	console.log(window.outerWidth);
}
    
 
  
  fadeStyle(ele, inOut) {
		if(inOut === "in") {
			ele.style.opacity = 1;
		    ele.style.zIndex = 0;
		    ele.style.transform = "translateY(0)";
		    ele.style.position = "relative";
		} else {
			ele.style.transform = "translateY(-1.4em)";
			ele.style.opacity = 0;
		    ele.style.zIndex = -1;
		    setTimeout(() => {ele.style.position = "absolute";}, 240);
		}
  }
  
  toggleShow(event: any, childNum) {
	  var children = event.target.childNodes;
	  if(children.length === 0) {
		  var parent = event.target.parentNode;
		  var child = parent.childNodes;
		  console.log(child);
		  if(child[childNum].style.opacity === "0" || child[childNum].style.opacity === '') {
		  this.fadeStyle(child[childNum], "in");
	  } else {
		  this.fadeStyle(child[childNum], "out");
	  }
	  }
	  if(typeof children[childNum] === 'undefined') {
		  return;
	  }
	  if(children[childNum].style.opacity === "0" || children[childNum].style.opacity === '') {
		  this.fadeStyle(children[childNum], "in");
	  } else {
	      this.fadeStyle(children[childNum], "out");
	  }
  }
  
  
    sendPlaces(place) {
  	this.router.navigate([place]);
  }
  }
