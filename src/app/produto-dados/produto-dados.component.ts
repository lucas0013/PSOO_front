import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-dados',
  templateUrl: './produto-dados.component.html',
  styleUrls: ['./produto-dados.component.css']
})
export class ProdutoDadosComponent implements OnInit {

  produto = new Produto();

  constructor(private produtoServ: ProdutoService,
              private router: Router ) { }

  ngOnInit(): void {
  }

  adicionar = () => {
     this.produtoServ.incluir(this.produto).subscribe(
       _ => this.router.navigateByUrl("/listaProduto") 
     )
  }

}
