import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldListComponent } from './world-list.component';

describe('WorldListComponent', () => {
  let component: WorldListComponent;
  let fixture: ComponentFixture<WorldListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
