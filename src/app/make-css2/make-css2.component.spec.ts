import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeCss2Component } from './make-css2.component';

describe('MakeCss2Component', () => {
  let component: MakeCss2Component;
  let fixture: ComponentFixture<MakeCss2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeCss2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeCss2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
