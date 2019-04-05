// <!-- <tr>
  // <td>Example Name</td>
  // <td>Carnivore</td>
  // <td>1</td>
// </tr> -->

// const createAnimalRow = ({ name, species_id, diet }) => {
//   const tr = document.createElement('tr')
//   // console.log('animal', animal);
//   tr.innerHTML = `
//     <td>${name}</td>
//     <td>${species_id}</td>
//     <td>${diet}</td>
//   `
//   return tr
// }

const createAnimalRow = (animal) => {
  const tr = document.createElement('tr')
  // console.log('animal', animal);
  tr.innerHTML = `
    <td>${animal.name}</td>
    <td>${animal.species_name}</td>
    <td>${animal.diet}</td>
  `
  return tr
}

document.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector('table')
  const form = document.querySelector('form')

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = e.target.querySelector('#animal-name').value
    const species_name = e.target.querySelector('#animal-species').value
    const diet = e.target.querySelector('select').value


    // OPTIMISTIC rendering
    // const row = createAnimalRow({name: name, species_id: "1", diet: diet})
    // table.appendChild(row)

    fetch('http://localhost:3000/animals', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      // body: JSON.stringify({name, species_name, diet})
      body: JSON.stringify({name: name, species_name: species_name, diet: diet})
    })
    .then(res => res.json())
    .then(animal => {

      // PESIMISTIC RENDERING

      const row = createAnimalRow(animal)
      table.appendChild(row)
    })
  })

  fetch('http://localhost:3000/animals')
  .then(res => res.json())
  .then(animals => {
    console.log('Response is recieved', animals);
    const rows = animals.map(createAnimalRow)

    rows.forEach(tr => table.appendChild(tr))
  })

})
