import { Component, OnInit, NgModule } from '@angular/core';
  import { FormControl } from '@angular/forms';
  import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
  import { FormsModule } from '@angular/forms';
  import { BrowserModule } from '@angular/platform-browser';
  import { AuthService } from '../service/auth.service';
  import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';


@NgModule({
  imports: [
  MatDatepickerModule,MatDatepickerInputEvent,
FormsModule,BrowserModule ]
  })

  
  
@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.scss']
})
export class AddprojectComponent implements OnInit {
  tasks:{"taskName":"sheha"};
  data:any;
  public field1:string;
  public field2:string;
  public field3:any;
  public field4:any;
  private projectID:any;
  

  message:"Failed to load Projects";
action:"check";
  constructor(private authservice:AuthService,private snackBar:MatSnackBar,private route: ActivatedRoute,private datepipe:DatePipe) {

    this.route.fragment.subscribe((fragment: string) => {
      this.projectID = fragment;

    });
  this.displayproj(this.projectID);
  

   }


  



  ngOnInit() {
  }

  
  displayproj(pid:any){
    this.authservice.getaProj(pid).subscribe(res => {
      this.data=res["project"];
      
      let field4_date =this.datepipe.transform(this.data[0].endDate, 'yyyy-MM-dd');
      let field3_date =this.datepipe.transform(this.data[0].startDate, 'yyyy-MM-dd');

      //console.log(this.field3_date);
      this.field1=this.data[0].name;
      this.field2=this.data[0].description;
      this.field3=field3_date;
      this.field4=field4_date;

      
     

    },err=> {
      this.snackBar.open(this.message, this.action, {
          duration: 2000,
        });
   
    }
  );

  }
 
updateproj(){
  const newproj = {
    name: this.field1,
    description: this.field2,
    startDate: this.field3,
    endDate: this.field4,
    userId:localStorage.getItem("userId")  };

  this.authservice.UpdProject(newproj,this.projectID).subscribe(res => {
        
    this.snackBar.open("Project update Successfull !", "Refreshing", {
      duration: 2000,
    });
  


},err=> {
this.snackBar.open("Project update Failed", "Retry!", {
  duration: 2000,
});

});




}

}
