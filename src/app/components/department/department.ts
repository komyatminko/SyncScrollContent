import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule, NzTableQueryParams } from 'ng-zorro-antd/table';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { DepartmentModel } from '../../models/department';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ModalDialogBox } from '../modal-dialog-box/modal-dialog-box';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { Type } from '../../enums/type.enum';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [
    NzSelectModule,
    NzFormModule,
    NzTypographyModule,
    NzCardModule,
    NzDatePickerModule,
    NzGridModule,
    NzButtonModule,
    NzTableModule,
    NzIconModule,
    NzPaginationModule,
    NzModalModule,
    FormsModule,
    CommonModule,
    ModalDialogBox,
  ],
  templateUrl: './department.html',
  styleUrls: ['./department.css']   // note: styleUrls, not styleUrl
})
export class Department {

  departments: DepartmentModel[] = Array.from({ length: 309 }, (_, i) => ({
    id: i + 1,
    name: `Department ${i + 1}`,
    description: `Description ${i + 1}`
  }));

  // date: Date | null = null;

  Type = Type; // to use enum in HTML
  selectedDepartment: string | null = null;
  modalTitle = 'Create/Edit Department';
  modalName = 'Department Name';
  loading = false;
  total = 1;
  pageSize = 10;
  pageIndex = 1;

  sortFnName = (a: DepartmentModel, b: DepartmentModel) => a.name.localeCompare(b.name);
  sortFnDesc = (a: DepartmentModel, b: DepartmentModel) => a.description.localeCompare(b.description);

  constructor(private i18n: NzI18nService) {
    this.i18n.setLocale(en_US);
  }

  // onChange(event: Date | null): void {
  //   console.log(event);
  //   this.date = event;
  // }

  onQueryParamsChange(params: NzTableQueryParams): void {

    // Assign each property correctly
    this.pageSize = params.pageSize;
    this.pageIndex = params.pageIndex;

    this.loadDataFromServer();
  }

  onPageChange(page:number){ this.pageIndex = page; }
  onPageSizeChange(size:number){ this.pageSize = size; }

  loadDataFromServer(): void {
    //here, call your backend API to get the data and assign the data to your department array
    this.loading = false;
    this.total = this.departments.length;
  }

  get firstItemIndex() {
    return (this.pageIndex - 1) * this.pageSize + 1;
  }

  get lastItemIndex() {
    return Math.min(this.pageIndex * this.pageSize, this.departments.length);
  }
}


