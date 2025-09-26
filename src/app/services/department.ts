import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartmentModel } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class Department {

  BASE_URL = 'http://localhost:8080/api/departments';
  
  http = inject(HttpClient);

  getAllDepartments() : Observable<DepartmentModel[]> {
    return this.http.get<DepartmentModel[]>(this.BASE_URL);
  }
}
