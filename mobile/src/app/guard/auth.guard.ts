import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../service/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private admin:AdminService,private router:Router){}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(localStorage.getItem('token')){
      this.admin.getInfos().subscribe(
        res=>{
        },
        error=>{
          console.log(error);
          if (error.status==401 || error.status==403) {
            this.router.navigateByUrl("/login");
          }
        }
      )
        return true;
    }
    else{
      this.router.navigateByUrl("/login");
    }
}
  
}
