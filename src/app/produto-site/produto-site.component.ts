import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-site',
  templateUrl: './produto-site.component.html',
  styleUrls: ['./produto-site.component.css']
})
export class ProdutoSiteComponent implements OnInit {
  
  produtos: Array<Produto> = []

  constructor(private produtoServ: ProdutoService) { }

  ngOnInit(): void {
    this.produtoServ.obterTodos()
    .subscribe((retorno)=>
                this.produtos = retorno);
  }
  
  excluir =(codigo:number) => {
    this.produtoServ.excluir(codigo).subscribe(
      _=>this.produtoServ.obterTodos()
                         .subscribe((retorno)=>
                  this.produtos = retorno)
       )
  }

}
