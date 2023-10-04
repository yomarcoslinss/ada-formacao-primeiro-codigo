import {Validacoes} from './validacoes.js'

const btnCadastrarProduto = document.getElementById('btn-cadastrar-produto');
const cadastrarCards = document.getElementById('cadastrar-cards');

const capturarValor = (id) => {
    const dom = document.getElementById(`${id}`);
    return dom.value;
};

const criarCard = (nome, preco, imagem, categoria) => {
    cadastrarCards.style.display = 'flex';

    cadastrarCards.innerHTML += `
        <div class="col-4">
            <div class="card mb-4 shadow-sm" style="width: 100%; max-width: 500px;">
            <img class="card-img-top" src="${imagem}" alt="Imagem do produto" style="object-fit: cover; height: 200px;">
            <div class="card-body">
                <h5 class="card-title">${nome} <span class="badge badge-secondary">${categoria}</span></h5>
                <hr>
                <p>R$ ${preco} </p>
            </div>
            </div>
        </div>
    `
}

btnCadastrarProduto.onclick = function () {
    const nomeProduto = capturarValor("nome-produto");
    Validacoes.validarNome(nomeProduto);
    const precoProduto = capturarValor("preco-produto");
    Validacoes.validarPreco(precoProduto);
    const imagemProduto = capturarValor("imagem-produto");
    const categoriaProduto = capturarValor("categoria-produto");
    criarCard(nomeProduto, precoProduto, imagemProduto, categoriaProduto);
};
