import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColorChangerService } from '../color-changer.service';
import { QuestionCompilerService } from '../question-compiler.service';



@Component({
  selector: 'app-print-quiz',
  templateUrl: './print-quiz.component.html',
  styleUrls: ['./print-quiz.component.css']
})
export class PrintQuizComponent implements OnInit {

  constructor(public router: Router, public _color: ColorChangerService,
  public _quiz: QuestionCompilerService) { }

  ngOnInit() {
  }

}
