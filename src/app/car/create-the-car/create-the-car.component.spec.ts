import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTheCarComponent } from './create-the-car.component';

describe('CreateTheCarComponent', () => {
  let component: CreateTheCarComponent;
  let fixture: ComponentFixture<CreateTheCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTheCarComponent]
    });
    fixture = TestBed.createComponent(CreateTheCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
