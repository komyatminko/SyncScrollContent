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
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-email-setting',
  imports: [
    NzCardModule,
    NzIconModule,
    NzGridModule,
    NzButtonModule,
    NzSelectModule,
    NzTypographyModule,
    NzInputModule,
    NzFormModule,
    ReactiveFormsModule
  ],
  templateUrl: './email-setting.html',
  styleUrl: './email-setting.css'
})
export class EmailSetting {

  
  emailSettingForm!: FormGroup;

  constructor(private fb: FormBuilder, private i18n: NzI18nService) {
    this.i18n.setLocale(en_US);

    this.emailSettingForm = this.fb.group({
      hostName: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      smtpDebug: [null, Validators.required],
      passValidate: [null, Validators.required],
      port: [null, Validators.required],
      tls: [null, Validators.required],
    })
  }

  // getControl(controlName: string) {
  //   return this.emailSettingForm.get(controlName)?.value;
  // }

  update(){
    console.log('updated value: ', this.emailSettingForm.value);
  }

  reset(){
    this.emailSettingForm.reset();
  }

}
