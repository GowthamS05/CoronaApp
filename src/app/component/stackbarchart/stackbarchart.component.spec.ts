import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackbarchartComponent } from './stackbarchart.component';

describe('StackbarchartComponent', () => {
  let component: StackbarchartComponent;
  let fixture: ComponentFixture<StackbarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackbarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackbarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
