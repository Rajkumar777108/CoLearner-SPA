import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInterviewedComponent } from './get-interviewed.component';

describe('GetInterviewedComponent', () => {
  let component: GetInterviewedComponent;
  let fixture: ComponentFixture<GetInterviewedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetInterviewedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetInterviewedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
