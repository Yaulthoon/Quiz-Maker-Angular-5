import { Component, OnInit } from '@angular/core';
import { ColorChangerService } from './../../../../services/color-changer.service';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  constructor(public _data: ColorChangerService) { }

  ngOnInit() {
  }

  resize(event: any) {
	  if(window.outerWidth >= 750) {
		 console.log(event.target);
	  }
  }
  
}
