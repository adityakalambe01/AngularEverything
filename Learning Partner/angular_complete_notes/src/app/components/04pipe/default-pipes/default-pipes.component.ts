import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Lists } from '../../Utility';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from "../custom-pipe/na.pipe";
import { DepartmentService } from '../../../service/department.service';

@Component({
  selector: 'app-default-pipes',
  standalone: true,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    JsonPipe,
    AsyncPipe,
    NaPipe,
  ],
  templateUrl: './default-pipes.component.html',
  styleUrl: './default-pipes.component.css',
})
export class DefaultPipesComponent {
  firstName: string = 'aDitya';
  lastName: string = 'kalAmbe';
  fullName: string = this.firstName.concat(' ').concat(this.lastName);

  currentDate: Date = new Date();

  // for Json Pipe
  student: any = {
    studId: 76,
    totalMarks: 50,
    gender: 'male',
    name: 'FFF',
    city: 'Thane',
    isActive: true,
    state: undefined,
  };

  // for async pipe
  currentTime: Observable<Date> = new Observable<Date>();
  currentRole: string = '';

  deptService = inject(DepartmentService);
  constructor() {
    // this.currentTime = interval(1000).pipe(map(() => new Date()));
    this.deptService.onRoleChange$.subscribe((res: string) => {
      // debugger;
      this.currentRole = res;
    });
  }
}

