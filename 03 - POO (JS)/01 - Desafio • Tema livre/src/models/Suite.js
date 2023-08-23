import Validacoes from './Validacoes.js';


export default class Suite {
    constructor(tipoSuite, capacidade, valorDiaria) {
        const validacoes = new Validacoes();
        
        tipoSuite = validacoes.validarTipoSuite(tipoSuite);
        this.tipoSuite = tipoSuite;

        capacidade = validacoes.validarCapacidadeSuite(capacidade)
        this.capacidade = capacidade;

        valorDiaria = validacoes.validarValorDiaria(valorDiaria);
        this.valorDiaria = valorDiaria;
    }
}