import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import {  NzTypographyModule } from "ng-zorro-antd/typography";

@Component({
  selector: 'app-employee',
  imports: [
    NzCardModule,
    NzIconModule,
    NzGridModule,
    NzTabsModule,
    NzButtonModule,
    NzTypographyModule,
    NzDividerModule,
    CommonModule
],
  templateUrl: './employee.html',
  styleUrl: './employee.css'
})
export class Employee implements OnInit{

  employeeType: string = 'all';

  employees: Array<any> = [
    { id: 1, name: 'Aung Min', position: 'Software Engineer', department: 'IT', country: 'Myanmar' },
    { id: 2, name: 'Kyaw Kyaw', position: 'HR Manager', department: 'Human Resources', country: 'Myanmar' },
    { id: 3, name: 'John Tan', position: 'Project Manager', department: 'Operations', country: 'Singapore' },
    { id: 4, name: 'Moe Moe', position: 'Accountant', department: 'Finance', country: 'Myanmar' },
    { id: 5, name: 'Sarah Lim', position: 'UI/UX Designer', department: 'Design', country: 'Singapore' },
    { id: 6, name: 'David Ong', position: 'QA Engineer', department: 'Quality Assurance', country: 'Singapore' },
    { id: 7, name: 'Thida Aye', position: 'Marketing Executive', department: 'Marketing', country: 'Myanmar' },
    { id: 8, name: 'Zaw Win', position: 'System Administrator', department: 'IT', country: 'Myanmar' }
  ];

  filterEmps: Array<any> = [];

  ngOnInit(): void {
    this.filterEmps = this.employees;
  }

  filterByEmpType(type: string) {
    this.employeeType = type;
    if (this.employeeType === 'all')
      this.filterEmps = this.employees;
    else 
      this.filterEmps = this.employees.filter(emp => emp.country.toLowerCase() === this.employeeType.toLowerCase())
    
    console.log('filter emps', this.filterEmps)
  }

}
