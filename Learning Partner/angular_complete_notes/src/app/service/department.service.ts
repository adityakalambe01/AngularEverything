import {Constants } from '../constant/Constants';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  onRoleChange$: Subject<string> = new Subject<string>();

  constt = inject(Constants);
  http = inject(HttpClient);

  getAllDepartments() {
    return this.http.get(this.constt.API_URL + this.constt.DEPT_METHODS.GET);
  }

  addNewDepartment(newDeptObj: any) {
    return this.http.post(
      this.constt.API_URL + this.constt.DEPT_METHODS.POST,
      newDeptObj
    );
  }

  updateDepartment(updateDept: any) {
    return this.http.post(
      this.constt.API_URL + this.constt.DEPT_METHODS.UPDATE,
      updateDept
    );
  }

  deleteDepartment(deptId: number) {
    return this.http.delete(
      this.constt.API_URL + this.constt.DEPT_METHODS.DELETE + deptId
    );
  }
}
