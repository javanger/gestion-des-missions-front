import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerNatureComponent } from './lister-nature.component';

describe('ListerNatureComponent', () => {
  let component: ListerNatureComponent;
  let fixture: ComponentFixture<ListerNatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerNatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerNatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
