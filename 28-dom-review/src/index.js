document.addEventListener('DOMContentLoaded', () => {
  const pokemons = POKEMON
  console.log(pokemons)
  // POKEMON IS MY DATA AS AN ARRAY
  // my data is coming in through the script tag on the line above in html

  const pokemonContainer = document.querySelector('#pokemon-container')
  const pokemonSearchInput = document.getElementById('pokemon-search-input')
  // references to nodes/elements on the page
  // organization for the constants potentially needed in the scope

  // iterate through all pokemon
  // where to append to ? => pokemonContainer
  // follow how to make the card exactly like the template
  // const pokemonContainer = document.getElementById('pokemon-container')

  // let wahtIsthis = POKEMON.map(pokemon => {
  //   return `
  //     <div class='pokemon-card'>
  //       <div class="pokemon-frame">
  //         <h1 class="center-text">${pokemon.name}</h1>
  //         <div class="pokemon-image">
  //           <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src=${pokemon.sprites.front}>
  //         </div>
  //       </div>
  //     </div>`
  // })
  //
  // pokemonContainer.innerHTML = wahtIsthis.join('')

  function renderAllPokemons(pokemons) {
    pokemons.forEach(pokemon => {
      pokemonContainer.innerHTML += `
      <div class='pokemon-card'>
      <div class="pokemon-frame">
      <h1 class="center-text">${pokemon.name}</h1>
      <div class="pokemon-image">
      <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src=${pokemon.sprites.front}>
      </div>
      </div>
      </div>`
    })
  }

  renderAllPokemons(pokemons)
  // POKEMON.forEach(pokemon => {
  //   console.log(pokemon)
  //   // create the element
  //   // fill in the data
  //   // attach it to the page
  //
  //   const pokeCardDiv = document.createElement('div')
  //   pokeCardDiv.className = 'pokemon-card'
  //   pokeCardDiv.innerHTML = `
  //     <div class="pokemon-frame">
  //       <h1 class="center-text">${pokemon.name}</h1>
  //       <div class="pokemon-image">
  //         <img data-id="${pokemon.id}" data-action="flip" whatisthis='h' class="toggle-sprite" src=${pokemon.sprites.front}>
  //       </div>
  //     </div>
  //   `
  //   pokemonContainer.append(pokeCardDiv)
  // })

  // lets do this filter function
  // get the input reference on the page
  // find the value input
  // compare to what value probably name
  // according my collection in this pokemons

  pokemonSearchInput.addEventListener('input', event => {
    pokemonContainer.innerHTML = ''
    // empty the container before adding anything to it

    const filteredPokemon = pokemons.filter(function(pokemon) {
      return pokemon.name.includes(event.target.value)
    })

    renderAllPokemons(filteredPokemon)
    // attach the new set of pokemons to the page
  })

  pokemonContainer.addEventListener('click', event => {
    // console.log(event.value)
    if (event.target.className === 'toggle-sprite') {
      const pokedPokemon = pokemons.find(pokemon => {
        return pokemon.id === parseInt(event.target.dataset.id)
      })
      // lets find the particular pokemon that was clicked
      console.log(pokedPokemon);

      // event.target.src = ????? something other than what i am front or back and lets do the opposite
      event.target.src === pokedPokemon.sprites.front
        ? event.target.src = pokedPokemon.sprites.back
        : event.target.src = pokedPokemon.sprites.front
    }
  })

})
