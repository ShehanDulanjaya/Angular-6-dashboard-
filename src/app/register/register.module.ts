import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule, Routes } from '@angular/router'; 
import { 
  MatCardModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatInputModule,
  MatToolbarModule
 } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule , ReactiveFormsModule} from '@angular/forms';


const appRoutes: Routes = [
    { path: '', component: RegisterComponent },
]

@NgModule({
  imports: [
  CommonModule,
  MatCardModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatInputModule,
  MatToolbarModule,
  FlexLayoutModule,
  FormsModule,
  ReactiveFormsModule,
    RouterModule.forChild(appRoutes),
  ],
  declarations: [RegisterComponent],
  exports: [
    RouterModule
],
providers:[]
})
export class RegisterModule { }
