import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommondataService {
  private urlImage:string="http://127.0.0.1:8000/images/";
  //public urlImage:string="https://backcontanna.yayaly.xyz/images/"

  constructor() { }
}
