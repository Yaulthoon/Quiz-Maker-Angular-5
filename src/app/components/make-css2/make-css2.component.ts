import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
  import { Router } from '@angular/router';
  import { ColorChangerService } from '../../services/color-changer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

  @Component({
    selector: 'app-make-css2',
    templateUrl: './make-css2.component.html',
  styleUrls: ['../make-css/make-css.component.css']
  })
  export class MakeCss2Component implements OnInit {
	
  isActive: Boolean = true;
  color1 = '#00205e';
  color2 = '#ffffff';
  
  constructor(public router: Router, public _data: ColorChangerService) { }
  
    ngOnInit() {
    }
    
  ngAfterViewInit() {
  
  }
  
  
  
  }