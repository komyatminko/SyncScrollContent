import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { DepartmentModel } from '../../models/department';
import { Type } from '../../enums/type.enum';
import { NzTypographyComponent } from "ng-zorro-antd/typography";

@Component({
  selector: 'app-modal-dialog-box',
  imports: [
    NzModalModule,
    NzGridModule,
    ReactiveFormsModule,
    CommonModule,
    NzTypographyComponent
],
  templateUrl: './modal-dialog-box.html',
  styleUrl: './modal-dialog-box.css'
})
export class ModalDialogBox {
  isVisible = false;
  isOkLoading = false;
  isEditMode = false;

  updatedData: DepartmentModel | null = null;
  modalForm!: FormGroup;

  @Input() type !: string;
  @Input() modalTitle!: string;
  @Input() modalName!: string;

  constructor(private fb: FormBuilder) {
    this.modalForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  // open modal for save
  openForAdd(): void {
    this.isEditMode = false;
    this.modalForm.reset();
    this.isVisible = true;
  }

  // open modal for edit
  openForEdit(data: any): void {
    this.isEditMode = true;
    this.modalForm.patchValue(data);
    this.updatedData = data;
    this.isVisible = true;
  }

  handleSave(): void {
    if (this.modalForm.invalid) return;

    this.isOkLoading = true;
    if (this.type == Type.DEPARTMENT) {
      if (this.isEditMode) {
        // Update
        if (this.updatedData)
          this.updatedData = {
            id: this.updatedData.id,
            name: this.modalForm.value.name,
            description: this.modalForm.value.description
          }
        console.log('Update user:', this.updatedData);

        //update the data in the database here
        setTimeout(() => {
          this.isOkLoading = false;
          this.isVisible = false;
        }, 1000);
      } else {
        // Save
        console.log('Create user:', this.modalForm.value);
      }
    }


  }

  handleCancel(): void {
    this.isVisible = false;
  }

}
