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
  ],
  templateUrl: './modal-dialog-box.html',
  styleUrl: './modal-dialog-box.css'
})
export class ModalDialogBox {
  isVisible = false;
  isOkLoading = false;
  isEditMode = false;

  updatedDepartment: DepartmentModel | null = null;
  modalForm!: FormGroup;

  @Input() type !: string;
  @Input() modalTitle!: string;
  @Input() modalName!: string;

  constructor(private fb: FormBuilder) {
    this.modalForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['']
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
    this.updatedDepartment = data;
    this.isVisible = true;
  }

  handleSave(): void {
    if (this.modalForm.invalid) return;

    this.isOkLoading = false;

    if (this.type == Type.DEPARTMENT) {
      if (this.isEditMode) {
        // Update
        this.updateDepartment();
      } else {
        // Save
        this.saveDepartment();
      }
    }
    this.isVisible = false;

  }

  updateDepartment() {
    if (this.updatedDepartment)
      this.updatedDepartment = {
        id: this.updatedDepartment.id,
        name: this.modalForm.value.name,
        description: this.modalForm.value.description
      }
    console.log('Update Department:', this.updatedDepartment);
  }

  saveDepartment(): void {
    if (this.modalForm.valid) {
      const departmentName = this.modalForm.get('name')?.value;
      const description = this.modalForm.get('description')?.value;
      let newDepartment: DepartmentModel = {
        name: departmentName,
        description: description
      }
      console.log('New Department:', newDepartment);
      this.modalForm.reset();
      this.isVisible = false;
    } else {
      this.modalForm.markAllAsTouched();
    }
  }

  handleCancel(): void {
    this.isVisible = false;
  }

}
