import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneDeFraisComponent } from './ligne-de-frais.component';

describe('LigneDeFraisComponent', () => {
  let component: LigneDeFraisComponent;
  let fixture: ComponentFixture<LigneDeFraisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigneDeFraisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigneDeFraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
