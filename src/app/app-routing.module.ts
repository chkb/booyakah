import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/core/auth-guard.service';
import { WorkspaceDashboardComponent } from './workspace/workspace-dashboard/workspace-dashboard.component';

const routes: Route[] = [
  {
    path: '',
    redirectTo: '/workspace',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      breadcrumb: 'login'
    },
  },
  {
    path: 'workspace',
    component: WorkspaceDashboardComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
