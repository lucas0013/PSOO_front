import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  /*
  private Produtos: Array<Produto> = [
    new Produto(1,"joao","2222-2222","joao@xpto.com"),
    new Produto(2,"maria","1111-2222","maria@xpto.com"),
    new Produto(3,"xpto","1111-2222","maria@xpto.com")
  ];  
  */

  private urlProdutos = "https://localhost:7064/api/Produto";

  constructor(private http: HttpClient) { }

  obterTodos(): Observable<Array<Produto>> {
    return this.http.get<Array<Produto>>(this.urlProdutos).pipe(
       tap((dados)=>console.log(`Recebido: ${dados.length}`))
    )
  }

  incluir(Produto: Produto): Observable<void> {
    return this.http.post<void>(this.urlProdutos,Produto).pipe(
       tap(_=>console.log("Produto Incluido"))
  )
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlProdutos}/${id}`).pipe(
       tap(_=>console.log("Produto Excluido"))
  )
  }
}
