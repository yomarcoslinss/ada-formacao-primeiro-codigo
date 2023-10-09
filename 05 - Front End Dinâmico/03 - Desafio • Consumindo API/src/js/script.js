const pokemonName = document.querySelector('#pokemon__name');
const pokemonNumber = document.querySelector('#pokemon__number')
const pokemonImage = document.querySelector('#pokemon__image')
const form = document.querySelector('#form');
const inputSearch = document.querySelector('#input__search');
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');
let pokemonAtual = 1;

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if(APIResponse.status === 200) {
        const data = await APIResponse.json();
        return data;
    } 


};

const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = 'Carregando...';
    pokemonNumber.innerHTML = '0';
    pokemonImage.src = 'https://www.wpfaster.org/wp-content/uploads/2013/06/loading-gif.gif';

    const data = await fetchPokemon(pokemon);

    if(data) {
        pokemonImage.style.display = 'block';
        pokemonImage.src = data.sprites.versions['generation-v']['black-white'].animated['front_default'];
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonAtual = parseInt(pokemonNumber.innerHTML);
        inputSearch.value = '';
    } else {
        pokemonName.innerHTML = 'Não encontrado!';
        pokemonNumber.innerHTML = '404';
        pokemonImage.style.display = 'none';

        inputSearch.value = '';
    }
        
}

btnPrev.onclick = () => {
    if(pokemonAtual > 1) {
        pokemonAtual--
        renderPokemon(pokemonAtual);
    }
}

btnNext.onclick = () => {
    if(pokemonAtual < 649) {
        pokemonAtual++
        renderPokemon(pokemonAtual);
    }
}

form.onsubmit = (e) => {
    e.preventDefault();
    renderPokemon(inputSearch.value.toLowerCase());
}


renderPokemon(pokemonAtual);