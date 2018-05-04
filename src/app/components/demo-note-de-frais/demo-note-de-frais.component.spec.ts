import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNoteDeFraisComponent } from './demo-note-de-frais.component';

describe('DemoNoteDeFraisComponent', () => {
  let component: DemoNoteDeFraisComponent;
  let fixture: ComponentFixture<DemoNoteDeFraisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoNoteDeFraisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoNoteDeFraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
