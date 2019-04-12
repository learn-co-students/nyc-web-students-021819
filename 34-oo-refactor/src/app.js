class App {

  constructor() {
    this.table = document.querySelector('tbody')
    this.form = document.querySelector('form')
  }

  handleSubmit(e) {
     e.preventDefault()

     const name = e.target.querySelector('#animal-name').value
     const species_name = e.target.querySelector('#animal-species').value
     const diet = e.target.querySelector('select').value

     const animalData = {name, species_name, diet}
     console.log('this in handleSubmit', this);
     adapter.createAnimal(animalData)
     .then(animal => {
       new Animal(animal)
       Animal.renderAll(this.table)
     })
  }

  handleSetFreeClick(e) {
    if(e.target.matches('.set-free')) {

      const id = e.target.dataset.id

      adapter.setAnimalFree(id)
      .then(() => {
        const animal = Animal.findById(id)
        animal.destroy()

        Animal.renderAll(this.table)
      })

    }
  }

  addAllEventListeners() {
    this.form.addEventListener("submit", this.handleSubmit.bind(this))
    this.table.addEventListener("click", this.handleSetFreeClick.bind(this))
  }

  fetchAllAnimals() {
    adapter.getAnimals()
    .then(animals => {
      animals.map(animal => new Animal(animal))

      Animal.renderAll(this.table)
    })
  }
}
