import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-addcategories',
  templateUrl: './addcategories.page.html',
  styleUrls: ['./addcategories.page.scss'],
})
export class AddcategoriesPage implements OnInit {
  public fileToUpload=[];
  public imageUrl: string;
  public load:boolean=false;
  @Input() id: number;
  public isSouscat:boolean=false;
  constructor(public viewCtrl: ModalController,private admin:AdminService) { }
  categorie= new FormGroup({
    nom: new FormControl('',Validators.required),
    detail: new FormControl('',Validators.required),
    imagename: new FormControl('',Validators.required),
    categorie: new FormControl('')
  })
  ngOnInit() {
    if (this.id==null) {
      this.isSouscat=false;
    }
    else{
      this.categorie.get('categorie').setValue(this.id);
      this.isSouscat=true;
    }
  }
  dismissModal(){
    this.viewCtrl.dismiss();
  }
  handleFileInput(File : FileList){
  // this.amansa.loaddata=true;
    for (let index = 0; index < File.length; index++) {
      this.fileToUpload.push(File.item(index));
    }
   var reader= new FileReader();
   reader.onload=(event:any)=>{
     this.imageUrl=event.target.result;
   }
    reader.readAsDataURL(this.fileToUpload[this.fileToUpload.length -1]);
    console.log(this.fileToUpload[this.fileToUpload.length -1]);
    let subStr:string = this.fileToUpload[this.fileToUpload.length -1].name;
    let taille:number=subStr.length-4;
   let alpha= subStr.substring(0,subStr.length-4)
    console.log(alpha);
    this.categorie.get('imagename').setValue(alpha);
   }
   Valider(){
    this.load=true;
    const formData: FormData= new FormData();
     formData.append('nom',this.categorie.get('nom').value);
     formData.append('detail',this.categorie.get('detail').value);
     formData.append('imagename',this.categorie.get('imagename').value);
     formData.append("image", this.fileToUpload[this.fileToUpload.length -1], this.fileToUpload[this.fileToUpload.length -1].name);

    this.admin.saveCategorie(formData).subscribe(
      res=>{
        this.load=false;
        console.log(res);
        this.dismissModal();
      },
      error=>{
        console.log(error);
        this.load=false;
      }
    )
   }
   ValiderSousCat(){
    this.load=true;
    const formData: FormData= new FormData();
     formData.append('nom',this.categorie.get('nom').value);
     formData.append('detail',this.categorie.get('detail').value);
     formData.append('imagename',this.categorie.get('imagename').value);
     formData.append('categorie',this.categorie.get('categorie').value);
     formData.append("image", this.fileToUpload[this.fileToUpload.length -1], this.fileToUpload[this.fileToUpload.length -1].name);

    this.admin.saveSousCategorie(formData).subscribe(
      res=>{
        this.load=false;
        console.log(res);
        this.dismissModal();
      },
      error=>{
        console.log(error);
        this.load=false;
      }
    )
   }
}
