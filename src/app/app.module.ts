import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminAccessService } from './admin-access.service';
import { IsloginService } from './islogin.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NoAccessComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {path:"",component:HomeComponent},
        {path:"login",component:LoginComponent},
        {path:"admin",component:AdminComponent,canActivate:[IsloginService,AdminAccessService]},
        {path:"no-access",component:NoAccessComponent}
      ]
      
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
