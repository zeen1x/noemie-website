import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesOffertsComponent } from './services-offerts.component';

describe('ServicesOffertsComponent', () => {
  let component: ServicesOffertsComponent;
  let fixture: ComponentFixture<ServicesOffertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicesOffertsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesOffertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
