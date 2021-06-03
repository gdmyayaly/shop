import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urllogin:string="http://127.0.0.1:8000/";
  //private urllogin:string="https://backcontanna.yayaly.xyz/"

  constructor(private http:HttpClient,private router:Router) { }
  loggin(data){
    return this.http.post(this.urllogin+"login" , data , {observe:'response'})
  }
  enregistrementToken(jwtToken : string){ 
    localStorage.setItem('token',jwtToken);
    this.router.navigate(['/home'])
  }
  getToken(){
    return localStorage.getItem('token');
  }
}