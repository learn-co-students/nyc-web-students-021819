/* 
  NOTE: this is the refactored code from the lecture. 
  To see the initial code we wrote, look at _index.js

  In this code I refactored the fetch calls to an apiAdaptor function 
  that is defined in the adaptor.js file
*/

document.addEventListener("DOMContentLoaded", () => {
  /**** Application State ****/
  const state = {
    quotes: []
  };

  /**** DOM Elements ****/
  const quoteListUl = document.querySelector("#quote-list");
  const newQuoteForm = document.querySelector("#new-quote-form");


  /**** Event Handler functions ****/
  const handleFormSubmit = e => {
    // prevent default action to stop form from POSTing
    e.preventDefault();

    // create our quote object from the form data
    const quoteObj = {
      quote: e.target.elements.quote.value,
      author: e.target.elements.author.value,
      likes: 0
    };

    // POST it to the database
    apiAdaptor.post(quoteObj).then(quoteData => {
      // add the newly created quote to the application state
      // using the ...spread operator to append our new quote to the list of existing quotes (state.quotes.push(quoteData) also works!)
      state.quotes = [...state.quotes, quoteData];

      // rerender all the quotes
      renderAllQuotes();
    });
  };

  const handleQuoteListClick = e => {
    if (e.target.dataset.action === "delete") {
      // get the quote ID from the dataset
      const quoteId = parseInt(e.target.dataset.id);

      // delete the quote server side
      apiAdaptor.remove(quoteId);

      // remove from our quote array
      state.quotes = state.quotes.filter(quote => quote.id !== quoteId);

      // (optimistically) rerender
      renderAllQuotes();
    } else if (e.target.dataset.action === "like") {
      // get the quote ID from the dataset
      const quoteId = parseInt(e.target.dataset.id);

      // find the quote
      const quote = state.quotes.find(quote => quote.id === quoteId);

      // update it locally
      quote.likes++;

      // update it on the server
      apiAdaptor.update(quoteId, { likes: quote.likes });

      // (optimistically) rerender
      renderAllQuotes();
    }
  };


  /**** Helpers to generate new HTML and append to DOM ****/
  const createQuoteDomNode = quote => {
    const li = document.createElement('li')
    li.className = 'quote-card'
    li.dataset.id = quote.id
    li.innerHTML = `
      <blockquote class="blockquote">
        <p class="mb-0">${quote.quote}</p>
        <footer class="blockquote-footer">${quote.author}</footer>
        <br>
        <button data-action='like' data-id='${quote.id}' class='btn-success'>Likes: <span>${quote.likes}</span></button>
        <button data-action='delete' data-id='${quote.id}' class='btn-danger'>Delete</button>
      </blockquote>`;
    return li
  };

  const renderQuote = (node) => {
    quoteListUl.appendChild(node)
  }

  const renderAllQuotes = () => {
    // reset our quoteListUl
    quoteListUl.innerHTML = ''

    // create new DOM nodes from our quotes in application state
    const quoteDomNodes = state.quotes.map(createQuoteDomNode);

    // append them to the DOM
    quoteDomNodes.forEach(renderQuote)
  };


  /**** Attach Event Listeners to the DOM ****/
  newQuoteForm.addEventListener("submit", handleFormSubmit);
  quoteListUl.addEventListener("click", handleQuoteListClick);


  /**** Initial Data Fetch and Render ****/
  apiAdaptor.getAll().then(quoteData => {
    // save to our internal quote object
    state.quotes = quoteData;
    // call render
    renderAllQuotes();
  });
});
