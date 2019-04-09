## Hello, let's build a simple app that allows us to keep track of our favorite quotes and who said it.  

If you don't have json-server installed, run `$ npm i -g json-server`.  
If you already have it installed, run the server by: `$ json-server --watch db.json`.

### Deliverables
* Populate page with quotes with a `GET` request to `http://localhost:3000/quotes`.

* Each quotes should have the following structure:
  ```
    <li class='quote-card'>
      <blockquote class="blockquote">
        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer class="blockquote-footer">Someone famous</footer>
        <br>
        <button class='btn-success'>Likes: <span>0</span></button>
        <button class='btn-danger'>Delete</button>
      </blockquote>
    </li>
  ```
* Submitting the form creates a new quote and adds it to the list of quotes without having to refresh the page. (Whether you choose to optimistically render or not is up to you).
* Clicking the delete button should delete the respective quote from the database and remove it from the page without having to refresh.
* Clicking the like button will increase the number of likes for this particular comment in the database and on the page without having to refresh.


### BONUS
* Add an edit button to each quote-card that will allow the editing of a quote. _(Hint: there is no 'correct' way to do this. You can try creating a hidden form that will only show up when hitting the edit button.)_
* Add a sort button on the page that I can toggle on and off that will sort the list of quotes by author name.
