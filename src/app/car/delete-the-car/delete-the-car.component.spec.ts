import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTheCarComponent } from './delete-the-car.component';

describe('DeleteTheCarComponent', () => {
  let component: DeleteTheCarComponent;
  let fixture: ComponentFixture<DeleteTheCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteTheCarComponent]
    });
    fixture = TestBed.createComponent(DeleteTheCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
