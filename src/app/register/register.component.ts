import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import swal from 'sweetalert2';
import { AuthService } from '../service/auth.service';
import 'rxjs/add/operator/catch';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  regForm: FormGroup;
  //formErrors: {email?: string, password?: string,name?:string,repassword?:string} = {};
  //register: {email?: string, name?: string,password?:string,repassword?:string} = {};
  email: String;
  name: String;
password: String;



  
  formErrors = {
    'email': '',
    'name': '',
    'password': '',
    
    
  };
  validationMessages = {
    'email': {
      'required': 'Please enter your email',
      'email': 'please enter your vaild email'
    },
    'name': {
      'required': 'Please enter your name',
      'name':'Letters Only'
    },
    'password': {
      'required': 'please enter your password',
      'minlength': 'Please enter more than 4 characters',
      'maxlength': 'Please enter less than 25 characters',
    },
    
  };

  constructor(private router: Router,
    private fbg: FormBuilder, private http: HttpClient,private authservice:AuthService ) {

     }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.regForm = this.fbg.group({
      'email': ['', [
        Validators.required,
        Validators.email
      ]
      ],
      'password': ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(25)
        
      ]
      ],
      
      'name': ['', [
        Validators.required,
        
        
        
      ]
      ],
    });

    this.regForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }
  onValueChanged(data?: any) {
    // if (!this.regForm) {
    //   return;
    // }
    // const form = this.regForm;
    // for (const field in this.formErrors) {
    //   if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
    //     this.formErrors[field] = '';
    //     const control = form.get(field);
    //     if (control && control.dirty && !control.valid) {
    //       const messages = this.validationMessages[field];
    //       for (const key in control.errors) {
    //         if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
    //           this.formErrors[field] += messages[key] + ' ';
    //         }
    //       }
    //     }
    //   }
    // }
  }

  signup() {
    
    const newreg = {
      email: this.email,
      password: this.password,
      name:this.name
    };
      

    
        this.authservice.authSignup(newreg).subscribe(res => {
          
                
                this.router.navigate(["/login"]);  
                return swal({
                  title: "Welcome ",
                  text: "Register Successfull",
                  type: "success",
                  timer: 3000

                });
             


          },err=> {

            //console.log(err["error"]["message"],);
            return swal({
              title: "Oooops! ",
              text:err["error"]["message"],
              type: "warning",
              timer: 3000,


            
            });
        
          });

  }
}




