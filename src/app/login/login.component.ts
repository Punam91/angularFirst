import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginn:LoginService,
    private router : Router
  ) { }
  validlogin;
  ngOnInit() {
  }

  signIn(values){
    let nadd = this.loginn.fasss(values);
      if(nadd.body){
        this.validlogin=false;
        this.router.navigate(['/']);
      }else{
        this.validlogin=true;
      }
  }

}
