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

  constructor(private router: Router, private _quiz: QuestionCompilerService, 
  private _color: ColorChangerService) { 
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
