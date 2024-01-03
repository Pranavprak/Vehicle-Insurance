import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffClaimComponent } from './staff-claim.component';

describe('StaffClaimComponent', () => {
  let component: StaffClaimComponent;
  let fixture: ComponentFixture<StaffClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
