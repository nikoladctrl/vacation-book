import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { DepartmentService } from '../feature/services/department.service';



@Injectable()
export class DepartmentEffects {



  constructor(
    private actions$: Actions, 
    private store: Store<AppState>, 
    private departmentService: DepartmentService,
    private router: Router) { } 

}
