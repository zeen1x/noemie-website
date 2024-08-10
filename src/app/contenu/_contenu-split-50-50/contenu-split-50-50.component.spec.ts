import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenuSplit5050Component } from './contenu-split-50-50.component';

describe('ContenuSplit5050Component', () => {
  let component: ContenuSplit5050Component;
  let fixture: ComponentFixture<ContenuSplit5050Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContenuSplit5050Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenuSplit5050Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
