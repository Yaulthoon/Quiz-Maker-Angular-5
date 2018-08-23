import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	
	status: boolean = false;
	status0: boolean = false;
	status1: boolean = false;
	status2: boolean = false;
	status3: boolean = false;
	status4: boolean = false;
	status5: boolean = false;
	status6: boolean = false;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  fadeStyle(ele, inOut, num) {
		if(inOut === "in") {
			ele[num].style.opacity = 1;
		    ele[num].style.zIndex = 0;
		    ele[num].style.transform = "translateY(0)";
			ele[1].style.display = "none";
		    ele[0].style.display = "inline";
			ele[num].style.position = "relative";
		} else {
			ele[num].style.transform = "translateY(-1.4em)";
			ele[num].style.opacity = 0;
		    ele[num].style.zIndex = -1;
		    setTimeout(() => {
				ele[num].style.position = "absolute";
				ele[0].style.display = "none";
				ele[1].style.display = "inline";
				}, 240);
		}
  }
  
  toggleShow(event: any, childNum) {
	  var children = event.target.childNodes;
	  console.log(children);
	  if(children.length === 0) {
		  var firstParent = event.target.parentNode;
		  var child = firstParent.childNodes;
		  if(child[childNum].style.opacity === "0" || child[childNum].style.opacity === '') {
		  this.fadeStyle(child, "in", childNum);
	  } else {
		  this.fadeStyle(child, "out", childNum);
	  }
	  }
	  if(typeof children[childNum] === 'undefined') {
		  return;
	  }
	  if(children[childNum].style.opacity === "0" || children[childNum].style.opacity === '') {
		  this.fadeStyle(children, "in", childNum);
	  } else {
	      this.fadeStyle(children, "out", childNum);
	  }
  }
  
  sendPlaces(place) {
	this.router.navigate([place]);
}

}
