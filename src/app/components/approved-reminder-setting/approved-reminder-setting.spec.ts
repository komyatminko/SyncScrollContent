import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedReminderSetting } from './approved-reminder-setting';

describe('ApprovedReminderSetting', () => {
  let component: ApprovedReminderSetting;
  let fixture: ComponentFixture<ApprovedReminderSetting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprovedReminderSetting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovedReminderSetting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
