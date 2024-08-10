import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblematiquesTraiteesComponent } from './problematiques-traitees.component';

describe('ProblematiquesTraiteesComponent', () => {
  let component: ProblematiquesTraiteesComponent;
  let fixture: ComponentFixture<ProblematiquesTraiteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProblematiquesTraiteesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblematiquesTraiteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
