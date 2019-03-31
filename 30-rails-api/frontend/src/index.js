// <!-- <tr>
  // <td>Example Name</td>
  // <td>Carnivore</td>
  // <td>1</td>
// </tr> -->

const API_URL = 'http://localhost:3000'

document.addEventListener("DOMContentLoaded", () => {
  console.log('the DOM content has loaded');
  const tbody = document.querySelector('tbody')
  const form = document.querySelector('form.ui.form')

  const createAnimalRow = (animal) => {
    // console.log('animal', animal);
    const tr = document.createElement('tr')
    tr.innerHTML = `
      <td>${animal.name}</td>
      <td>${animal.diet}</td>
      <td>${animal.species_name}</td>
    `

    return tr
  }

  fetch(`${API_URL}/animals`)
  .then(res => res.json())
  .then(animals => {
    console.log('here is the response from the API', animals);
    animals.map(createAnimalRow).forEach(row => {
      tbody.appendChild(row)
    })
  })


  form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e);
    const name = form.querySelector('#animal-name').value
    const species_name = form.querySelector('#animal-species').value
    const diet = form.querySelector('#animal-diet .selected').dataset.value

    // const newAnimalRow = createAnimalRow({name: name})
    // tbody.appendChild(newAnimalRow)
    fetch(
      `${API_URL}/animals`,
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          species_name: species_name,
          diet: diet
        })
      }
    )
    .then(res => res.json())
    .then(data => {
      const newAnimalRow = createAnimalRow(data)
      tbody.appendChild(newAnimalRow)
    })
  })
})
