import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTypographyModule } from 'ng-zorro-antd/typography';


@Component({
  selector: 'app-pending-reminder-setting',
  imports: [
    NzCardModule,
    NzIconModule,
    NzGridModule,
    NzButtonModule,
    NzSelectModule,
    NzTypographyModule,
    NzInputModule,
    NzSwitchModule,
    NzFormModule,
    ReactiveFormsModule
  ],
  templateUrl: './pending-reminder-setting.html',
  styleUrl: './pending-reminder-setting.css'
})
export class PendingReminderSetting {

  pendingReminderSettingForm!: FormGroup;

  constructor(private fb: FormBuilder, private i18n: NzI18nService) {
    this.i18n.setLocale(en_US);

    this.pendingReminderSettingForm = this.fb.group({
      role: ['', Validators.required],
      tranWeek: ['', Validators.required],
      emailSendingDay: ['', Validators.required],
      emailSendingTime: ['', Validators.required],
      emailScheduleEnable: [false, Validators.required],
      viberScheduleEnable: [false, Validators.required]
    })
  }

  toggleSwitch(controlName: string) {
    const control = this.getControl(controlName);
    if (control) {
      control.setValue(!control.value);
    }
  }

  getControl(controlName: string) {
    return this.pendingReminderSettingForm.get(controlName);
  }

  update() {
    console.log('updated value: ', this.pendingReminderSettingForm.value);
  }

  reset() {
    this.pendingReminderSettingForm.reset();
  }

}
