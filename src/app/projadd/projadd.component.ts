import { Component, OnInit, NgModule } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-projadd',
  templateUrl: './projadd.component.html',
  styleUrls: ['./projadd.component.scss']
})


@NgModule({
  imports: [
  ]
  })
export class ProjaddComponent implements OnInit {
  field1:String;
  field2:String;
  field3:any;
  field4:any;
  constructor(private authservice:AuthService,private snackBar:MatSnackBar,private route: ActivatedRoute,private router:Router) { 

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


addproj(){
  const newproj = {
    name: this.field1,
    description: this.field2,
    AdminId:localStorage.getItem("userId"),
    startDate: this.field3,
    endDate: this.field4
  };

  this.authservice.AddProject(newproj).subscribe(res => {
        
    this.snackBar.open("Project Aded Successfull !", "Refreshing", {
      duration: 2000,
    });
  


},err=> {
this.snackBar.open("Project Aded Failed", "Retry!", {
  duration: 2000,
});

});
}



}
