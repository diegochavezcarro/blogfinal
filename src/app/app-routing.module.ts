import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent,LoginComponent,AddPostComponent} from './component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Login',  component: LoginComponent },
  { path: 'Addpost', component: AddPostComponent }    
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
