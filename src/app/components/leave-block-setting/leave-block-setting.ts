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
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-leave-block-setting',
  imports: [
    NzCardModule,
    NzIconModule,
    NzGridModule,
    NzButtonModule,
    NzDatePickerModule,
    NzSelectModule,
    NzTypographyModule,
    NzInputModule,
    NzFormModule,
    ReactiveFormsModule
  ],
  templateUrl: './leave-block-setting.html',
  styleUrl: './leave-block-setting.css'
})
export class LeaveBlockSetting {

  lbSettingForm!: FormGroup;

  constructor(private fb: FormBuilder, private i18n: NzI18nService) {
    this.i18n.setLocale(en_US);

    this.lbSettingForm = this.fb.group({
      lbStartDate: ['', Validators.required],
      lbEndDate: ['', Validators.required],
      lbEnable: [null, Validators.required],
      country: ['', Validators.required],
      message: ['']
    })
  }

  // Helper to normalize date (set time to 0:00:00)
  normalizeDate = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());

  disabledStartDate = (startValue: Date): boolean => {
    if (!startValue || !this.getControl('lbEndDate')?.value) return false;

    return this.normalizeDate(startValue).getTime() > this.getControl('lbEndDate')?.value.getTime();
  };

  disabledEndDate = (endValue: Date): boolean => {
    if (!endValue || !this.getControl('lbStartDate')?.value) return false;

    return this.normalizeDate(endValue).getTime() < this.normalizeDate(this.getControl('lbStartDate')?.value).getTime();
  };
  //////////////////////////////

  getControl(controlName: string) {
    return this.lbSettingForm.get(controlName);
  }

  update(){
    console.log('updated value: ', this.lbSettingForm.value);
  }

  reset(){
    this.lbSettingForm.reset();
  }


}
