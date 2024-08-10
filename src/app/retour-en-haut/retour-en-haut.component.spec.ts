import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetourEnHautComponent } from './retour-en-haut.component';

describe('RetourEnHautComponent', () => {
  let component: RetourEnHautComponent;
  let fixture: ComponentFixture<RetourEnHautComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RetourEnHautComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetourEnHautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
