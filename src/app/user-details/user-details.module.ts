import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsRoutingModule } from './user-details-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';


@NgModule({
  declarations: [UserDetailsComponent],
  imports: [
    CommonModule,
    UserDetailsRoutingModule,
    HttpClientModule
  ]
})
export class UserDetailsModule { }
