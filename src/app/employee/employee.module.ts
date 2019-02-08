import { NgModule } from '@angular/core';

import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';

@NgModule({
  declarations: [
    EmployeeEditComponent,
    EmployeeListComponent,
    EmployeeViewComponent
  ],
  exports: [
    EmployeeEditComponent,
    EmployeeListComponent,
    EmployeeViewComponent
  ],
  providers: [],
  bootstrap: []
})

export class EmployeeModule { }
