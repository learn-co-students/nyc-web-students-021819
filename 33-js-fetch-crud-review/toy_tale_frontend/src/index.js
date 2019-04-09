// DOM elements & variables
const toyAdapter = adapter('http://localhost:3000/toys')
const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
const toyCollection = document.querySelector('#toy-collection')
const nameInput = document.querySelector('#toy-name')
const imageInput = document.querySelector('#toy-image')
let addToy = false

// event listeners
addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
  } else {
    toyForm.style.display = 'none'
  }
})

toyForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const name = nameInput.value
  const image = imageInput.value

  const body = {
    name,
    image,
    likes: 0
  }
  // pessimistic rendering
  toyAdapter.create(body)
  .then(toy => toyCollection.innerHTML += toyToHTML(toy))

  nameInput.value = ''
  imageInput.value = ''

})

toyCollection.addEventListener('click', (e) => {
  if (e.target.dataset.action === 'like') {
    // optimistic rendering, does not depend on AJAX/fetch
    const toyId = e.target.dataset.id
    const likeSpan = document.querySelector(`#toy-${toyId}`)
    const currLikes = parseInt(likeSpan.innerText)
    const newLikes = currLikes + 1
    likeSpan.innerText = newLikes

    const body = {
      likes: newLikes
    }

    toyAdapter.update(toyId, body)
  }

  if (e.target.dataset.action === 'delete') {
    // delete the toy
    const toyId = e.target.dataset.id
    toyAdapter.destroy(toyId)
    e.target.parentNode.remove()
  }
})

// convert to HTML
function toyToHTML(toy) {
  return ` <div class="card">
              <h2>${toy.name}</h2>
              <img src='${toy.image}' class="toy-avatar" />
              <p><span id="toy-${toy.id}">${toy.likes}</span> Likes </p>
              <button data-action='like' data-id='${toy.id}' class="like-btn">Like <3</button>
              <button data-action='delete' data-id='${toy.id}' class="delete-btn">Delete :(</button>
            </div>
          `
}

// add elements to DOM
function addToysToDOM(toys) {
  toyCollection.innerHTML = toys.map(toyToHTML).join('')
}


// fetches
// function getAllToys() {
//   return fetch('http://localhost:3000/toys')
//   .then(r => r.json())
// }
//
// function createToy(body) {
//   return fetch('http://localhost:3000/toys', {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(body)
//   })
//   .then(r => r.json())
// }
//
// function increaseLikes(id, body) {
//   return fetch(`http://localhost:3000/toys/${id}`, {
//     method: 'PATCH',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(body)
//   })
//   .then(r => r.json())
// }
//
// function deleteToy(id) {
//   return fetch(`http://localhost:3000/toys/${id}`, { method: 'DELETE' })
//   .then(r => r.json())
// }


// start app
function init() {
  toyAdapter.getAll().then(toys => addToysToDOM)
}

init()























/*
  solution wrapped in DOMContentLoaded
  uncomment code below to test!
*/

// document.addEventListener('DOMContentLoaded', () => {
//   // DOM elements & variables
//   const toyCollection = document.getElementById('toy-collection')
//   const addBtn = document.querySelector('#new-toy-btn')
//   const toyForm = document.querySelector('.container')
//   const nameInput = document.getElementById('toy-name')
//   const imageInput = document.getElementById('toy-image')
//   let addToy = false
//
//   // event listeners
//   addBtn.addEventListener('click', () => {
//     // hide & seek with the form
//     addToy = !addToy
//     if (addToy) {
//       toyForm.style.display = 'block'
//     } else {
//       toyForm.style.display = 'none'
//     }
//   })
//
//   toyForm.addEventListener('submit', (e) => {
//     e.preventDefault()
//
//     const name = nameInput.value
//     const image = imageInput.value
//
//     const body = {
//       name,
//       image,
//       likes: 0
//     }
//
//     createToy(body).then(toy => toyCollection.innerHTML += toyToHTML(toy))
//
//     nameInput.value = ''
//     imageInput.value = ''
//   })
//
//   toyCollection.addEventListener('click', (e) => {
//     if (e.target.dataset.action === 'like') {
//       const toyId = e.target.dataset.id
//       const likeSpan = document.getElementById(`toy-${toyId}`)
//       const currLikes = parseInt(likeSpan.innerText)
//       const newLikes = currLikes + 1
//       likeSpan.innerText = newLikes
//
//       patchToyLikes(toyId, newLikes)
//     }
//
//     if (e.target.dataset.action === 'delete') {
//       e.target.parentNode.remove()
//       const toyId = e.target.dataset.id
//       deleteToy(toyId)
//     }
//   })
//
//   // start app
//   fetchToys().then(toys => toyCollection.innerHTML = toysToHTML(toys))
// })
//
// // to HTML
// function toysToHTML(toys) {
//   return toys.map(toyToHTML).join('')
// }
//
// function toyToHTML(toy) {
//   return `<div class="card">
//             <h2>${toy.name}</h2>
//             <img src=${toy.image} class="toy-avatar" />
//             <p><span id='toy-${toy.id}'>${toy.likes}</span> Likes </p>
//             <button data-action='like' data-id='${toy.id}' class="like-btn">Like <3</button>
//             <button data-action='delete' data-id='${toy.id}' class="delete-btn">Delete :(</button>
//           </div>`
// }
//
// // fetches
// function fetchToys() {
//   return fetch('http://localhost:3000/toys')
//   .then(r => r.json())
// }
//
// function fetchOneToy(toyId) {
//   return fetch(`http://localhost:3000/toys/${toyId}`)
//   .then(r => r.json())
// }
//
// function createToy(toy) {
//   return fetch('http://localhost:3000/toys', {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(toy)
//   })
//   .then(r => r.json())
// }
//
// function patchToyLikes(toyId, likeCount) {
//   fetch(`http://localhost:3000/toys/${toyId}`, {
//     method: 'PATCH',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ likes: likeCount })
//   })
// }
//
// function deleteToy(toyId) {
//   fetch(`http://localhost:3000/toys/${toyId}`, { method: 'DELETE' })
// }




// adapter

// const adapter = (url) => {
//   const headers = {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   }
//
//   const getAll = () => {
//     return fetch(url).then(r => r.json())
//   }
//
//   const getOne = (id) => {
//     return fetch(`${url}/${id}`).then(r => r.json())
//   }
//
//   const create = (id, body) => {
//     return fetch(`${url}/${id}`, {
//       method: 'POST',
//       headers,
//       body: JSON.stringify(body)
//     }).then(r => r.json())
//   }
//
//   const update = (id, body) => {
//     return fetch(`${url}/${id}`, {
//       method: 'PATCH',
//       headers,
//       body: JSON.stringify(body)
//     }).then(r => r.json())
//   }
//
//   const deleteOne = (id) => {
//     return fetch(`${url}/${id}`, {
//       method: 'DELETE'
//     }).then(r => r.json())
//   }
//
//   return {
//     getAll,
//     getOne,
//     create,
//     update,
//     deleteOne
//   }
// }

// const toyAdapter = adapter('http://localhost:3000/toys')
// toyAdapter.getAll().then(console.log)
