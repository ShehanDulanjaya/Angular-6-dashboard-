import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute,Router } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.scss']
})
export class ViewtaskComponent implements OnInit {
  field1:String;
  field2:String;
  field3:any;
  field4:any;
public projectID;
  public tasks : any;


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
      
    this.gettask(this.projectID);



  }

  ngOnInit() {
  }

  deleteTask(tid){

    swal({
      title: 'Are you sure?',
      text: 'You want to delete this task',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes Add',
      cancelButtonText: 'Cancel'
    }).then((result) => {
  
      if (result.value) {
    this.authservice.delTask(tid).subscribe(res => {
      this.snackBar.open("Task Delete Successfull", "refreshing", {
        duration: 2000,
      });
      this.gettask(this.projectID);


    },err=> {
      this.snackBar.open("Task Delete Failed !", "retry", {
          duration: 2000,
        });
   
    }
  );

}})
  }


  addtask(){
    const newtask = {
      projectID:this.projectID,
      task: this.field1,
      description: this.field2,
      startdate: this.field3,
      enddate: this.field4
    };

    this.authservice.addTask(newtask).subscribe(res => {
          
      this.snackBar.open("Task Aded Successfull !", "Refreshing", {
        duration: 2000,
      });
     this.gettask(this.projectID);


},err=> {
  this.snackBar.open("Task Aded Failed", "Retry!", {
    duration: 2000,
  });

  });


    ////
  }


gettask(pid:any){
  this.authservice.getTask(pid).subscribe(res => {
    this.tasks=res["project"];
  },err=> {
    this.snackBar.open("Project Retrive Failed !","retry", {
        duration: 2000,
      });
 
  }
);
}


}
