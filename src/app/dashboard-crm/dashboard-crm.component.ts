import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-dashboard-crm',
  templateUrl: './dashboard-crm.component.html',
  styleUrls: ['./dashboard-crm.component.scss']
})
export class DashboardCrmComponent implements OnInit {
  public ca:any;
  public da:any;
  public co:any;
  public do:any;
  public total:any;
  public dashCard:any;
 message="Authorization Failed Please login";
 action="Login";
    

    tableData = [
        { country: 'India', sales: 5400, percentage: '40%' },
        { country: 'Us', sales: 3200, percentage: '30.33%' },
        { country: 'Australia', sales: 2233, percentage: '18.056%' },
        { country: 'Spaim', sales: 600, percentage: '6%' },
        { country: 'China', sales: 200, percentage: '4.50%' },
        { country: 'Brazil', sales: 100, percentage: '2.50%' },
    ];
    
    constructor(private router:Router,private authservice:AuthService,private snackBar: MatSnackBar) {
      this.getadmincount()
      this.authservice.authCheck(localStorage.getItem("tokenid")).subscribe(res => {     
         


    },err=> {
      this.snackBar.open(this.message, this.action, {
          duration: 2000,
        });
      this.router.navigate(["/login"]);  
  
    }); 


 
  }

    ngOnInit() {
        

    }

getadmincount(){
  var data_:any;
   this.authservice.getOthercount(localStorage.getItem("userId")).subscribe(dat => {     
        data_=dat;
        console.log(data_);
      this.ca=  (data_[1].adminLive)
       this.da= (data_[1].adminDone)
        this.co=(data_[0].otherLive)
        this.do=(data_[0].otherDone)

  this.total=this.ca+this.da+this.co+this.do;
   

 this.dashCard = [
   {colorDark: '#5C6BC0',colorLight: '#7986CB', number:(data_[1].adminLive), title: 'Curent Admin Projects',icon:'assignment_ind'},
   {colorDark: '#42A5F5',colorLight: '#64B5F6', number:(data_[1].adminDone), title: 'Completed Admin Projects',icon:'done'},
  {colorDark: '#26A69A',colorLight: '#4DB6AC', number: (data_[0].otherLive), title: 'Curent other Projects',icon:'assignments'},
  {colorDark: '#66BB6A',colorLight: '#81C784', number: (data_[0].otherDone), title: 'Completed Other Projects',icon:'done_all'}
]



});
 

}




}


