import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsComponent } from './projects.component';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule, MatToolbarModule } from '@angular/material';
import {ViewprojectComponent} from '../viewproject/viewproject.component';
import {AddprojectComponent} from '../addproject/addproject.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ViewtaskComponent} from '../viewtask/viewtask.component';
import {ViewmembersComponent} from '../viewmembers/viewmembers.component';
import {ProjaddComponent} from '../projadd/projadd.component';
import {OtherprojComponent} from '../otherproj/otherproj.component'
import { SharedprojectComponent } from '../sharedproject/sharedproject.component';
import { ViewmemtaskComponent } from '../viewmemtask/viewmemtask.component';

import { MatProgressSpinnerModule,
    MatRadioModule,
    MatSliderModule,
    MatCardModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatButtonModule,


    MatSelectModule,

    


    MatProgressBarModule,
    MatMenuModule,

} from '@angular/material';



const routes: Routes = [
    {path: '', component:ProjectsComponent},
    {path: 'viewproject', component:ViewprojectComponent},
    {path: 'addproject', component:AddprojectComponent},
    {path: 'viewtask', component:ViewtaskComponent},
    {path: 'viewmem', component:ViewmembersComponent},
    {path: 'add', component:ProjaddComponent},
    {path: 'other', component:OtherprojComponent},
    {path: 'share', component:SharedprojectComponent},
    {path: 'othertask', component:ViewmemtaskComponent}
   
  ];
@NgModule({
    imports: [
        MatProgressSpinnerModule,
        MatRadioModule,
        MatSliderModule,
        MatCardModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        MatSelectModule,
        MatProgressBarModule,
        MatMenuModule,
        MatButtonModule,
        CommonModule,
        NgbModule,
        FlexLayoutModule,
        MatSnackBarModule,
        MatToolbarModule,
        MDBBootstrapModule,
        FormsModule,
        ReactiveFormsModule,
       
        RouterModule.forChild(routes)
    ],
    declarations: [   
        ProjectsComponent,
        ViewprojectComponent,
        AddprojectComponent,
        ViewtaskComponent,
        ViewmembersComponent,
        ProjaddComponent,
        OtherprojComponent,
        SharedprojectComponent,
        ViewmemtaskComponent
    ],
    exports: [
        RouterModule,
        
    ],
    providers: [
    ]
})
export class ProjectsModule {
}
