import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute,Router } from '@angular/router';
import swal from 'sweetalert2';
import 'rxjs/add/operator/catch';
import { Location } from "@angular/common";
@Component({
  selector: 'app-viewmembers',
  templateUrl: './viewmembers.component.html',
  styleUrls: ['./viewmembers.component.scss']
})
export class ViewmembersComponent implements OnInit {
  public projectID;
  public user : any;
  public mem : any;
  constructor(private authservice:AuthService,private snackBar:MatSnackBar,private route: ActivatedRoute,private router:Router,private location:Location) { 

    this.route.fragment.subscribe((fragment: string) => {
      this.projectID = fragment;

    });

    this.viewmem();
    this.viewprojectmem();

  }

  ngOnInit() {
  }

  addmem(id,name){

    swal({
      title: 'Are you sure?',
      text: 'Add '+name+' to your Project',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes Add',
      cancelButtonText: 'Cancel'
    }).then((result) => {
  
      if (result.value) {

    const newmem = {
      projectId:this.projectID,
      name: name,
      mem_id: id,
      userid:localStorage.getItem("userId")

    };

    this.authservice.addmem(newmem).subscribe(res => {
          
      this.snackBar.open("Member Add Successfull !", "Refreshing", {
        duration: 2000,
      });
      this.viewprojectmem();
      
     


},err=> {
  this.snackBar.open(err["error"]["message"], "Retry!", {
    duration: 2000,
  });

  });

}
});

  
}

////////////
delmem(id,name){

  swal({
    title: 'Are you sure?',
    text: 'Delete '+name+' from your Project',
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes Delete',
    cancelButtonText: 'Cancel'
  }).then((result) => {

    if (result.value) {


  this.authservice.delprojectmem(id).subscribe(res => {
        
    this.snackBar.open("Member delete Successfull !", "Refreshing", {
      duration: 2000,
    });
    this.viewprojectmem();

},err=> {
this.snackBar.open("Member delete Failed", "Retry!", {
  duration: 2000,
});

});

}
});


}


viewmem(){
  this.authservice.getallusers(localStorage.getItem('email')).subscribe(res => {
    this.user=res["users"];
  },err=> {
    this.snackBar.open("User Retrive Failed !","retry", {
        duration: 2000,
      });
 
  }
);
}

viewprojectmem(){

  this.authservice.getprojectmem(this.projectID).subscribe(res => {
    this.mem=res["projectmems"];
    console.log(res)
  },err=> {
    this.snackBar.open("Project Users Failed !","retry", {
        duration: 2000,
      });
 
  }
);
}


}
