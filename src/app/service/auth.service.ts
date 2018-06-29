import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { forkJoin } from "rxjs/observable/forkJoin";

@Injectable()
export class AuthService {
  authtoken: any;
  user: any;
  constructor(private http:HttpClient) { }

tok = localStorage.getItem("tokenid");


  authLogin(newlogin:any){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    return this.http.post('http://localhost:3000/user/login', newlogin, { headers: headers})
  }

  authSignup(newreg:any){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    return this.http.post('http://localhost:3000/user/signup', newreg, { headers: headers})
  }

  getallusers(email:any){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8','authorization':'Bearer '+this.tok});
    //headers.append('authorization',token);
    return this.http.get('http://localhost:3000/user/'+email, { headers: headers})
  }

  authCheck(token:any){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8','authorization':'Bearer '+token});
    //headers.append('authorization',token);
    return this.http.post('http://localhost:3000/auth',{}, { headers: headers})
  }


  AddProject(newproj:any){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8','Authorization':'Bearer '+this.tok});
    //console.log(headers);
    return this.http.post('http://localhost:3000/projects/',newproj,{ headers: headers})
  }

  UpdProject(newproj:any,pid:any){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8','Authorization':'Bearer '+this.tok});
    //console.log(headers);
    return this.http.patch('http://localhost:3000/projects/'+pid,newproj,{ headers: headers})
  }

  getProj(userId:any){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8','authorization':'Bearer '+this.tok});
    
    return this.http.get('http://localhost:3000/projects/take/'+userId, { headers: headers})
  }

  getotherProj(userId:any){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8','authorization':'Bearer '+this.tok});
    
    return this.http.get('http://localhost:3000/projectmem/mem/'+userId, { headers: headers})
  }


  getaProj(pId:any){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8','authorization':'Bearer '+this.tok});
    //headers.append('authorization',token);
    return this.http.get('http://localhost:3000/projects/get/'+pId, { headers: headers})
  }

  delProject(pid:any,userid:any){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8','Authorization':'Bearer '+this.tok});

    return this.http.delete('http://localhost:3000/projects/'+pid+'&'+userid, { headers: headers})
  }

  getTask(pId:any){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8','authorization':'Bearer '+this.tok});
    //headers.append('authorization',token);
    return this.http.get('http://localhost:3000/task/'+pId, { headers: headers})
  }

  delTask(tId:any){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8','authorization':'Bearer '+this.tok});
    //headers.append('authorization',token);
    return this.http.delete('http://localhost:3000/task/'+tId, { headers: headers})
  }


  addTask(newtask:any){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8','authorization':'Bearer '+this.tok});
    //headers.append('authorization',token);
    return this.http.post('http://localhost:3000/task/',newtask, { headers: headers})
  }

  addmem(newmem:any){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8','authorization':'Bearer '+this.tok});
    //headers.append('authorization',token);
    return this.http.post('http://localhost:3000/projectmem/',newmem, { headers: headers})
  }


  getprojectmem(pId:any){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8','authorization':'Bearer '+this.tok});
    //headers.append('authorization',token);
    return this.http.get('http://localhost:3000/projectmem/all/'+pId, { headers: headers})
  }

  // getallprojectmem(pId:any){
  //   const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8','authorization':'Bearer '+this.tok});
  //   //headers.append('authorization',token);
  //   return this.http.get('http://localhost:3000/projectmem/mem/'+pId, { headers: headers})
  // }


  delprojectmem(pmemId:any){
    const headers = new HttpHeaders({'authorization':'Bearer '+this.tok});
    //headers.append('authorization',token);
    return this.http.delete('http://localhost:3000/projectmem/'+pmemId, { headers: headers})
  }


  getAdmincount(adminId:any){
    const headers = new HttpHeaders({'Authorization':'Bearer '+this.tok,'Content-Type': 'application/json; charset=utf-8'});
    //headers.append('authorization',token);
    return this.http.get('http://localhost:3000/projects/'+adminId, { headers: headers})
  }


  getOthercount(userId:any){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8','authorization':'Bearer '+this.tok});
    let j1 = this.http.get('http://localhost:3000/projectmem/count/'+userId, { headers: headers})
    let j2 = this.http.get('http://localhost:3000/projects/'+userId, { headers: headers})
   return forkJoin([j1, j2])

  }


  storeData(token: any, userData: any) {
    localStorage.setItem('tokenid', token);
    localStorage.setItem('userId', userData.id);
    localStorage.setItem('email', userData.email);
    this.authtoken = token;
    this.user = userData;

}
}
