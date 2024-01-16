import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyTheCarComponent } from './modify-the-car.component';

describe('ModifyTheCarComponent', () => {
  let component: ModifyTheCarComponent;
  let fixture: ComponentFixture<ModifyTheCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyTheCarComponent]
    });
    fixture = TestBed.createComponent(ModifyTheCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
