import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-email-notification-setting',
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
  templateUrl: './email-notification-setting.html',
  styleUrl: './email-notification-setting.css'
})
export class EmailNotificationSetting {

  emailNotiSettingForm!: FormGroup;

  constructor(private fb: FormBuilder, private i18n: NzI18nService) {
    this.i18n.setLocale(en_US);

    this.emailNotiSettingForm = this.fb.group({
      emailNotiTime: ['', Validators.required],
      emailNotiInterval: ['', Validators.required],
      emailCertiTime: ['', Validators.required],
      emailCertiInterval: ['', Validators.required]
    })
  }

  getControl(controlName: string) {
    return this.emailNotiSettingForm.get(controlName)?.value;
  }

  update() {
    console.log('updated value: ', this.emailNotiSettingForm.value);
  }

  reset() {
    this.emailNotiSettingForm.reset();
  }

}
