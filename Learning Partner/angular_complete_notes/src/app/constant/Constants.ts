import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // or provide it in a specific module
})
export class Constants {
  API_URL: string = 'https://projectapi.gerasim.in/api/Complaint/';
  DEPT_METHODS = {
    GET: 'GetParentDepartment',
    POST: 'AddNewDepartment',
    UPDATE: 'UpdateDepartment',
    DELETE: 'DeletedepartmentBydepartmentId?departmentId=',
  };
  constructor() {}

  USER_API = 'https://projectapi.gerasim.in/api/UserApp/login';
}
