import Categoria from "./Categoria"
import Empresa from "./Empresa"
import Pessoa from "./Pessoa"

export default class Conta {
   
    tipo?: string
    valor?: number
  
    constructor(tipo: string, valor: number) {
        this.tipo = tipo
        this.valor = valor
    } 
}
