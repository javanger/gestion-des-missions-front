import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierLigneFraisComponent } from './modifier-ligne-frais.component';

describe('ModifierLigneFraisComponent', () => {
  let component: ModifierLigneFraisComponent;
  let fixture: ComponentFixture<ModifierLigneFraisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierLigneFraisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierLigneFraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
