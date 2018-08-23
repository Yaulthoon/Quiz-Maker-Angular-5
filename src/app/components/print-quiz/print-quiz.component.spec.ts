import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintQuizComponent } from './print-quiz.component';

describe('PrintQuizComponent', () => {
  let component: PrintQuizComponent;
  let fixture: ComponentFixture<PrintQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
