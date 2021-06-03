export interface Categorie{
    id:number;
    nom:string;
    image:string;
    detail:string;
    imagename:string;
    sousCategories:Array<{
        id:number;
        nom:string;
        image:string;
        detail:string;
        imagename:string;
    }>
}