import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteDeFraisComponent } from './note-de-frais.component';

describe('NoteDeFraisComponent', () => {
  let component: NoteDeFraisComponent;
  let fixture: ComponentFixture<NoteDeFraisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteDeFraisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteDeFraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
