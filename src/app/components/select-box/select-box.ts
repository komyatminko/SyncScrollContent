import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-select-box',
  imports: [
    CommonModule, FormsModule, NzSelectModule, NzInputModule, NzAutocompleteModule
  ],
  templateUrl: './select-box.html',
  styleUrl: './select-box.css'
})
export class SelectBox {

  constructor(private i18n: NzI18nService) {
    this.i18n.setLocale(en_US);
  }
  options = ['Apple', 'Banana', 'Orange'];
  selectedValue: string | null = null;
}
