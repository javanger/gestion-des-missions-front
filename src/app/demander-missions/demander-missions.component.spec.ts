import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemanderMissionsComponent } from './demander-missions.component';

describe('DemanderMissionsComponent', () => {
  let component: DemanderMissionsComponent;
  let fixture: ComponentFixture<DemanderMissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemanderMissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemanderMissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
