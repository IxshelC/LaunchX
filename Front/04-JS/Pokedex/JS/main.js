const pokeCard = document.querySelector('[data-poke-card]');
const pokeName = document.querySelector('[data-pokemon-nombre]');
const pokeImg = document.querySelector('[data-pokemon-img]');
const pokeId = document.querySelector('[data-pokemon-id]');
const pokeTypes = document.querySelector('[data-pokemon-types]');
const pokeStats = document.querySelector('[ data-pokemon-status]');
const pokeScreen1 = document.querySelector('[data-screen1]');
const pokeScreen2 = document.querySelector('[data-screen2]');



const typeColors = {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F',
};

const buscarPokemon = event => {
    event.preventDefault();
    const { value } = event.target.nombrePokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then(data => data.json())
        .then(response => renderPokemonData(response))
        .catch(err => renderNotFound())
}

const renderPokemonData = data => {
    const sprite = data.sprites.front_default;
    const { stats, types } = data;
    console.log(data)
    pokeName.textContent = data.name;
    pokeImg.setAttribute('src', sprite);
    pokeImg.style.width = '100%'
    pokeId.textContent = `# ${data.id}`;
    setCardColor(types);
    renderPokemonTypes(types);
    renderPokemonStats(stats);
}

const setCardColor = types => {
    const colorUno = typeColors[types[0].type.name];
    const colorDos = types[1] ? typeColors[types[1].type.name] : typeColors.default;

    pokeScreen1.style.background = `radial-gradient(${colorDos} 3%, ${colorUno} 15%)`;
    pokeScreen1.style.backgroundSize = `19px 19px`;
    pokeScreen1.style.backgroundPositionX = `3%`;

    pokeScreen2.style.backgroundColor = `#25cf15`;
    pokeName.style.color = `${colorDos}`;
    pokeName.style.backgroundColor = `${colorUno}`
    pokeName.style.borderRadius = `14px`
    pokeName.style.border = `2px dotted black`;
    pokeName.style.padding = `0px 53px`;
}


const renderPokemonTypes = types => {
    pokeTypes.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("p");
        typeTextElement.style.color = typeColors[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes.appendChild(typeTextElement);
    });

}

const renderPokemonStats = stats => {
    pokeStats.innerHTML = '';
    stats.forEach(stat => {
        const statElement = document.createElement("div");
        const statElementName = document.createElement("p");
        const statElementAmount = document.createElement("p");

        /* statElementName.textContent = stat.stat.name; */
        /* statElementAmount.textContent = stat.base_stat; */

        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        pokeStats.appendChild(statElement);

        statElement.innerHTML = `
        <p>${statElementName.textContent = stat.stat.name}</p>
        <p>. . . . . . . . . . . . . . . . . </p>
        <p id="stats">${statElementAmount.textContent = stat.base_stat}</p>
        `

    })
}


const renderNotFound = () => {
    pokeName.textContent = 'Pokemon No Encontrado';
    pokeImg.setAttribute('src', './IMG/error2.png');
    pokeImg.style.width = '50%'
    /* pokeName.style.color = 'red'; */
    pokeScreen1.style.background = 'black';
    pokeScreen2.style.backgroundColor = 'black';
    pokeTypes.innerHTML = '';
    pokeStats.innerHTML = '';
    pokeId.innerHTML = '';
}
