import Validacoes from './Validacoes.js';
const validacoes = new Validacoes();

export default class Pessoa {
    constructor(nome, sobrenome) {
        nome = validacoes.validarNome(nome);
        sobrenome = validacoes.validarSobrenome(sobrenome);

        this.nome = nome;
        this.sobrenome = sobrenome;
    }

}