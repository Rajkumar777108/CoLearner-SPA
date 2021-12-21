import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OOPSComponent } from './oops.component';

describe('OOPSComponent', () => {
  let component: OOPSComponent;
  let fixture: ComponentFixture<OOPSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OOPSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OOPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
