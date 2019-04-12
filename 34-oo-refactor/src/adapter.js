const API_BASE_URL = 'http://localhost:3000'

const adapter = {
  getAnimals: () => {
    return fetch(`${API_BASE_URL}/animals`).then(res => res.json())
  },
  createAnimal: (animalData) => {
    return fetch(`${API_BASE_URL}/animals`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(animalData)
    })
    .then(res => res.json())
  },
  setAnimalFree: (id) => {
    return fetch(`${API_BASE_URL}/animals/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.text())
  }
}
