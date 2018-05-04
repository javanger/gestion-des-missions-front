import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionFraisComponent } from './gestion-frais.component';

describe('GestionFraisComponent', () => {
  let component: GestionFraisComponent;
  let fixture: ComponentFixture<GestionFraisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionFraisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionFraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
