import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailNotificationSetting } from './email-notification-setting';

describe('EmailNotificationSetting', () => {
  let component: EmailNotificationSetting;
  let fixture: ComponentFixture<EmailNotificationSetting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailNotificationSetting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailNotificationSetting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
