import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { MatSnackBar } from '@angular/material';
import swal from 'sweetalert2';
@Component({
  selector: 'app-otherproj',
  templateUrl: './otherproj.component.html',
  styleUrls: ['./otherproj.component.scss']
})
export class OtherprojComponent implements OnInit {
  public data : any;
  constructor(private authservice:AuthService,private snackBar:MatSnackBar,private router:Router) { 

    this.authservice.authCheck(localStorage.getItem("tokenid")).subscribe(res => {     
         
    },err=> {
      this.snackBar.open("Authorization Failed", "login", {
          duration: 2000,
        });
      this.router.navigate(["/login"]);  
  
    }); 

    this.displayProjects();



  }

  ngOnInit() {
  }


  displayProjects(){
    this.authservice.getotherProj(localStorage.getItem("userId")).subscribe(res => {
      this.data=res['projectmems'];
      console.log(this.data);

    },err=> {
      this.snackBar.open("FAiled to load", "Retry", {
          duration: 2000,
        });
   
    }
  );
  }

  viewproject(pid:any){
    this.router.navigate(['/auth/projects/othertask'], { fragment: pid });
  }

}
