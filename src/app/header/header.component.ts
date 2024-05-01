import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../login/loginservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _loginserviceService:LoginserviceService) { }

  loginUserDetails:any
  loginIt:Boolean = false;
  ngOnInit(): void {
    this.loginUserDetails =localStorage.getItem("logedInUser");
    console.log(this.loginUserDetails)
    if(this.loginUserDetails){
      this.loginIt = true
    } else{
      this.loginIt = false
    }

  }
  logOut(){
    this._loginserviceService.setLogout()
  }

}
