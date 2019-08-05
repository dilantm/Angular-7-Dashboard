import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { AdministratorModule } from './components/administrator/administrator.module';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalModule } from 'ngx-modal';
import { CustomeruserComponent } from './components/customeruser/customeruser.component';
import { CustomeruserModule } from './components/customeruser/customeruser.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdministratorComponent,
    UsersComponent,
    CustomeruserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AdministratorModule,
    CustomeruserModule,
    SharedModule,
    ModalModule,
    NgxPaginationModule,
    FormsModule      
  ]
})
export class UsersModule { }
