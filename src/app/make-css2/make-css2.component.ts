import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColorChangerService } from '../color-changer.service';


@Component({
  selector: 'app-make-css2',
  templateUrl: './make-css2.component.html',
  styleUrls: ['./make-css2.component.css']
})
export class MakeCss2Component implements OnInit {

  constructor(public router: Router, public _color: ColorChangerService) { }

  ngOnInit() {
  }
  
    sendPlaces(place) {
	this.router.navigate([place]);
}

}
