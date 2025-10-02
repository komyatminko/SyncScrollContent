import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerComponent, NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-start-end-date',
  imports: [
    FormsModule,
    NzDatePickerModule,
    NzUploadModule,
    NzIconModule,
    NzButtonModule,
    NzSwitchModule,
  ],
  templateUrl: './start-end-date.html',
  styleUrl: './start-end-date.css'
})
export class StartEndDate {

  startValue: Date | null = null;
  endValue: Date | null = null;

  constructor(private i18n: NzI18nService) {
    this.i18n.setLocale(en_US);
  }

  // Helper to normalize date (set time to 0:00:00)
  normalizeDate = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());

  disabledStartDate = (startValue: Date): boolean => {
    if (!startValue || !this.endValue) return false;

    return this.normalizeDate(startValue).getTime() > this.normalizeDate(this.endValue).getTime();
  };

  disabledEndDate = (endValue: Date): boolean => {
    if (!endValue || !this.startValue) return false;

    return this.normalizeDate(endValue).getTime() < this.normalizeDate(this.startValue).getTime();
  };


  ////////////////////////for upload////////////////////////
  readonly #messageService = inject(NzMessageService);
  beforeUpload = (file: NzUploadFile): boolean => {
    const isPdf = file.type === 'application/pdf';
    console.log('File type:', file);
    if (!isPdf) {
      this.#messageService.error('You can only upload pdf file!');
    }
    return isPdf;
  };


  /////////////////////////for switch////////////////////////
  switchValue = false;
  loading = false;

  clickSwitch(): void {
    if (!this.loading) {
      this.loading = true;
      setTimeout(() => {
        this.switchValue = !this.switchValue;
        this.loading = false;
      }, 3000);
    }
  }
}
