import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';;
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-password-setting',
  imports: [
    NzCardModule,
    NzIconModule,
    NzGridModule,
    NzButtonModule,
    NzTypographyModule,
    NzInputModule,
    NzFormModule,
    ReactiveFormsModule
  ],
  templateUrl: './password-setting.html',
  styleUrl: './password-setting.css'
})
export class PasswordSetting {

  passwordVisible: boolean = false;
  passSettingForm!: FormGroup;

  constructor(private fb: FormBuilder, private i18n: NzI18nService) {
    this.i18n.setLocale(en_US);

    this.passSettingForm = this.fb.group({
      currentPass: ['', Validators.required],
      newPass: ['', Validators.required],
      confirmPass: ['', Validators.required]
    })
  }

  // getControl(controlName: string) {
  //   return this.passSettingForm.get(controlName)?.value;
  // }

  update() {
    console.log('updated value: ', this.passSettingForm.value);
  }

  reset() {
    this.passSettingForm.reset();
  }

}
