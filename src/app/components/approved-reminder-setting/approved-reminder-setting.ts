import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
@Component({
  selector: 'app-approved-reminder-setting',
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
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './approved-reminder-setting.html',
  styleUrl: './approved-reminder-setting.css'
})
export class ApprovedReminderSetting {

  isEditable = false;
  approvedReminderSettingForm!: FormGroup;

  constructor(private fb: FormBuilder, private i18n: NzI18nService) {
    this.i18n.setLocale(en_US);

    this.approvedReminderSettingForm = this.fb.group({
      tranWeek: ['', Validators.required],
      emailSendingDay: ['', Validators.required],
      emailSendingTime: ['', Validators.required],
      emailScheduleEnable: [false, Validators.required],
      viberScheduleEnable: [false, Validators.required]
    })
  }

  // ngOnInit(){
  //   console.log('isEditable', this.isEditable);
  // }

  toggleSwitch(controlName: string) {
    const control = this.getControl(controlName);
    if (control) {
      control.setValue(!control.value);
    }
  }

  onSelectChange(value: string) {
      this.isEditable = true;
      console.log('isEditable', this.isEditable);
  }

  getControl(controlName: string) {
    return this.approvedReminderSettingForm.get(controlName);
  }

  update() {
    console.log('updated value: ', this.approvedReminderSettingForm.value);
  }

  reset() {
    this.approvedReminderSettingForm.reset();
  }
}
