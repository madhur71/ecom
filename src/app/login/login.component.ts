import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from './loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signIn = false
  Name = ""
  email = ""
  password = ""


  constructor( private _loginserviceService: LoginserviceService) { }

  ngOnInit(): void {
  }

  signInAccount(){
    this.signIn = true
  }

  signOutAccount(){
    this.signIn = false
  }

  AddAccount(){
    console.log("MAdhur")
    let loginObj = {
      "userName": this.Name,
      "Password": this.password,
      "email" : this.email
    }
    this._loginserviceService.addUser(loginObj).subscribe((res:any)=>{
      if(loginObj.userName == res.userName){
        console.log("Login In")
      }
    })
  }

}
