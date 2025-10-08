import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule, NzTableQueryParams } from 'ng-zorro-antd/table';
import { NzTypographyModule } from 'ng-zorro-antd/typography';


@Component({
  selector: 'app-leave-application-setting',
  imports: [
    NzCardModule,
    NzIconModule,
    NzGridModule,
    NzButtonModule,
    NzSelectModule,
    NzTypographyModule,
    NzInputModule,
    NzTableModule,
    NzPaginationModule,
    NzSwitchModule,
    NzFormModule,
    ReactiveFormsModule
  ],
  templateUrl: './leave-application-setting.html',
  styleUrl: './leave-application-setting.css'
})
export class LeaveApplicationSetting implements OnInit{

  loading = false;
  total = 1;
  pageSize = 5;
  pageIndex = 1;
  leaveAppSettingForm!: FormGroup;

  sortFnSender = (a: any, b: any) => a.sender.localeCompare(b.sender);
  sortFnReceiver = (a: any, b: any) => a.receiver.localeCompare(b.receiver);

  departments: Array<string> = [
    'Sales',
    'Management',
    'Operation',
    'Technical Assistant',
    'Post Sales',
    'Software Development',
    'Human Resource',
    'Information Technology'
  ];
  data = [
  { id: 1, sender: 'Sales', receiver: 'Post Sales' },
  { id: 2, sender: 'Operation', receiver: 'Human Resource' },
  { id: 3, sender: 'Technical Assistant', receiver: 'Human Resource' },
  { id: 4, sender: 'Management', receiver: 'Sales' },
  { id: 5, sender: 'Information Technology', receiver: 'Software Development' },
  { id: 6, sender: 'Post Sales', receiver: 'Technical Assistant' },
  { id: 7, sender: 'Human Resource', receiver: 'Management' },
  { id: 8, sender: 'Software Development', receiver: 'Information Technology' },
  { id: 9, sender: 'Sales', receiver: 'Human Resource' },
  { id: 10, sender: 'Operation', receiver: 'Post Sales' },
  { id: 11, sender: 'Technical Assistant', receiver: 'Sales' },
  { id: 12, sender: 'Management', receiver: 'Information Technology' },
  { id: 13, sender: 'Software Development', receiver: 'Operation' },
  { id: 14, sender: 'Post Sales', receiver: 'Human Resource' },
  { id: 15, sender: 'Human Resource', receiver: 'Sales' },
  { id: 16, sender: 'Information Technology', receiver: 'Operation' },
  { id: 17, sender: 'Sales', receiver: 'Software Development' },
  { id: 18, sender: 'Management', receiver: 'Technical Assistant' }
];

  ngOnInit(): void {
    this.total = this.data.length;
  }
  
  constructor(private fb: FormBuilder, private i18n: NzI18nService) {
    this.i18n.setLocale(en_US);

    this.leaveAppSettingForm = this.fb.group({
      senderDepart: ['', Validators.required],
      receiverDepart: ['', Validators.required],
    })
  }

  onQueryParamsChange(params: NzTableQueryParams): void {

    // Assign each property correctly
    this.pageSize = params.pageSize;
    this.pageIndex = params.pageIndex;

    // this.loadDataFromServer();
  }

  onPageChange(page: number) { this.pageIndex = page; }
  onPageSizeChange(size: number) { this.pageSize = size; }

  getControl(controlName: string) {
    return this.leaveAppSettingForm.get(controlName);
  }

  get firstItemIndex() {
    return (this.pageIndex - 1) * this.pageSize + 1;
  }

  get lastItemIndex() {
    return Math.min(this.pageIndex * this.pageSize, this.data.length);
  }

  save() {
    this.total = this.data.length;
    console.log('updated value: ', this.leaveAppSettingForm.value);
  }

  deleteDepartment(id: number) { }
}
