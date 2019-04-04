/*
  1. get some data
  2. change the data to some HTML
  3. manipulate the DOM
*/

document.addEventListener("DOMContentLoaded", () => {
  // console.table(POKEMON)

  // DOM ELEMENT
  const pokemonContainerDiv = document.getElementById('pokemon-container')
  const pokemonSearchInput = document.querySelector('#pokemon-search-input')

  // EVENT LISTERS
  // filter functionality
  // get the user input 
  // based on the user input, filer our array of pokemon  
  // rerender 
  pokemonSearchInput.addEventListener('input', event => {
    const userInput = event.target.value
    const filteredPokes = POKEMON.filter(poke => poke.name.includes(userInput))

    pokemonContainerDiv.innerHTML = renderAllPokemon(filteredPokes)
  })

  pokemonContainerDiv.addEventListener('click', function (e) {
    if (e.target.dataset.action === 'flip') {
      const img = e.target
      const pokeId = parseInt(img.dataset.id)

      const pokedPoke = POKEMON.find(poke => poke.id === pokeId)

      if (img.src === pokedPoke.sprites.front) {
        img.src = pokedPoke.sprites.back
      } else {
        img.src = pokedPoke.sprites.front
      }
    }
  })

  // INITIAL RENDER

  // iterate over the array forEach
  // create that element for each pokemon
  // create the innerHTML
  // add it to the parent tag
  // then append it to the DOM
  // or use appendChild
  // pokemonContainerDiv.innerHTML = ""
  // POKEMON.forEach(function (poke) {
  //   // console.log(poke)
  //   pokemonContainerDiv.innerHTML += `
  //   <div class="pokemon-card">
  //     <div class="pokemon-frame">
  //       <h1 class="center-text">${poke.name}</h1>
  //       <div class="pokemon-image">
  //         <img data-id="${poke.id}" data-action="flip" class="toggle-sprite" src="${poke.sprites.back}">
  //       </div>
  //     </div>
  //   </div>
  //   `
  // })




  // const mappedPokes = POKEMON.map(poke => {
  //   return `<div class="pokemon-card">
  //     <div class="pokemon-frame">
  //       <h1 class="center-text">${poke.name}</h1>
  //       <div class="pokemon-image">
  //         <img data-id="${poke.id}" data-action="flip" class="toggle-sprite" src="${poke.sprites.back}">
  //       </div>
  //     </div>
  //   </div>
  //   `
  // }).join("")

  pokemonContainerDiv.innerHTML = renderAllPokemon(POKEMON)
});

// HELPER METHODS
function renderPokemon(poke) {
  return `<div class="pokemon-card">
            <div class="pokemon-frame">
              <h1 class="center-text">${poke.name}</h1>
              <div class="pokemon-image">
                <img data-hi="yeet" data-id="${poke.id}" data-action="flip" class="toggle-sprite" src="${poke.sprites.back}">
              </div>
            </div>
          </div>
        `
}

function renderAllPokemon(pokemons) {
  // return pokemons.map(renderPokemon).join("")

  return pokemons.map(function (poke) {
    return renderPokemon(poke)
  }).join("")
}
