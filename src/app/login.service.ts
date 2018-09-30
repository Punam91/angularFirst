import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  //token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFua3VzaGd1bWJlcjgyQHltYWlsLmNvbSIsInBhc3MiOiIxMjMiLCJhZG1pbiI6dHJ1ZX0.Bc88VN5uEhAmrestLXDqMDMqpJzJVRugP30XzLpBob4";
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFua3VzaGd1bWJlcjgyQHltYWlsLmNvbSIsInBhc3MiOiIxMjMiLCJhZG1pbiI6ZmFsc2V9.RrKjSIhg9h5CtNPd7ejSkGH8PSDrAugDH8Mj6AVHJW4";
  fasss(values){
    if(values.email=='ankushgumber82@ymail.com' && values.pass=='123'){
      localStorage.setItem('token',this.token);
      return {status : 200,body:this.token};
    }else{
      return {status : 404};
    }
  }
  logout(){
    localStorage.removeItem('token');
  }
  isLogin(){
    
    if(localStorage.getItem('token')){
      return true;
    }else{
      false;
    }
  }
  isAdmin(){
    var token = localStorage.getItem('token');
    let jwthelper = new JwtHelperService();
    var admin = jwthelper.decodeToken(token);
    if(admin.admin){
      return true;
    }
    
   
  }
}
