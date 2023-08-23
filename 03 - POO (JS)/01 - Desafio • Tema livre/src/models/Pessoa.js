import Validacoes from './Validacoes.js';

export default class Pessoa {
    constructor(nome, sobrenome) {
        const validacoes = new Validacoes();

        nome = validacoes.validarNome(nome);
        this.nome = nome;
        
        sobrenome = validacoes.validarSobrenome(sobrenome);
        this.sobrenome = sobrenome;
    }

}