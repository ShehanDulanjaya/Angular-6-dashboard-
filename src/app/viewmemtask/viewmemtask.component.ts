import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-viewmemtask',
  templateUrl: './viewmemtask.component.html',
  styleUrls: ['./viewmemtask.component.scss']
})
export class ViewmemtaskComponent implements OnInit {
  public projectID;
  public tasks : any;
  constructor(private authservice:AuthService,private snackBar:MatSnackBar,private route: ActivatedRoute,private router:Router) {


    this.route.fragment.subscribe((fragment: string) => {
      this.projectID = fragment;

    });
      
    this.gettask(this.projectID);
 
   }

  ngOnInit() {
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
