import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { DepartmentService } from '../../services/department-service';

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
    ReactiveFormsModule
  ],
  templateUrl: './department.html',
  styleUrls: ['./department.css']
})
export class Department implements OnInit {

  departments: DepartmentModel[] = Array.from({ length: 309 }, (_, i) => ({
    id: i + 1,
    name: `Department ${i + 1}`,
    description: `Description ${i + 1}`
  }));
  filteredDepartments: DepartmentModel[] = [...this.departments];

  // date: Date | null = null;

  Type = Type; // to use enum in HTML
  selectedDepartment: string | null = null;
  modalTitle = 'Create/Edit Department';
  modalName = 'Department Name';
  loading = false;
  total = 1;
  pageSize = 10;
  pageIndex = 1;
  searchForm!: FormGroup


  sortFnName = (a: DepartmentModel, b: DepartmentModel) => a.name.localeCompare(b.name);
  sortFnDesc = (a: DepartmentModel, b: DepartmentModel) => a.description.localeCompare(b.description);

  ngOnInit(): void {

  }

  constructor(
    private i18n: NzI18nService, 
    private fb: FormBuilder,
    private departmentService: DepartmentService) {

    // Set the locale to English
    this.i18n.setLocale(en_US);

    // Fetch all departments from the service
    this.departmentService.getAllDepartments();

    this.searchForm = this.fb.group({
      keyword: ['']
    })
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

  search(): void {
    const keyword = this.searchForm.get('keyword')?.value?.toLowerCase() || '';
    console.log('Searching for:', keyword);
    this.filteredDepartments = [];
    this.filteredDepartments = this.departments.filter(
      d =>
        d.name.toLowerCase().includes(keyword)
        // || d.description.toLowerCase().includes(keyword)
    );
    console.log(this.filteredDepartments);
    // this.searchForm.reset();
    this.total = this.filteredDepartments.length;


  }

  onPageChange(page: number) { this.pageIndex = page; }
  onPageSizeChange(size: number) { this.pageSize = size; }

  loadDataFromServer(): void {
    //here, call your backend API to get the data and assign the data to your department array
    this.departmentService.departments.subscribe(data => {
      console.log('Received departments from service:', data);
    });
    this.loading = false;
    this.total = this.filteredDepartments.length;
  }

  deleteDepartment(id: number | undefined): void {
    if(id){
      console.log('Delete Department with ID:', id);
      this.departments = this.departments.filter(dept => dept.id !== id);
      this.filteredDepartments = this.departments;
      this.total = this.filteredDepartments.length;
    }
  }

  get firstItemIndex() {
    return (this.pageIndex - 1) * this.pageSize + 1;
  }

  get lastItemIndex() {
    return Math.min(this.pageIndex * this.pageSize, this.filteredDepartments.length);
  }
}


