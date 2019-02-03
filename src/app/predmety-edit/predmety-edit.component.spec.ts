import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetyEditComponent } from './predmety-edit.component';

describe('PredmetyEditComponent', () => {
  let component: PredmetyEditComponent;
  let fixture: ComponentFixture<PredmetyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredmetyEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredmetyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
