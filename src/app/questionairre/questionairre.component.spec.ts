import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionairreComponent } from './questionairre.component';

describe('QuestionairreComponent', () => {
  let component: QuestionairreComponent;
  let fixture: ComponentFixture<QuestionairreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionairreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionairreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
