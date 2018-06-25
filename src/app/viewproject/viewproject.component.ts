import { Component, OnInit } from '@angular/core';

import { AuthService } from '../service/auth.service';
import { MatSnackBar } from '@angular/material';


import{ 
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatListModule,
       } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {  ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-viewproject',
  templateUrl: './viewproject.component.html',
  styleUrls: ['./viewproject.component.scss']
})
export class ViewprojectComponent implements OnInit {
public data:any;

private projectID:any;
message:"Failed to load Projects";
action:"check now";

  constructor(private authservice:AuthService,private snackBar:MatSnackBar,private route: ActivatedRoute,private router:Router) { 

    this.authservice.authCheck(localStorage.getItem("tokenid")).subscribe(res => {     
         
    },err=> {
      this.snackBar.open("Authorization Failed", "login", {
          duration: 2000,
        });
      this.router.navigate(["/login"]);  
  
    }); 




    this.route.fragment.subscribe((fragment: string) => {
      this.projectID = fragment;

    });
    this.authservice.getaProj(this.projectID).subscribe(res => {
      this.data=res["project"];
      console.log(this.data);

    },err=> {
      this.snackBar.open(this.message, this.action, {
          duration: 2000,
        });
   
    }
  );
  }

  ngOnInit() {
  }

}
