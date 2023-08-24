import Validacoes from './Validacoes.js';

export default class Pessoa {
    constructor(nome, sobrenome) {
        const validacoes = new Validacoes();

        this._nome = validacoes.validarNome(nome);
        
        this._sobrenome = validacoes.validarSobrenome(sobrenome);
    }

    get nome() {
        return this._nome;
    }

    get sobrenome() {
        return this._sobrenome;
    }
}

