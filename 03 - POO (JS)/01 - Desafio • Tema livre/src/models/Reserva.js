import Validacoes from './Validacoes.js';
const validacoes = new Validacoes();

export default class Reserva {
    constructor(hospede, suite, diasReservados) {
        hospede = validacoes.validarHospede(hospede);
        this.hospede = hospede;

        this.suite = suite;
        this.diasReservados = diasReservados;
    }
}