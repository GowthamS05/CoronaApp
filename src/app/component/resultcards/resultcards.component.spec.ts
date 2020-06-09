import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultcardsComponent } from './resultcards.component';

describe('ResultcardsComponent', () => {
  let component: ResultcardsComponent;
  let fixture: ComponentFixture<ResultcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
