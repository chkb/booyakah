import 'hammerjs';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';
import { EventModule } from './event/event.module';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/core/auth-guard.service';
import { LoginProviderService } from './shared/core/login-provider.service';
import { MaterialModule } from './shared/material.module';
import { CrudService } from './shared/services/crud-service/crud.service';
import { CookieService, LocalStorageService, WindowRef } from './shared/services/localstorage-service';
import { TableViewComponent } from './table-view/table-view.component';
import { WorkspaceModule } from './workspace/workspace.module';


@NgModule({
  declarations: [
    AppComponent,
    TableViewComponent,
    LoginComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase, 'electron-app'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    EventModule,
    EmployeeModule,
    WorkspaceModule
  ],
  providers: [
    CrudService,
    LoginProviderService,
    AuthGuard,
    LocalStorageService,
    CookieService,
    WindowRef,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
