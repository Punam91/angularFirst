import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private nww : LoginService) { }
  logge;
  ngOnInit() {
    let logged = this.nww.isLogin();
    this.logge = logged;
  }
  logoutt(){
    this.nww.logout();
  }
  
}
