import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomeruserRoutingModule } from './customeruser-routing.module';
import { EditCustomerUserComponent } from './edit-customer-user/edit-customer-user.component';

@NgModule({
  declarations: [EditCustomerUserComponent],
  imports: [
    CommonModule,
    CustomeruserRoutingModule
  ]
})
export class CustomeruserModule { }
