import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNatureComponent } from './demo-nature.component';

describe('DemoNatureComponent', () => {
  let component: DemoNatureComponent;
  let fixture: ComponentFixture<DemoNatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoNatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoNatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
