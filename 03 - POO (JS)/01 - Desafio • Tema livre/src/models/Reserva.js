import Validacoes from './Validacoes.js';

export default class Reserva {
    constructor(hospede, suite, diasReservados) {
        const validacoes = new Validacoes();

        this._hospede = validacoes.validarHospede(hospede);
        this._suite = validacoes.validarSuite(suite);
        this._diasReservados = validacoes.validarDiasReservados(diasReservados);
    }

    get hospede() {
        return this._hospede;
    }

    get suite() {
        return this._suite;
    }

    get diasReservados() {
        return this._diasReservados;
    }
}