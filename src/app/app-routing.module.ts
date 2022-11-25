import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoDadosComponent } from './produto-dados/produto-dados.component';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { ProdutoSiteComponent } from './produto-site/produto-site.component';

const routes: Routes = [
  { path: 'listaProduto', 
  component: ProdutoListaComponent },
{ path: 'dadosProduto', 
  component: ProdutoDadosComponent },
  { path: 'siteProduto', 
  component: ProdutoSiteComponent },
{ path: '',   redirectTo: '/listaProduto', 
  pathMatch: 'full' },  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }