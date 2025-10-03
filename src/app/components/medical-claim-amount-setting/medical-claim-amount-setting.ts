import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
  selector: 'app-medical-claim-amount-setting',
  imports: [
    NzCardModule,
    NzIconModule,
    NzGridModule,
    NzButtonModule,
    NzTypographyModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './medical-claim-amount-setting.html',
  styleUrl: './medical-claim-amount-setting.css'
})
export class MedicalClaimAmountSetting {

   medClaimAmtSettingForm!: FormGroup;

  constructor(private fb: FormBuilder, private i18n: NzI18nService) {
    this.i18n.setLocale(en_US);

    this.medClaimAmtSettingForm = this.fb.group({
      maxAmtSg: ['', Validators.required],
      maxAmtMyan: ['', Validators.required]
    })
  }

  reset(){
    this.medClaimAmtSettingForm.reset();
  }

  update(){
    console.log('max medical claim amount for employee ', this.medClaimAmtSettingForm.value);
  }

}
