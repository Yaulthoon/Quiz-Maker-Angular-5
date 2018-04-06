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

  constructor(private router: Router, private _color: ColorChangerService,
  private _quiz: QuestionCompilerService) { }

  ngOnInit() {
  }

}
