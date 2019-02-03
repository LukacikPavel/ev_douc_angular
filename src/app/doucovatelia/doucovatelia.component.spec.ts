import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoucovateliaComponent } from './doucovatelia.component';

describe('DoucovateliaComponent', () => {
  let component: DoucovateliaComponent;
  let fixture: ComponentFixture<DoucovateliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoucovateliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoucovateliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
