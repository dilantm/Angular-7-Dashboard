import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from '../../users.component';
import { AdministratorComponent } from './administrator.component';

const childRoutes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
        { path: '', redirectTo: 'administrator', pathMatch: 'full' },
        { path: 'administrator', component: AdministratorComponent },
    ]
}
];


export const AdministratorRoutingModule = RouterModule.forChild(childRoutes);
