document.addEventListener('DOMContentLoaded', () => {
  const pokemonContainer = document.querySelector('#pokemon-container')
  const pokemonSearchInput = document.querySelector('#pokemon-search-input')
  const pokemons = POKEMON

  function renderPokemons(pokemons) {
    let pokemonsCardsString = pokemons.map(pokemon => {
      return `<div class="pokemon-card">
        <div class="pokemon-frame">
          <h1 class="center-text">${pokemon.name}</h1>
          <div class="pokemon-image">
            <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
          </div>
        </div>
      </div>`
    })

    pokemonContainer.innerHTML = pokemonsCardsString.join('')
  }

  renderPokemons(pokemons)

  pokemonSearchInput.addEventListener('keyup', (event) => {
    let pokemons = POKEMON.filter(pokemon => {
      return pokemon.name.includes(event.target.value)
    })
    renderPokemons(pokemons)
  })

  pokemonContainer.addEventListener('click', (event) => {
    if (event.target.dataset.action === 'flip') {
      const clickedPokemon = POKEMON.find(pokemon => pokemon.id === parseInt(event.target.dataset.id))
      event.target.src === clickedPokemon.sprites.front ? event.target.src = clickedPokemon.sprites.back : event.target.src = clickedPokemon.sprites.front
    }
  })
})
