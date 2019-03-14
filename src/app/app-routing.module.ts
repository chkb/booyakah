import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/core/auth-guard.service';
import { WorkspaceDashboardComponent } from './workspace/workspace-dashboard/workspace-dashboard.component';

const routes: Route[] = [
  {
    path: '',
    redirectTo: '/legegruppe',
    pathMatch: 'full'
  },
  {
    path: 'legegruppe',
    component: WorkspaceDashboardComponent,
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
