import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    canActivate:[AuthGuard],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'produits',
    canActivate:[AuthGuard],
    loadChildren: () => import('./produits/listproduits/listproduits.module').then( m => m.ListproduitsPageModule)
  },
  {
    path: 'addproduits',
    canActivate:[AuthGuard],
    loadChildren: () => import('./produits/addproduits/addproduits.module').then( m => m.AddproduitsPageModule)
  },
  {
    path: 'categories',
    canActivate:[AuthGuard],
    loadChildren: () => import('./categories/listcategories/listcategories.module').then( m => m.ListcategoriesPageModule)
  },
  {
    path: 'addcategories',
    canActivate:[AuthGuard],
    loadChildren: () => import('./categories/addcategories/addcategories.module').then( m => m.AddcategoriesPageModule)
  },
  {
    path: 'formulaire',
    canActivate:[AuthGuard],
    loadChildren: () => import('./input/homeinput/homeinput.module').then( m => m.HomeinputPageModule)
  },
  {
    path: 'whatsapp',
    canActivate:[AuthGuard],
    loadChildren: () => import('./whatsapp/whatsapp.module').then( m => m.WhatsappPageModule)
  },
  {
    path: 'input-add-produits',
    canActivate:[AuthGuard],
    loadChildren: () => import('./input/input-add-produits/input-add-produits.module').then( m => m.InputAddProduitsPageModule)
  },
  {
    path: 'input-add-categories',
    canActivate:[AuthGuard],
    loadChildren: () => import('./input/input-add-categories/input-add-categories.module').then( m => m.InputAddCategoriesPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'souscategories',
    canActivate:[AuthGuard],
    loadChildren: () => import('./categories/listsouscategories/listsouscategories.module').then( m => m.ListsouscategoriesPageModule)
  },
  {
    path: 'input',
    canActivate:[AuthGuard],
    loadChildren: () => import('./formulaire/formulaire.module').then( m => m.FormulairePageModule)
  },
  {
    path: 'formulaireadd',
    canActivate:[AuthGuard],
    loadChildren: () => import('./formulaireadd/formulaireadd.module').then( m => m.FormulaireaddPageModule)
  },
  {
    path: 'module',
    loadChildren: () => import('./moduleadmin/moduleadmin.module').then( m => m.ModuleadminPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
