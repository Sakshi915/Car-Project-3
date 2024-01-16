import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeTheAllCarsComponent } from './see-the-all-cars.component';

describe('SeeTheAllCarsComponent', () => {
  let component: SeeTheAllCarsComponent;
  let fixture: ComponentFixture<SeeTheAllCarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeeTheAllCarsComponent]
    });
    fixture = TestBed.createComponent(SeeTheAllCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
