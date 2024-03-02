export default class Pessoa {
    nome?: string
    telefone?: number
    endereco?: string
    constructor(nome: string, telefone: number, endereco: string) {
        this.nome = nome;
        this.telefone = telefone;
        this.endereco = endereco;
    }
}
