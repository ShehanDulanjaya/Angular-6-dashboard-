import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sharedproject',
  templateUrl: './sharedproject.component.html',
  styleUrls: ['./sharedproject.component.scss']
})
export class SharedprojectComponent implements OnInit {
public feild5:File
  constructor() { 


}
  ngOnInit() {
  }
 

  view(event){
    this.feild5 = event.target.files;
    console.log(this.feild5); 
  }
}
