import { Component, OnInit } from '@angular/core';
import { InputCategoriesPage } from '../input-categories/input-categories.page';
import { InputProduitsPage } from '../input-produits/input-produits.page';

@Component({
  selector: 'app-homeinput',
  templateUrl: './homeinput.page.html',
  styleUrls: ['./homeinput.page.scss'],
})
export class HomeinputPage implements OnInit {
  produit=InputProduitsPage;
  categorie=InputCategoriesPage;
  constructor() { }

  ngOnInit() {
  }

}
