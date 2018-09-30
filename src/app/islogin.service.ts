import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class IsloginService implements CanActivate {

  constructor(private root:Router,private login:LoginService) { }
  canActivate(){
    //let admin = this.login.isAdmin();
    let islogin = this.login.isLogin();
   // console.log(admin);
    console.log(islogin);
    if(!islogin){
      this.root.navigate(['/login']);
    //  return true;
    } else{return true;}
    
    
  }
}
