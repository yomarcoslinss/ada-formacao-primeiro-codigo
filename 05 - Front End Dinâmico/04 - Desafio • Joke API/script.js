const btnCharada = document.querySelector('#btn-obter-charada')
const resultadoCharada = document.querySelector('#obter-charada')
const btnResposta = document.querySelector('#btn-obter-resposta')
const resultadoResposta = document.querySelector('#obter-resposta')
const btnFavoritar = document.querySelector('#btn-favoritar')
const btnDesfavoritar = document.querySelector('.btn-desfavoritar')
const areaFavoritos = document.querySelector('#favoritos');

const fetchCharada = async () => {
    const APIResponse = await fetch('https://v2.jokeapi.dev/joke/Any');
    const data = await APIResponse.json();
    return data;
};

const fetchTraducao = async(texto) => {
    const APIResponse = await fetch (`https://api.mymemory.translated.net/get?q=${texto}&langpair=en|pt-br`)
    const data = await APIResponse.json();
    return data;
}

const traduzir = async (texto) => {
    const data = await fetchTraducao(texto);

    return data.responseData.translatedText;
}

let charada = '';
let charadaData = '';
let resposta = '';

const obterCharada = async () => {
    resultadoCharada.innerText = 'Carregando...';
    resultadoResposta.innerText = 'Carregando...';
    
    const data = await fetchCharada();
    charadaData = data;

    if(!data.joke) {
        charada = await traduzir(data.setup)
        resposta = await traduzir(data.delivery);
        resultadoCharada.innerText = charada;
        resultadoResposta.innerText = 'Clique no botão acima';
    } else {
        obterCharada();
    }

};

const obterResposta = () => {
    if(charada){
        resultadoResposta.innerText = resposta;
    }
};

const favoritar = async () => {
    if(charadaData) {
        areaFavoritos.innerHTML += `
        <div class="charada-favorita card bg-transparent p-3 mb-4 shadow-sm">
            <p>${await traduzir(charadaData.setup)}</p>
            <p>${await traduzir(charadaData.delivery)}</p>
            <button class="btn-desfavoritar btn btn-outline-danger btn-sm">Remover</button>
        </div>
        `
    }
}

btnCharada.onclick = (e) => {
    e.preventDefault();
    obterCharada();
};

btnResposta.onclick = (e) => {
    e.preventDefault();
    obterResposta();
};

btnFavoritar.onclick = (e) => {
    e.preventDefault();
    favoritar();
};

areaFavoritos.onclick = (e) => {
    if (e.target.classList.contains('btn-desfavoritar')) {
        e.preventDefault();
        
        const removerFavorito = e.target.closest('.charada-favorita');
        if (removerFavorito) {
            removerFavorito.remove();
        }
    }
};