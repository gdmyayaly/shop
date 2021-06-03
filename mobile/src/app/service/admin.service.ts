import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie';
import { Detailproduits } from '../model/detailproduits';
import { Souscategorie } from '../model/souscategorie';
import { Whatsapp } from '../model/whatsapp';
import { Produits } from '../model/produits';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private url:string="http://127.0.0.1:8000/api/";
  //private url:string="https://backcontanna.yayaly.xyz/api/"
  constructor(private http:HttpClient) { }
 async listCategorie(){
    return await this.http.get<Categorie[]>(this.url+"categories/list"  , {observe:'response'}).toPromise();
  }
  async deleteCategorie(id){
    return await this.http.delete(this.url+"categories/delete/"+id  , {observe:'response'}).toPromise();
  }
  saveCategorie(formData:FormData){
    return this.http.post(this.url+'categories/add',formData, {observe:'response'})
  }
  saveSousCategorie(formData:FormData){
    return this.http.post(this.url+'souscategories/add',formData, {observe:'response'})
  }
  async listSousCategorie(id){
    return await this.http.get<Souscategorie[]>(this.url+"souscategories/list/"+id  , {observe:'response'}).toPromise();
  }
  async deleteSousCategorie(id){
    return await this.http.delete(this.url+"souscategories/delete/"+id  , {observe:'response'}).toPromise();
  }
  async listDetailProduits(){
    return await this.http.get<Detailproduits[]>(this.url+"detailproduit/list"  , {observe:'response'}).toPromise();
  }
  async deleteDetailProduits(id){
    return await this.http.delete(this.url+"detailproduit/delete/"+id  , {observe:'response'}).toPromise();
  }
  saveDetailProduits(data){
    return this.http.post(this.url+'detailproduit/add',data, {observe:'response'})
  }
  getInfos(){
    return this.http.get(this.url+'user', {observe:'response'})
  }
  async listWhatsapp(){
    return await this.http.get<Whatsapp>(this.url+'whatsapp/list', {observe:'response'}).toPromise();
  }
  savaUpdateWhatsapp(data){
    return this.http.post(this.url+'whatsapp/add',data, {observe:'response'})
  }
  async listProduits(){
    return await this.http.get<Produits[]>(this.url+"produits/list"  , {observe:'response'}).toPromise();
  }
  async deleteProduits(id){
    return await this.http.delete(this.url+"produits/delete/"+id  , {observe:'response'}).toPromise();
  }
  saveProduits(formData:FormData){
    return this.http.post(this.url+'produits/add',formData, {observe:'response'})
  }
  async deletevaldetailproduits(id,val){
    return await this.http.delete(this.url+"produits/deletevaldetailproduits/"+id+'/'+val  , {observe:'response'}).toPromise();

  }
}
