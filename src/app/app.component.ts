import { Component } from '@angular/core';
import { ColorChangerService } from './color-changer.service';
import { QuestionCompilerService } from './question-compiler.service';
import { Router } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   animations: [
  trigger('routerAnimation',[
  transition('* => *', [
  query(':enter', stagger('.5s', [
  animate('.6s ease-in', keyframes([
  style({opacity: 0}),
  style({opacity: 0.2}),
  style({opacity: 0.4}),
  style({opacity: 0.6}),
  style({opacity: 0.8}),
  style({opacity: 1.0})
	]))]),  {optional: true})
  ])])]
})

export class AppComponent {
  title = 'app';
  
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation
  }

}
