import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoucovateliaEditComponent } from './doucovatelia-edit.component';

describe('DoucovateliaEditComponent', () => {
  let component: DoucovateliaEditComponent;
  let fixture: ComponentFixture<DoucovateliaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoucovateliaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoucovateliaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
