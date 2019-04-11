// const fetchBooks = () => data.books

// Google Books API docs:
// https://developers.google.com/books/docs/v1/using
// search term:
// `https://www.googleapis.com/books/v1/volumes?q=ruby+programming`
// author name:
// `https://www.googleapis.com/books/v1/volumes?q=inauthor:eco`

document.addEventListener('DOMContentLoaded', function() {
  console.log('the document is ready');
  let allBooks
  // const response = alexsFetch('https://www.googleapis.com/books/v1/volumes?q=fiction')

  console.log('right before the fetch');

  alexsFetch('https://www.googleapis.com/books/v1/volumes?q=fiction')
  .then(function(response) {
    console.log('response from api', response);
    allBooks = response.items.map(book => {
      return {
        id: book.id,
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors[0],
        pages: book.volumeInfo.pageCount
      }
    })
    renderBooks(allBooks)
  })

  console.log('allBooks', allBooks);

  // console.log('after the fetch allBooks', allBooks);

  // THIS IS CURRENTLY ENTIRELY SYNCHRONOUS, WE HAVE ACCESS TO `data.books`, a static array
  const books = data.books

  // DOM Nodes
  const list = document.querySelector('.ui.relaxed.divided.list')
  const header = document.querySelector('.ui.inverted.teal.menu')
  const form = document.querySelector('.ui.form')

  // FUNCTIONS: create DOM nodes
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

  const renderListItem = (bookNode) => {
    list.appendChild(bookNode)
  }

  const renderCard = (node) => {
    list.innerHTML = ''
    list.appendChild(node)
  }

  // FUNCTIONS: EVENT HANDLERS
  const handleListItemClick = (e) => {
    e.preventDefault()
      // console.log('allBooks', allBooks);
      // console.log(e.target)
    // const clicked = e.target

    const book = allBooks.find(book => book.id === e.target.dataset.id)
    console.log(book);
    //
    // if (clicked.matches('.header')) {
    //   const id = parseInt(clicked.dataset.id)
    //   const book = books.find(book => book.id === id )
    //   const card = createCard(book)
    //
    //   renderCard(card)
    // }
  }

  const handleHeaderClick = (e) => {
    e.preventDefault()
    renderBooks(books)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const input = e.target.querySelector('input')
    const value = input.value

    input.value = ''

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}`)
    // .then(res => res.json())
    .then(function(res) {
      return res.json()
    }).then(function(books) {
      const allBooks = books.items.map(book => {
        return {
          id: book.id,
          title: book.volumeInfo.title,
          author: book.volumeInfo.authors[0],
          pages: book.volumeInfo.pageCount
        }
      })
      renderBooks(allBooks)
    })
  }



  // Show Books & Attach Event Listener
  list.addEventListener('click', handleListItemClick)
  header.addEventListener('click', handleHeaderClick)
  form.addEventListener('submit', handleSubmit)

  // renderBooks(allBooks)

  console.log('alll the way at the bottom of the code');
})
