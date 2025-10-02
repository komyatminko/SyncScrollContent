
import { inject, Injectable } from '@angular/core';
import { DepartmentModel } from '../models/department';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  BASE_URL = 'http://localhost:8080/api/departments';

  private _departmentData: Array<DepartmentModel> = [];
  private _departments: BehaviorSubject<Array<DepartmentModel>> = new BehaviorSubject<Array<DepartmentModel>>([]);
  public readonly departments: Observable<Array<DepartmentModel>> = this._departments.asObservable();

  http = inject(HttpClient);

  getAllDepartments() {
    this.http.get<DepartmentModel[]>(this.BASE_URL).subscribe((data) => {
      this._departmentData = data;
      this.emitChange();
    });
  }

  saveBook(department: DepartmentModel) {
    this.http.post<DepartmentModel>(this.BASE_URL + '/save', department)
    .pipe(
      map((newDepartment) => {
        this._saveDepartment(newDepartment);
        return newDepartment;
      })
    )
  }

  _saveDepartment(department: DepartmentModel) {
    this._departmentData.push(department);
    this.emitChange();
  }

  updateBook(department: DepartmentModel): Observable<DepartmentModel> {
    return this.http.put<DepartmentModel>(`${this.BASE_URL}`, department).pipe(
      map((updatedDepartment) => {
        this._updateBook(updatedDepartment);
        return updatedDepartment;
      })
    );
  }

  _updateBook(department: DepartmentModel) {
    this._departmentData = this._departmentData.map(oldDepart => oldDepart.id === department.id ? department : oldDepart);
    this.emitChange();
  }

  deleteBook(department: DepartmentModel): Observable<DepartmentModel> {
    return this.http.delete<DepartmentModel>(`${this.BASE_URL}/'delete'/${department.id}`);
    // .pipe(
    //   map((deletedDepartment) => {
    //     this._deleteBook(deletedDepartment);
    //     // callback();
    //     return deletedDepartment;
    //   })
    // )
  }

  // _deleteBook(department: DepartmentModel) {
  //   this._departmentData = this._departmentData.filter(depart => department.id != depart.id);
  //   this.emitChange();
  // }

  private emitChange() {
    this._departments.next(this._departmentData);
  }
}





