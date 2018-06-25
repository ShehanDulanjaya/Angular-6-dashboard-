import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LazyLoadModule } from './lazy-load/lazy-load.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { SweetAlert2Module} from '@toverux/ngx-sweetalert2';
import { HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AuthService } from './service/auth.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule,  } from '@angular/forms';









@NgModule({
  declarations: [
    AppComponent,
    
    
 
  
    
    
    
    
  
    
   
    
  ],
  imports: [
    CommonModule,
    LazyLoadModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    SweetAlert2Module,
    NgbModule.forRoot(),
    
    
    MDBBootstrapModule.forRoot(),
    

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
