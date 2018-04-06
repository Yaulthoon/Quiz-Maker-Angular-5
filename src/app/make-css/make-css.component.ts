import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ColorChangerService } from '../color-changer.service';


@Component({
  selector: 'app-make-css',
  templateUrl: './make-css.component.html',
  styleUrls: ['./make-css.component.css']
})
export class MakeCssComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, 
  private _data: ColorChangerService) {

	  }

  ngOnInit() {

  }
  
  sendPlaces(place) {
	this.router.navigate([place]);
}

}
