import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntetePagePrincipalComponent } from './entete-page-principal.component';

describe('MainPageHeaderComponent', () => {
  let component: EntetePagePrincipalComponent;
  let fixture: ComponentFixture<EntetePagePrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntetePagePrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntetePagePrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
