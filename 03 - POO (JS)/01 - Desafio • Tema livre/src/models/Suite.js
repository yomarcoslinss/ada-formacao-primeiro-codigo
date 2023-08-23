import Validacoes from './Validacoes.js';
const validacoes = new Validacoes();


export default class Suite {
    constructor(tipoSuite, capacidade, valorDiaria) {
        tipoSuite = validacoes.validarTipoSuite(tipoSuite);
        this.tipoSuite = tipoSuite;

        capacidade = validacoes.validarCapacidadeSuite(capacidade)
        this.capacidade = capacidade;

        valorDiaria = validacoes.validarValorDiaria(valorDiaria);
        this.valorDiaria = valorDiaria;
    }
}