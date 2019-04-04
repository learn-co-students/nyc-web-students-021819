document.addEventListener("DOMContentLoaded", () => {

  // DOM ELEMENTS
  const pokemonContainerDiv = document.getElementById('pokemon-container')
  const searchBar = document.getElementById('pokemon-search-input')

  // EVENT LISTENERS
  // filter the pokemon based on user input
  searchBar.addEventListener('input', event => {
    const searchText = event.target.value

    const pokemons = POKEMON.filter(pokemon => pokemon.name.includes(searchText))

    // redraw the html for all the cards
    // pokemonContainerDiv.innerHTML = renderPokemon(pokemons)

    // or hide filtered out cards using css
    const pokemonIds = pokemons.map(pokemon => pokemon.id)
    pokemonContainerDiv.querySelectorAll('.pokemon-card').forEach(card => {
      const pokemonId = parseInt(card.dataset.id)
      if (pokemonIds.includes(pokemonId)) {
        card.style.display = ""
      } else {
        card.style.display = "none"
      }
    })
  })

  // flip the card image based on which card was clicked
  pokemonContainerDiv.addEventListener('click', event => {
    if (event.target.dataset.action === 'flip') {
      const img = event.target
      const clickedPokemonId = parseInt(img.dataset.id)
      const clickedPokemon = POKEMON.find(pokemon => pokemon.id === clickedPokemonId)

      img.src = (img.src === clickedPokemon.sprites.front) ? clickedPokemon.sprites.back : clickedPokemon.sprites.front
    }
  })

  // INITIAL RENDER
  // using innerHTML
  pokemonContainerDiv.innerHTML = renderAllPokemon(POKEMON)
  // using appendChild
  // pokemonContainerDiv.appendChild(renderAllPokemon(POKEMON))
});

// HELPER FUNCTIONS
// using innerHTML
function renderPokemon(pokemon) {
  return `
      <div data-id="${pokemon.id}" class="pokemon-card">
        <div class="pokemon-frame">
          <h1 class="center-text">${pokemon.name}</h1>
          <div class="pokemon-image">
            <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
          </div>
        </div>
      </div>`
}

function renderAllPokemon(pokemons) {
  return pokemons.map(renderPokemon).join('')
}

// using appendChild
// function renderAllPokemon(pokemons) {
//   const fragment = document.createDocumentFragment()
//   pokemons.forEach(pokemon => {
//     const cardDiv = document.createElement('div')
//     cardDiv.className = 'pokemon-card'
//     cardDiv.dataset.id = pokemon.id

//     const cardFrame = document.createElement('div')
//     cardFrame.className = 'pokemon-frame'

//     const cardHeader = document.createElement('h1')
//     cardHeader.className = 'center-text'
//     cardHeader.textContent = pokemon.name

//     const imageDiv = document.createElement('div')
//     imageDiv.className = 'pokemon-image'

//     const img = document.createElement('img')
//     img.dataset.id = pokemon.id
//     img.dataset.action = 'flip'
//     img.className = 'toggle-sprite'
//     img.src = pokemon.sprites.front

//     cardDiv.appendChild(cardFrame)
//     cardFrame.appendChild(cardHeader)
//     cardFrame.appendChild(imageDiv)
//     imageDiv.appendChild(img)

//     fragment.appendChild(cardDiv)
//   })
//   return fragment
// }
