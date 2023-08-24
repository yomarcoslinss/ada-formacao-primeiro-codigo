import Pessoa from './models/Pessoa.js';
import Suite from './models/Suite.js'
import Reserva from './models/Reserva.js'


const pessoas = [];
const suites = [];
const reservas = [];

const btnCadastrarPessoa = document.getElementById("btnCadastrarPessoa");
const btnCadastrarReserva = document.getElementById("btnCadastrarReserva");
const btnCadastrarSuite = document.getElementById("btnCadastrarSuite");

const tablePessoa = document.getElementById("tablePessoa");
const tableSuite = document.getElementById("tableSuite");
const tableReserva = document.getElementById("tableReserva");

const getValue = (id) => {
    return id.value;
}

btnCadastrarPessoa.onclick = () => {
    const formPessoa = document.getElementById("formPessoa");
    const formSuite = document.getElementById("formSuite");
    const formReserva = document.getElementById("formReserva");

    formPessoa.style.display = "flex";
    formSuite.style.display = "none";
    formReserva.style.display = "none";
}


btnCadastrarSuite.onclick = () => {
    const formSuite = document.getElementById("formSuite");
    const formPessoa = document.getElementById("formPessoa");
    const formReserva = document.getElementById("formReserva");

    formSuite.style.display = "flex";
    formPessoa.style.display = "none";
    formReserva.style.display = "none";
}


btnCadastrarReserva.onclick = () => {
    const formReserva = document.getElementById("formReserva");
    const formSuite = document.getElementById("formSuite");
    const formPessoa = document.getElementById("formPessoa");

    formReserva.style.display = "flex";
    formSuite.style.display = "none";
    formPessoa.style.display = "none";
}


const btnFormCadastrarPessoa = document.getElementById("btnFormCadastrarPessoa");
btnFormCadastrarPessoa.addEventListener('click', () => {
    const inputNome = document.getElementById("inputNome");
    const inputSobrenome = document.getElementById("inputSobrenome");
    
    
    const pessoa = new Pessoa(getValue(inputNome), getValue(inputSobrenome));
    pessoas.push(pessoa);

    tablePessoa.innerHTML += `
        <tr>
            <td>${pessoa.nome}</td>
            <td>${pessoa.sobrenome}</td>
        </tr>
    `
    console.log(pessoas)
});


const btnFormCadastrarSuite = document.getElementById("btnFormCadastrarSuite");
btnFormCadastrarSuite.addEventListener('click', () => {
    const inputTipoSuite = document.getElementById("inputTipoSuite");
    const inputCapacidadeSuite = document.getElementById("inputCapacidadeSuite");
    const inputValorDiaria = document.getElementById("inputValorDiaria");
    
    const suite = new Suite(getValue(inputTipoSuite), parseInt(getValue(inputCapacidadeSuite)), parseInt(getValue(inputValorDiaria)));
    suites.push(suite);
    
    tableSuite.innerHTML += `
        <tr>
            <td>${suite.tipoSuite}</td>
            <td>${suite.capacidade}</td>
            <td>${suite.valorDiaria}</td>
        </tr>
    `
    console.log(suites)
});


const btnFormCadastrarReserva = document.getElementById("btnFormCadastrarReserva");
btnFormCadastrarReserva.addEventListener('click', () => {
    const inputHospede = document.getElementById("inputHospede");
    const inputSuite = document.getElementById("inputSuite");
    const inputDiasReservados = document.getElementById("inputDiasReservados");
    
    const pessoaExistente = pessoas.find(pessoa => pessoa.nome === inputHospede.value);
    const suiteExistente = suites.find(suite => suite.tipoSuite === inputSuite.value);

    if(pessoaExistente && suiteExistente) {
        const reserva = new Reserva(pessoaExistente, suiteExistente, Number(getValue(inputDiasReservados)))
        reservas.push(reserva);
        tableReserva.innerHTML += `
        <tr>
            <td>${pessoaExistente.nome}</td>
            <td>${suiteExistente.tipoSuite}</td>
            <td>${reserva.diasReservados}</td>
        </tr>
    `
    console.log(reservas)
    }

});



