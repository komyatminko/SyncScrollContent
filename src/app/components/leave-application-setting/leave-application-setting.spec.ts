import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveApplicationSetting } from './leave-application-setting';

describe('LeaveApplicationSetting', () => {
  let component: LeaveApplicationSetting;
  let fixture: ComponentFixture<LeaveApplicationSetting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveApplicationSetting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveApplicationSetting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
