/* 
  NOTE: this is the refactored code from the lecture. 
  To see the initial code we wrote, look at _index.js
*/

document.addEventListener("DOMContentLoaded", () => {
  /**** Application State ****/
  const state = {
    quotes: []
  };

  /**** DOM Elements ****/
  const quoteListUl = document.querySelector("#quote-list");
  const newQuoteForm = document.querySelector("#new-quote-form");

  /**** Event Handlers ****/
  const handleFormSubmit = e => {
    // prevent default action to stop form from POSTing
    e.preventDefault();

    // create our quote object from the form data
    const quoteObj = {
      quote: e.target.elements.quote.value,
      author: e.target.elements.author.value,
      likes: 0
    };

    // post it to the database
    apiAdaptor.post(quoteObj).then(quoteData => {
      // add the newly created quote to the application state
      state.quotes = [...state.quotes, quoteData];
      // rerender
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

      // rerender (optimistically)
      renderAllQuotes();
    }
  };

  /**** Event Listeners ****/
  newQuoteForm.addEventListener("submit", handleFormSubmit);
  quoteListUl.addEventListener("click", handleQuoteListClick);

  /**** Initial Render ****/
  apiAdaptor.getAll().then(quoteData => {
    // save to our internal quote object
    state.quotes = quoteData;
    // call render
    renderAllQuotes();
  });

  /**** Render Helpers ****/
  const quoteToHtmlString = quote => {
    return `
      <li data-id='${quote.id}' class='quote-card'>
        <blockquote class="blockquote">
          <p class="mb-0">${quote.quote}</p>
          <footer class="blockquote-footer">${quote.author}</footer>
          <br>
          <button data-action='like' data-id='${
            quote.id
          }' class='btn-success'>Likes: <span>${quote.likes}</span></button>
          <button data-action='delete' data-id='${
            quote.id
          }' class='btn-danger'>Delete</button>
        </blockquote>
      </li>
    `;
  };

  const renderAllQuotes = () => {
    const quoteListHtml = state.quotes.map(quoteToHtmlString).join("");
    quoteListUl.innerHTML = quoteListHtml;
  };
});
