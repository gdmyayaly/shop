import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../service/admin.service';
import {Whatsapp} from '../model/whatsapp';
@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.page.html',
  styleUrls: ['./whatsapp.page.scss'],
})
export class WhatsappPage implements OnInit {

  constructor(private admin:AdminService) { }
  public WhatsApp:Whatsapp;
  public load:boolean=false;
  public isedit:boolean=false;
  ngOnInit() {
    this.loadData();
  }
  whats= new FormGroup({
    numero: new FormControl('',Validators.required),
    homemessage: new FormControl('',Validators.required),
    shopmessage: new FormControl('',Validators.required),
    // codemarchant: new FormControl ('')
  });
  save(){
    this.load=true;
    this.admin.savaUpdateWhatsapp(this.whats.value).subscribe(
      res=>{
        this.load=false;
        console.log(res);
        this.loadData()      
      },
      error=>{console.log(error);
        this.load=false;
      }
    )
  }
  loadData(){
    this.load=true;
    this.admin.listWhatsapp().then(
      res=>{this.WhatsApp=res.body;
      this.whats.get('numero').setValue(this.WhatsApp.numero);
      this.whats.get('homemessage').setValue(this.WhatsApp.homemessage);
      this.whats.get('shopmessage').setValue(this.WhatsApp.shopmessage);
      // this.whats.get('codemarchant').setValue(this.WhatsApp.codemarchant);
      this.load=false;
      },
      error=>{
        console.log(error);
        this.load=false;
      }
    )
  }
  modifier(){
    this.isedit=!this.isedit;
  }
  annuler(){
    this.isedit=false;
    this.loadData();
  }
}
