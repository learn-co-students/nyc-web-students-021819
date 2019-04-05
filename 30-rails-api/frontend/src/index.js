// <!-- <tr>
  // <td>Example Name</td>
  // <td>Carnivore</td>
  // <td>1</td>
// </tr> -->

const createAnimalRow = animal => {
  const tr = document.createElement('tr')
  console.log('animal is', animal);
  tr.innerHTML = `
    <td>${animal.name}</td>
    <td>${animal.species_id}</td>
    <td>${animal.diet}</td>
  `
  return tr
}

document.addEventListener("DOMContentLoaded", () => {
  console.log('loaded');
  const table = document.querySelector('table')

  console.log('request is about to be sent');
  fetch('http://localhost:3000/animals')
  .then(res => res.json())
  .then(animals => {
    console.log('Response is recieved');
    const rows = animals.map(createAnimalRow)

    rows.forEach(tr => table.appendChild(tr))
  })

  console.log('this will happen first')
})
