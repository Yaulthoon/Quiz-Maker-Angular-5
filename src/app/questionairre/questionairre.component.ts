import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionCompilerService } from '../question-compiler.service';
import { ColorChangerService } from '../color-changer.service';



@Component({
  selector: 'app-questionairre',
  templateUrl: './questionairre.component.html',
  styleUrls: ['./questionairre.component.css']
})
export class QuestionairreComponent implements OnInit {

  constructor(public router: Router, public _quiz: QuestionCompilerService, 
  public _color: ColorChangerService) { 
  }

  ngOnInit() {
  }
  
  sendPlaces(place) {
	  this.router.navigate([place]);
  }
  
  storeAnswersKey = [];
  answersKey = [];
  questionsKey = [];

}
