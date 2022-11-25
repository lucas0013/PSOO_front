export class Produto {
    id: number;
    nome: string;
    descricao: string;
    valor: string;
    estoque: number;
    status: number;
    carrinhoid: number;
    constructor(id = 0, nome= "", 
                descricao = "", valor = "", 
                estoque = 0, status = 0, carrinhoId = 0){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.valor = valor;
        this.estoque = estoque;
        this.status = status;
        this.carrinhoid = carrinhoId;
    }
}
