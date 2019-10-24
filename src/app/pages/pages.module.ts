import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';

import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '../shared/layout.module';

/* Components*/

import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { UsersModule } from './users/users.module';


@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule,
    routing
],
declarations: [
    PagesComponent,
    LoginComponent
]
})
export class PagesModule { }
