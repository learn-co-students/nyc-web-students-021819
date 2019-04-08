// "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)"
document.addEventListener('DOMContentLoaded', () => {
  console.log('%cDOM is loaded!', 'color: red')

  // Application State
  let quotes;

  // DOM Elements
  const quoteListUl = document.querySelector('#quote-list')
  const newQuoteForm = document.querySelector('#new-quote-form')

  // render all the quotes on the page
  // fetch to database
  fetch('http://localhost:3000/quotes')
    .then(response => response.json())
    .then(quotesArr => {
      quotes = quotesArr
      renderAllQuotes()
    })

  quoteListUl.addEventListener('click', function (event) {
    if (event.target.dataset.action === 'like') {
      // console.log(event.target)
      const quoteId = parseInt(event.target.dataset.id)
      const foundQuote = quotes.find(quote => quote.id === quoteId)
      foundQuote.likes++

      fetch(`http://localhost:3000/quotes/${quoteId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ likes: foundQuote.likes })
      })

      // optimistic
      renderAllQuotes()

      // get the like count
      // increment it
      // update the dom
      // update the server
    }

  })


  // add event listener to the form
  newQuoteForm.addEventListener('submit', e => {
    e.preventDefault()
    console.log('using elements', e.target.elements.quote.value)
    console.log('using querySelector', e.target.querySelector('#new-quote').value)

    // get the data from the event
    const quoteText = e.target.elements.quote.value
    const authorText = e.target.elements.author.value
    const quoteObj = {
      quote: quoteText,
      author: authorText,
      likes: 0
    }

    // fetch to the database
    fetch('http://localhost:3000/quotes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(quoteObj)
    })
      .then(response => response.json())
      .then(quoteResponseObj => {

        console.log('quote from the form', quoteObj);
        console.log('quote from the server', quoteResponseObj);

        quotes.push(quoteResponseObj)
        // append the newly created quote to the page
        // quoteListUl.innerHTML += renderQuote(quoteObj)
        renderAllQuotes()
      })

  })

  // append to the DOM
  function renderQuote(quote) {
    return `
    <li class='quote-card'>
      <blockquote class="blockquote">
        <p class="mb-0">${quote.quote}</p>
        <footer class="blockquote-footer">${quote.author}</footer>
        <br>
        <button data-id="${quote.id}" data-action="like" class='btn-success'>Likes: <span>${quote.likes}</span></button>
        <button class='btn-danger'>Delete</button>
      </blockquote>
    </li>
    `
  }

  function renderAllQuotes() {
    // create the elements
    quoteListUl.innerHTML = ''
    quotes.forEach(quote => {
      quoteListUl.innerHTML += renderQuote(quote)
    })
  }
})
