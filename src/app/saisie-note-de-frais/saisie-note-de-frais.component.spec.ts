import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieNoteDeFraisComponent } from './saisie-note-de-frais.component';

describe('SaisieNoteDeFraisComponent', () => {
  let component: SaisieNoteDeFraisComponent;
  let fixture: ComponentFixture<SaisieNoteDeFraisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaisieNoteDeFraisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieNoteDeFraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
