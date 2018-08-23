import { Component, OnInit } from '@angular/core';
import { ColorChangerService } from './../../../../services/color-changer.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['../background/background.component.css']
})
export class ColorComponent implements OnInit {
	
  constructor(public _data: ColorChangerService) { }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
  }
  
  toggleShow(event: any) {
	  if(window.outerWidth <= 750) {
	  var parent = event.target.parentNode;
	  var children = parent.childNodes;
	  console.log(parent.childNodes);
	  children[1].style.display = "none";
	  }
  }
  
  resize(event: any) {
	  if(window.outerWidth >= 750) {
		 console.log(event.target);
	  }
  }

}
