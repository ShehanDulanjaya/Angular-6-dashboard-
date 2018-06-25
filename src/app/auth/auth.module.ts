import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

// import { Ng2PageTransitionModule } from "ng2-page-transition";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { CoreModule } from '../core/core.module';

export const appRoutes: Routes = [{ 
      path:'',component: AuthComponent, children: [
        {path: 'dashboard', loadChildren: '../dashboard-crm/dashboard-crm.module#DashboardCrmModule'},
         {path: 'projects', loadChildren: '../projects/projects.module#ProjectsModule'},
      ]}
  ]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    CoreModule,
    MatSidenavModule,
    PerfectScrollbarModule,
    // Ng2PageTransitionModule
  ],
  declarations: [AuthComponent], 
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class AuthModule { }
