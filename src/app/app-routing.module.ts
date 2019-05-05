import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'prestador/cadastrar', loadChildren: './prestador/cadastrar/cadastrar.module#CadastrarPageModule' },
  { path: 'prestador/login', loadChildren: './prestador/login/login.module#LoginPageModule' },
  { path: 'prestador/perfil', loadChildren: './prestador/perfil/perfil.module#PerfilPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
