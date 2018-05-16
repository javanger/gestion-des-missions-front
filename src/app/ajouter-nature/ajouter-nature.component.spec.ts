import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterNatureComponent } from './ajouter-nature.component';

describe('AjouterNatureComponent', () => {
  let component: AjouterNatureComponent;
  let fixture: ComponentFixture<AjouterNatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterNatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterNatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
