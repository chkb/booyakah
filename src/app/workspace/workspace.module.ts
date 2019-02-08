import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../shared/material.module';
import { WorkspaceCreateComponent } from './workspace-create/workspace-create.component';
import { WorkspaceDashboardComponent } from './workspace-dashboard/workspace-dashboard.component';
import { WorkspaceViewComponent } from './workspace-view/workspace-view.component';

@NgModule({
  declarations: [
    WorkspaceCreateComponent,
    WorkspaceViewComponent,
    WorkspaceDashboardComponent
  ],
  exports: [
    WorkspaceCreateComponent,
    WorkspaceViewComponent,
    WorkspaceDashboardComponent
  ],
  imports: [
    MaterialModule,
    FlexLayoutModule
  ]
})

export class WorkspaceModule { }
