import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule, NzCheckboxOption } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-checkbox',
  imports: [
    NzCheckboxModule,
    NzRadioModule,
    NzInputModule,
    NzFormModule,
    NzSelectModule,
    NzButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.css'
})
export class Checkbox {

  personForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.personForm = this.fb.group({
      name: ['', Validators.required],
      subject: [['Java'], Validators.required],
      gender: ['Male', Validators.required],
      province: ['Yangon', Validators.required],
      city: ['Hlaing', Validators.required]
    });

    this.personForm.get('province')?.valueChanges.subscribe(data => {
      this.personForm.patchValue({
        city: this.cityData[data][0]
      }
      );
    });
  }

  options: NzCheckboxOption[] = [
    { label: 'Java', value: 'Java' },
    { label: 'Python', value: 'Python' },
    { label: 'C#', value: 'C#' }
  ];

  provinceData = ['Yangon', 'Sagaing'];
  cityData: { [place: string]: string[] } = {
    Yangon: ['Hlaing', 'Insein', 'Kamayut', 'Bahan'],
    Sagaing: ['Monywa', 'Innwa', 'ShweBo']
  };

  submit() {
    console.log('submitted form value', this.personForm.value);
  }
}
