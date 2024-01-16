import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeTheSingleCarComponent } from './see-the-single-car.component';

describe('SeeTheSingleCarComponent', () => {
  let component: SeeTheSingleCarComponent;
  let fixture: ComponentFixture<SeeTheSingleCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeeTheSingleCarComponent]
    });
    fixture = TestBed.createComponent(SeeTheSingleCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
