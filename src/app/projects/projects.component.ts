import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { MatSnackBar } from '@angular/material';
import swal from 'sweetalert2';
@Component({
  selector: 'cdk-cards',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
public data : any;
message:"Failed to load Projects";
action:"check";

  constructor(private authservice:AuthService,private snackBar:MatSnackBar,private router:Router) { 
   
     this.displayProjects();
     this.authservice.authCheck(localStorage.getItem("tokenid")).subscribe(res => {     
         
    },err=> {
      this.snackBar.open("Authorization Failed", "login", {
          duration: 2000,
        });
      this.router.navigate(["/login"]);  
  
    }); 



  }

  ngOnInit() {
  }

deleteproject(pid){
  
  swal({
    title: 'Are you sure?',
    text: 'Delete your Project',
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes Add',
    cancelButtonText: 'Cancel'
  }).then((result) => {

    if (result.value) {
      this.authservice.delProject(pid,localStorage.getItem('userId')).subscribe(res => {
        this.displayProjects();
        this.snackBar.open("Project Successfully Deleted","Done", {
          duration: 2500,
        });
      },err=> {
        this.snackBar.open("Project Delete Failed", "Retry", {
            duration: 2500,
          });
      
      }
      );


}
});

  


}


displayProjects(){
  this.authservice.getProj(localStorage.getItem("userId")).subscribe(res => {
    this.data=res["project"];
  },err=> {
    this.snackBar.open(this.message, this.action, {
        duration: 2000,
      });
 
  }
);
}





}

