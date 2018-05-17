import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerMissionsComponent } from './lister-missions.component';

describe('ListerMissionsComponent', () => {
  let component: ListerMissionsComponent;
  let fixture: ComponentFixture<ListerMissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerMissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerMissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
