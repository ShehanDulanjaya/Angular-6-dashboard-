import { NgModule } from '@angular/core';
import { ViewprojectComponent } from './viewproject.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { 
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatListModule,
       } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
const routes: Routes = [
    {path: '', component: ViewprojectComponent},
    
  ];
@NgModule({
    imports: [
        MatCardModule,
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatListModule,
        FormsModule,
        ReactiveFormsModule,
        MDBBootstrapModule.forRoot(),
        RouterModule.forChild(routes),
        NgbModule.forRoot()
    ],
    declarations: [   
       ViewprojectComponent,
       
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})
export class ViewProjectModule {
}
