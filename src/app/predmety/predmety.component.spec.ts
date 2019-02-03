import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetyComponent } from './predmety.component';

describe('PredmetyComponent', () => {
  let component: PredmetyComponent;
  let fixture: ComponentFixture<PredmetyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredmetyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredmetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
