import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { EditCustomerUserComponent } from './components/customeruser/edit-customer-user/edit-customer-user.component';

const childRoutes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
        { 
          path: '', 
          redirectTo: 'administrator', 
          pathMatch: 'full' ,
        },
        { 
          path: 'administrator', 
          loadChildren: './components/administrator/administrator.module#AdministratorModule',
          children: 
          [
            // { 
            //   path: 'edit-admin', 
            //   component: EditAdminComponent 
            // },
          ]
        },
        { 
          path: 'customeruser', 
          loadChildren: './components/customeruser/customeruser.module#CustomeruserModule',
          children: 
          [
             { 
               path: 'edit-customer-user/:id', 
               component: EditCustomerUserComponent 
             },
          ] 
        },
        // { 
        //   path: 'guest-user', 
        //   component: GuestUserComponent 
        // },
        // { 
        //   path: 'edit-admin', 
        //   component: EditAdminComponent 
        // }

    ]
  }
];
export const UsersRoutingModule = RouterModule.forChild(childRoutes);
