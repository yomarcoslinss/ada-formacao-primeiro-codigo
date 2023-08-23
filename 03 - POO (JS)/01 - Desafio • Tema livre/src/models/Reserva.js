import Validacoes from './Validacoes.js';

export default class Reserva {
    constructor(hospede, suite, diasReservados) {
        const validacoes = new Validacoes();

        hospede = validacoes.validarHospede(hospede);
        this.hospede = hospede;

        suite = validacoes.validarSuite(suite)
        this.suite = suite;
        
        diasReservados = validacoes.validarDiasReservados(diasReservados);
        this.diasReservados = diasReservados;
    }
}