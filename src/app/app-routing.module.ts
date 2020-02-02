import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './navegacao/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./navegacao/components/home/home.module').then( m => m.HomePageModule)},
  { path: 'cadastro', loadChildren: () => import('./cadastro/cadastro-usuario-form/cadastro-usuario-form.module').then( m => m.CadastroUsuarioFormPageModule)},
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
