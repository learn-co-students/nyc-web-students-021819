class Animal {
  constructor({ id, name, diet, species_name: speciesName }) {
    this.id = id
    this.name = name
    this.diet = diet
    this.speciesName = speciesName

    this.constructor.all.push(this)
  }

  render() {
    const tr = document.createElement('tr')

    tr.innerHTML = `
      <td>${this.name}</td>
      <td>${this.speciesName}</td>
      <td>${this.diet}</td>
      <td class='center aligned'>
        <button data-id='${this.id}' class='ui inverted red button set-free'>
          <i class='key icon'></i>
          Set ${this.name} Free
        </button>
      </td>
    `
    return tr
  }

  destroy() {
    this.constructor.all = this.constructor.all.filter(animal => animal !== this)
  }

  static renderAll(domNode) {
    console.log('what is domNode', domNode);
    domNode.innerHTML = ''

    this.all.forEach(animal => {
      domNode.appendChild(animal.render())
    })
  }

  static findById(id) {
    return this.all.find(animal => animal.id === parseInt(id))
  }
}

Animal.all = []
