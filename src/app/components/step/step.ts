import { Component } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzFormModule } from "ng-zorro-antd/form";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-step',
  imports: [
    NzStepsModule,
    NzDividerModule,
    NzFormModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './step.html',
  styleUrl: './step.css'
})
export class Step {

  currentStep = 0;
  step1Form: FormGroup;
  step2Form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.step1Form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    this.step2Form = this.fb.group({
      address: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  nextStep() {
    if (this.isStepValid(this.currentStep)) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  isStepValid(step: number): boolean {
    if (step === 0) {
      return this.step1Form.valid;
    }
    if (step === 1) {
      return this.step2Form.valid;
    }
    return true;
  }

  submitForm() {
    if (this.step1Form.valid && this.step2Form.valid) {
      const finalData = {
        ...this.step1Form.value,
        ...this.step2Form.value,
      };
      console.log('Form submitted:', finalData);
    }
  }
}
