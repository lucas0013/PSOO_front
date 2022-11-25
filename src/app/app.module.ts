import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { ProdutoService } from './produto.service';
import { ProdutoDadosComponent } from './produto-dados/produto-dados.component';
import { FormsModule } from '@angular/forms';
import { ProdutoSiteComponent } from './produto-site/produto-site.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoListaComponent,
    ProdutoDadosComponent,
    ProdutoSiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
