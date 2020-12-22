import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: 'registration',
  loadChildren: './registration/registration.module#RegistrationModule'
},
{
  path: 'login',
  loadChildren: './login/login.module#LoginModule'
},
{
  path: 'user-details',
  loadChildren: './user-details/user-details.module#UserDetailsModule'
},
{
  path: 'file-upload',
  loadChildren: './file-upload/file-upload.module#FileUploadModule'
},
{
  path: '',
  redirectTo: '',
  pathMatch: 'full'
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
