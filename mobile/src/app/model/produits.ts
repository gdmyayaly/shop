import { Categorie } from "./categorie";
import { Detailproduits } from "./detailproduits";

export interface Produits{
    categorie: Categorie;
    detail:string;
    id:number;
    image:string;
    images:Array<string>;
    longDetail:string;
    nom:string;
    produitInformations:Array<{
        id:number;
        valeur:string;
        detail:Detailproduits
    }>
}