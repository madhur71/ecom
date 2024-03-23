import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})

export class LoginserviceService {

  constructor(private http:HttpClient) { }

  _url:any = ""
  setLogin(){
    let loginObject = {
      Name : "Madhur Kamble",
      userId : "219",
    }
    localStorage.setItem( JSON.stringify(loginObject) ,"logedInUser")
  }

  addUser(login:any):any{
    this._url =  environment.url + "/logInDetails"
    return this.http.post<logInObj>(this._url,login);
  } 

}

interface logInObj {
  userName:any,
  email:any,
  Password:any
}
