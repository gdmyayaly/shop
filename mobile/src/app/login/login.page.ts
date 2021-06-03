import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public reponse:any;
  public isloading:boolean=false;
  public iserror:boolean=false;
  public passwordtype:string="password";
  constructor(private auth:AuthService) { }
  user= new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(3)]),
    password: new FormControl('',[Validators.required,Validators.minLength(3)]),
    check:new FormControl(false)
  })
  ngOnInit() {
  }
  login(){ 
    this.isloading=true;
    this.iserror=false;
    this.auth.loggin(this.user.value).subscribe(
      res=>{
        this.reponse=res.body;
        this.isloading=false;
        this.iserror=false;
        this.auth.enregistrementToken(this.reponse.token)
      },
      error=>{
        console.log(error);
        this.isloading=false;
        this.iserror=true;
      }
    )
  }
  checkpassword(){
    if (!this.user.get('check').value) {
      this.passwordtype="text";
    } else {
      this.passwordtype="password";
    }
  }
}
