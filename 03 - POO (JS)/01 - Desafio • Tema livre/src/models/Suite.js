import Validacoes from './Validacoes.js';


export default class Suite {
    constructor(tipoSuite, capacidade, valorDiaria) {
        const validacoes = new Validacoes();

        this._tipoSuite = validacoes.validarTipoSuite(tipoSuite);
        this._capacidade = validacoes.validarCapacidadeSuite(capacidade);
        this._valorDiaria = validacoes.validarValorDiaria(valorDiaria);

    }

    get tipoSuite() {
        return this._tipoSuite;
    }

    get capacidade() {
        return this._capacidade;
    }

    get valorDiaria() {
        return this._valorDiaria;
    }
}