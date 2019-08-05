import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomeruserComponent } from './customeruser.component';
import { UsersComponent } from '../../users.component';

const childRoutes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
        { path: '', redirectTo: 'customeruser', pathMatch: 'full' },
        { path: 'customeruser', component: CustomeruserComponent },
    ]
}
];
export const CustomeruserRoutingModule = RouterModule.forChild(childRoutes);