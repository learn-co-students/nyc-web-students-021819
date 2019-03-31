// const fetchBooks = () => data.books

// Google Books API docs:
// https://developers.google.com/books/docs/v1/using
// search term:
// `https://www.googleapis.com/books/v1/volumes?q=ruby+programming`
// author name:
// `https://www.googleapis.com/books/v1/volumes?q=inauthor:eco`

document.addEventListener('DOMContentLoaded', function() {
  console.log('the document is ready');
  // THIS IS CURRENTLY ENTIRELY SYNCHRONOUS, WE HAVE ACCESS TO `data.books`, a static array
  let books = []
  console.log('we are about to make an AJAX req');
  fetch("https://www.googleapis.com/books/v1/volumes?q=fiction")
  .then(res => res.json())
  .then(function(json) {
    console.log('the response is', json);
    // debugger
    let formattedBooks = json.items.map(book => ({id: book.id, title: book.volumeInfo.title, author: book.volumeInfo.authors[0]}))
    renderBooks(formattedBooks)
  })

  // alexsFetch("https://www.googleapis.com/books/v1/volumes?q=fiction")
  // .then(function(response) {
  //   console.log('the response is', response);
  //   // debugger
  //   let formattedBooks = response.items.map(book => ({id: book.id, title: book.volumeInfo.title, author: book.volumeInfo.authors[0]}))
  //   renderBooks(formattedBooks)
  // })
  console.log('We hav just made an AJAX req');
  console.log('books:', books)

  // DOM Nodes
  const list = document.querySelector('.ui.relaxed.divided.list')
  const header = document.querySelector('.ui.inverted.teal.menu')
  const form = document.querySelector('.ui.form')

  // FUNCTIONS: create DOM nodes (components)
  const createListItem = (book) => {
    const div = document.createElement('div')
    div.className = 'item'
    div.innerHTML = `
    <i class="large book middle aligned icon"></i>
    <div class="content">
      <a data-id="${book.id}" class="header" href="/">${book.title}</a>
      <div class="description">
        ${book.author}
      </div>
    </div>
    `
    return div
  }

  const createCard = (book) => {
    const div = document.createElement('div')
    div.className = 'ui fluid card'
    div.innerHTML = `
    <div class="image">
      <img src="${book.imageLink}"/>
    </div>
    <div class="content">
      <h1 class="ui header">
        ${book.title}
        <div class='sub header'>
          ${book.author}
        </div>
      </h1>
      <div class="meta">
        <span>${book.pages} pages</span>
      </div>
      <div class="ui divider"></div>
      <div class="description">
        ${book.description}
      </div>
    </div>
    `
    return div
  }


  // FUNCTIONS: append (render) onto DOM
  const renderBooks = (books) => {
    list.innerHTML = ''
    const bookListItems = books.map(createListItem)
    bookListItems.forEach(renderListItem)
  }

  const renderListItem = (node) => {
    list.appendChild(node)
  }

  const renderCard = (node) => {
    list.innerHTML = ''
    list.appendChild(node)
  }

  // FUNCTIONS: EVENT HANDLERS
  const handleListItemClick = (e) => {
    e.preventDefault()
    const clicked = e.target

    if (clicked.matches('.header')) {
      const id = parseInt(clicked.dataset.id)
      const book = books.find(book => book.id === id )
      const card = createCard(book)

      renderCard(card)
    }
  }

  const handleHeaderClick = (e) => {
    e.preventDefault()
    renderBooks()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const term = e.target.querySelector('input').value

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}`)
    // below this line is the the same code copied from what we built in lecture
    .then(res => res.json())
    .then(function(json) {
      let formattedBooks = json.items.map(book => ({id: book.id, title: book.volumeInfo.title, author: book.volumeInfo.authors[0]}))
      renderBooks(formattedBooks)
    })
  }

  // fetch(
  //   "http://safe-river-70277.herokuapp.com/encouraging_notes",
  //   {
  //     method: 'POST',
  //     headers: {"Content-Type": "application/json"},
  //     body: JSON.stringify({message: "it works!", username: "my name"})
  //   }
  // )


  // Show Books & Attach Event Listener
  // renderBooks()

  list.addEventListener('click', handleListItemClick)
  header.addEventListener('click', handleHeaderClick)
  form.addEventListener('submit', handleSubmit)



  console.log('allllllll the way at the bottom');
})
