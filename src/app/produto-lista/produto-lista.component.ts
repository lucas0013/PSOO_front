import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {

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
