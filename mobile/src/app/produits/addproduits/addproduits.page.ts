import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Categorie } from 'src/app/model/categorie';
import { Detailproduits } from 'src/app/model/detailproduits';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-addproduits',
  templateUrl: './addproduits.page.html',
  styleUrls: ['./addproduits.page.scss'],
})
export class AddproduitsPage implements OnInit {
  
  public fileToUpload=[];
  public OtherImageUpload=[];
  public PreviewOtherImage:Array<String>=[];
  public imageUrl="";
  public rr;
  public DetailProduit:Detailproduits[];
  public categorie:Categorie[];
  public load:boolean=false;
  constructor(public viewCtrl: ModalController,private admin:AdminService) { }

  ngOnInit() {
    console.log(this.loadData());
    
  }
  dismissModal(){
    this.viewCtrl.dismiss();
  }
  produits= new FormGroup({
    nom :new FormControl('',Validators.required),
    detail: new FormControl('',Validators.required),
    longDetail: new FormControl('',Validators.required),
    categorie: new FormControl('',Validators.required),
    imagename: new FormControl('',Validators.required)
  })
  loadData(){
    this.load=true;
    this.admin.listDetailProduits().then(
      res=>{
        this.DetailProduit=res.body;
        // for (let index = 0; index < this.DetailProduit.length; index++) {
        //   let a=this.DetailProduit[index].nom;
        //   a=a.replace(/\s+/g, '');
        //   a=a.toLowerCase();
        //   this.DetailProduit[index].slud=a;
        //   if (this.DetailProduit[index].type=='multiple' && this.DetailProduit[index].valeur.length >=1) {
        //     this.DetailProduit[index].check=false;
        //     this.produits.setControl('check'+index,new FormControl(false,Validators.required))
        //   }
        //   this.produits.setControl(this.DetailProduit[index].slud,new FormControl('',Validators.required))
        // }
        this.admin.listCategorie().then(
          res=>{this.categorie=res.body;
          this.load=false},
          error=>{console.log(error);
            this.load=false;
          }
        )        
      },
      error=>{
        console.log(error);
        this.load=false;
      }
    )
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
     }
  save(){
    this.load=true;
    const formData: FormData= new FormData();
    formData.append('nom',this.produits.get('nom').value)
    formData.append('detail',this.produits.get('detail').value)
    formData.append('longDetail',this.produits.get('longDetail').value)
    formData.append('categorie',this.produits.get('categorie').value)
    formData.append('imagename',this.produits.get('imagename').value)

    // for (let index = 0; index < this.DetailProduit.length; index++) {
    //   if (this.DetailProduit[index].type=='multiple' && this.DetailProduit[index].valeur.length >=1) {
    //     //formData.append(this.DetailProduit[index].slud,this.produits.get('check'+index).value)
    //   }
    //   else{
    //     formData.append(this.DetailProduit[index].slud,this.produits.get(this.DetailProduit[index].slud).value)
    //   }
    // }
    if (this.fileToUpload[this.fileToUpload.length - 1]) {
      formData.append("image", this.fileToUpload[this.fileToUpload.length -1], this.fileToUpload[this.fileToUpload.length -1].name);
    }
    if (this.OtherImageUpload.length>=1) {
      formData.append('nbrimage',this.OtherImageUpload.length.toString());
      for (let index = 0; index < this.OtherImageUpload.length; index++) {
        formData.append("images"+index, this.OtherImageUpload[index], this.OtherImageUpload[index].name);
      }
    }
    this.admin.saveProduits(formData).subscribe(
      res=>{
        console.log(res);
        this.load=false;
        this.dismissModal();
      },
      error=>{console.log(error);
        this.load=false;
      }
    )
  }
  handleFileInputMultiple(File : FileList){
    for (let index = 0; index < File.length; index++) {
      // console.log(File.item);      
      // let a= this.OtherImageUpload.find(r=>r.name==File.item(index).name);
      // console.log(a);
      // if (!a) {
        this.OtherImageUpload.push(File.item(index));        
      //}
    }
    for (let index = 0; index < this.OtherImageUpload.length; index++) {
      console.log(this.OtherImageUpload[index]);

      var reader = new FileReader();
        reader.onload = (event:any) => {
          this.eventYaya(event)
        }
        reader.readAsDataURL(this.OtherImageUpload[index]);
    }    
  }
  eventYaya(event){
    this.rr=event.target.result;     
    this.PreviewOtherImage.push(this.rr); 
  }
  deleteMultiplePic(id){
    console.log(id);
    this.OtherImageUpload.splice(id,1);
    this.PreviewOtherImage.splice(id,1);
    console.log(this.OtherImageUpload);
    console.log(this.PreviewOtherImage);    
  }
}
