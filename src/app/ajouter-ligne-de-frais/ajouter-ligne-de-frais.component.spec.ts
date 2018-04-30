import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterLigneDeFraisComponent } from './ajouter-ligne-de-frais.component';

describe('AjouterLigneDeFraisComponent', () => {
  let component: AjouterLigneDeFraisComponent;
  let fixture: ComponentFixture<AjouterLigneDeFraisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterLigneDeFraisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterLigneDeFraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
