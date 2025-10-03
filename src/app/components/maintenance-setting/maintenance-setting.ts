import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
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
  selector: 'app-maintenance-setting',
  imports: [
    NzCardModule,
    NzIconModule,
    NzGridModule,
    NzButtonModule,
    NzDatePickerModule,
    NzTypographyModule,
    NzInputModule,
    NzFormModule,
    NzSwitchModule,
    ReactiveFormsModule
  ],
  templateUrl: './maintenance-setting.html',
  styleUrl: './maintenance-setting.css'
})
export class MaintenanceSetting {

  mtnSettingForm!: FormGroup;

  constructor(private fb: FormBuilder, private i18n: NzI18nService) {
    this.i18n.setLocale(en_US);

    this.mtnSettingForm = this.fb.group({
      mtnStartDate: ['', Validators.required],
      mtnEndDate: ['', Validators.required],
      mtnEnable: [false, Validators.required],
      message: ['']
    })
  }

  // Helper to normalize date (set time to 0:00:00)
  normalizeDate = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());

  disabledStartDate = (startValue: Date): boolean => {
    if (!startValue || !this.getControl('mtnEndDate')) return false;
    return this.normalizeDate(startValue).getTime() > this.getControl('mtnEndDate').getTime();
  };

  disabledEndDate = (endValue: Date): boolean => {
    if (!endValue || !this.getControl('mtnStartDate')) return false;
    return this.normalizeDate(endValue).getTime() < this.normalizeDate(this.getControl('mtnStartDate')).getTime();
  };
  //////////////////////////////

  getControl(controlName: string) {
    return this.mtnSettingForm.get(controlName)?.value;
  }

  toggleMtnEnable() {
    const control = this.mtnSettingForm.get('mtnEnable'); 
    if (control) {
      control.setValue(!control.value); 
    }
  }

  update() {
    console.log('updated value: ', this.mtnSettingForm.value);
  }

  reset() {
    this.mtnSettingForm.reset();
  }

}
