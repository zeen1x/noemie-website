import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenuBasiqueComponent } from './contenu-basique.component';

describe('ContenuBasiqueComponent', () => {
  let component: ContenuBasiqueComponent;
  let fixture: ComponentFixture<ContenuBasiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContenuBasiqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenuBasiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
