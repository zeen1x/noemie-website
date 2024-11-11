import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteServiceComponent } from './carte-service.component';

describe('CarteServiceComponent', () => {
  let component: CarteServiceComponent;
  let fixture: ComponentFixture<CarteServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarteServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
