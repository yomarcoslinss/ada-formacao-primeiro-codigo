import { Validacoes } from "./validacoes.js";

const btnCadastrarCriminoso = document.getElementById("btnCadastrarCriminoso");
const tabelaCriminosos = document.getElementById("tabelaCriminosos");

const capturaValor = (id) => {
    const dom = document.getElementById(`${id}`);
    return dom.value;
};

const radios = document.querySelectorAll('input[name="formVivoOuMorto"]');

btnCadastrarCriminoso.onclick = (e) => {
    e.preventDefault();

    const formNome = capturaValor("formNomeCriminoso");
    Validacoes.validarNome(formNome);
    const formIdade = capturaValor("formIdadeCriminoso");
    Validacoes.validarIdade(formIdade);
    const formCrime = capturaValor("formCrimeCriminoso");
    Validacoes.validarCrime(formCrime);
    const formDataCrime = capturaValor("formDataCrime");
    Validacoes.validarDataCrime(formDataCrime);
    const formRecompensa = capturaValor("formRecompensa");
    Validacoes.validarRecompensa(formRecompensa);

    let formSomenteVivo = null;

    radios.forEach((radio) => {
        if (radio.checked) {
            formSomenteVivo = radio.value;
        }
    });

    formSomenteVivo = Validacoes.validarVivoOuMorto(formSomenteVivo);


    tabelaCriminosos.innerHTML += `
        <tr> 
            <td>${formNome}</td>
            <td>${formIdade}</td>
            <td>${formCrime}</td>
            <td>${formDataCrime}</td>
            <td>${formSomenteVivo}</td>
            <td>${formRecompensa}</td>
        </tr>
    `;
};
