import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingReminderSetting } from './pending-reminder-setting';

describe('PendingReminderSetting', () => {
  let component: PendingReminderSetting;
  let fixture: ComponentFixture<PendingReminderSetting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingReminderSetting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingReminderSetting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
