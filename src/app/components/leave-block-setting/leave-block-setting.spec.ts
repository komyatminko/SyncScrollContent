import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveBlockSetting } from './leave-block-setting';

describe('LeaveBlockSetting', () => {
  let component: LeaveBlockSetting;
  let fixture: ComponentFixture<LeaveBlockSetting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveBlockSetting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveBlockSetting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
