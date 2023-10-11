const btnCharada = document.querySelector('#btn-obter-charada')
const elementoCharada = document.querySelector('#obter-charada')
const btnResposta = document.querySelector('#btn-obter-resposta')
const elementoResposta = document.querySelector('#obter-resposta')
const btnFavoritar = document.querySelector('#btn-favoritar')
const areaFavoritos = document.querySelector('#favoritos');

let charada = '';
let charadaData = '';
let resposta = '';

const fetchCharada = async () => {
    const APIResponse = await fetch('https://v2.jokeapi.dev/joke/Any');
    const data = await APIResponse.json();
    return data;
};

const fetchTraducao = async (texto) => {
    const APIResponse = await fetch(`https://api.mymemory.translated.net/get?q=${texto}&langpair=en|pt-br`)
    const data = await APIResponse.json();
    return data;
}

const traduzir = async (texto) => {
    const data = await fetchTraducao(texto);
    return data.responseData.translatedText;
}

const obterCharada = async () => {
    elementoCharada.innerText = 'Carregando...';
    elementoResposta.innerText = 'Carregando...';

    const data = await fetchCharada();
    charadaData = data;

    if (!data.joke) {
        charada = await traduzir(data.setup)
        resposta = await traduzir(data.delivery);
        elementoCharada.innerText = charada;
        elementoResposta.innerText = 'Clique no botão acima';
    } else {
        obterCharada();
    }
};

let objCharadasFavoritas = {
    charadas: []
};

const obterResposta = () => {
    if (charada) {
        elementoResposta.innerText = resposta;
    }
};

const favoritar = async () => {
    if (charadaData) {
        const dados = localStorage.getItem('charadas');

        if (dados) {
            objCharadasFavoritas = JSON.parse(dados);
        }

        objCharadasFavoritas.charadas.push({
            'setup': charada,
            'delivery': resposta
        });

        localStorage.setItem('charadas', JSON.stringify(objCharadasFavoritas));

        areaFavoritos.innerHTML += `
        <div class="charada-favorita card bg-transparent p-3 mb-4 shadow-sm">
            <p>${charada}</p>
            <p>${resposta}</p>
            <button class="btn-desfavoritar btn btn-outline-danger btn-sm">Remover</button>
        </div>
        `;

        atualizarLocalStorage();
    }
}

const carregarCharadasFavoritas = () => {
    const dados = localStorage.getItem('charadas');
    if (dados) {
        objCharadasFavoritas = JSON.parse(dados);
        const favoritas = objCharadasFavoritas.charadas;

        favoritas.forEach((charada) => {
            areaFavoritos.innerHTML += `
        <div class="charada-favorita card bg-transparent p-3 mb-4 shadow-sm">
          <p>${charada.setup}</p>
          <p>${charada.delivery}</p>
          <button class="btn-desfavoritar btn btn-outline-danger btn-sm">Remover</button>
        </div>
      `;
        })
    }
}

carregarCharadasFavoritas();

const atualizarLocalStorage = () => {
    localStorage.setItem('charadas', JSON.stringify(objCharadasFavoritas));
};

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
            const setup = removerFavorito.querySelector('p:first-child').textContent;
            const delivery = removerFavorito.querySelector('p:nth-child(2)').textContent;

            objCharadasFavoritas.charadas = objCharadasFavoritas.charadas.filter(charada => {
                return charada.setup !== setup || charada.delivery !== delivery;
            });
            
            atualizarLocalStorage();
            removerFavorito.remove();
        }
    }
};
