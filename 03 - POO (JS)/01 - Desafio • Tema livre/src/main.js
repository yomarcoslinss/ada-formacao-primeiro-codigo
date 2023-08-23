import Pessoa from './models/Pessoa.js';
import Suite from './models/Suite.js'
import Reserva from './models/Reserva.js'

window.Pessoa = Pessoa;
window.Suite = Suite;
window.Reserva = Reserva;

const marcos = new Pessoa('Marcos', 'Linss');
const s1 = new Suite('spa', 5, 500);

const btn = document.getElementById('botao');


btn.addEventListener('click', () => {
    const lek = new Reserva(marcos, s1, 500);
    console.log(lek)
})