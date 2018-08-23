import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeCssComponent } from './make-css.component';

describe('MakeCssComponent', () => {
  let component: MakeCssComponent;
  let fixture: ComponentFixture<MakeCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
