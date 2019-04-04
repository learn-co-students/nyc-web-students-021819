# Intro to the DOM 📜
# Intro to Events at bottom

# pull up a random (work friendly) wikipedia page
# change the text of the title
# change the color of the title

# grab all h2 tags using document.getElementsByTagName
# change the text of all h2 tags to the same thing
# turn the HTML collection into an Array, and then use forEach
# to change all of the text
# change the font of all h2s to comic sans
"Comic Sans MS, cursive, sans-serif"


### The Document Object Model Overview
- What is the DOM?
  - The DOM (Document Object Model) is a representation of an HTML document as a **tree** that can be manipulated with JavaScript
  - Javascript is a language created to manipulate the DOM
  - "[JavaScript] DOM methods allow programmatic access to the tree; with them you can change the document's structure, style or content." - [MDN DOM Reference](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model). In other words, JavaScript allows us to **C**reate, **R**ead (find), **U**pdate, and **D**elete DOM nodes and _dynamically_ manipulate web pages.


## The DOM is a Tree 🎄

- What is a tree in computer science? A data structure that represents some hierarchical structure; parent nodes (elements), child nodes, sibling nodes. These structures are called trees because they look like inverted trees:

![tree](https://webdocs.cs.ualberta.ca/~aixplore/learning/DecisionTrees/InterArticle/graphics/inverted-tree.gif)

- Here is another representation of a tree with a root node and several children or branches:

![tree data structure](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Binary_tree.svg/300px-Binary_tree.svg.png)

- Here is a representation of our HTML as a tree. This is the DOM:

![tree structure via tutorial republic](https://www.tutorialrepublic.com/lib/images/html-dom-tree.gif)

---

- DOM (Document Object Model)
  - The DOM is a tree structure with several child `nodes`. All of the elements in the tree are related to each other. Some elements may have children:

```html
<!-- document.body gives us the body node -->
<body>

    <div id="outer-node"><!-- div is a child of body -->
      <div><!-- this div is a child of outer-node -->
        <div>
          <h1>Internet Memes</h1>
        </div>
      </div>
    </div>
</body>
```

---

- This tree structure starts at the `document`, where `document` is the topmost **parent** of each individual `node` (HTML Element). Every single HTML element in the DOM is a `node`: `<p></p>`, `<h1></h1>`, `<img>`, etc. **If you are not comfortable with HTML syntax and/or HTML tags, go through the [intro to HTML section on W3Schools](https://www.w3schools.com/html/html_intro.asp)**
- JavaScript allows us to **traverse** this tree to find and _manipulate_ different `nodes`.
  - "The DOM model represents a document with a logical tree. Each branch of the tree ends in a node, and each node
    contains objects. DOM methods allow programmatic access to the tree; with them you can change the document's
    structure, style or content." -
    [MDN Article on the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- Elements (`nodes`) have properties that can be manipulated (`style`, `textContent`, `innerHTML`, etc). In this particular example, we'll be manipulating the `.src` attribute of some `img` tags.
- Element interfaces
  - Different elements (`table`, `p`, `image`) support different methods
    - `image.src`, for instance
    - `document.body.style.backgroundColor = 'red'`
  - Refer to the documentation for each element you wish to manipulate to find out which properties/attributes you can manipulate. - [MDN HTML Element Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

---

### Selecting DOM Nodes

- There are certain built in JavaScript functions that allow us to traverse the DOM and find specific elements in the tree:

- We can search for single elements:
  - `document.getElementById('element-id')` will find an HTML element with a particular id
  - `node.querySelector` is more open-ended and will find whatever you tell it to:
    - `node.querySelector('div')` will find the first `<div></div>` tag in the tree
    - `node.querySelector('.btn-small')` will find the first element with a **[CSS Class][mdn-css-class] of `btn-small`**
    - `node.querySelector('#search-input')` will find the element with a **[CSS ID][mdn-css-id] of `search-input`**
    - Note the distinction. CSS Classes are preceded by a `.`; CSS IDs are preceded by a `#`
- We can also search for multiple elements:
  - `node.getElementsByTagName('p')` will return all instances of a particular tag; in the example above, all `<p></p>` tags.
  - `node.getElementsByClassName('btn-small')` will return all elements that have a particular CSS Class
  - `node.querySelectorAll('.btn-small')` will return **all** of the elements with a class of `btn-small`
- We can also combine selectors for more specificity:
  - We need a space between `#parent .child`
  - We can chain selectors `div.image.highlighted`
  - We can search for siblings with `~`

```html
<div id="outer-node">
  <div>
    <div>
      <h1>Internet Memes</h1>
    </div>
  </div>
</div>
```

```js
const nestedH1 = document.querySelectorAll('#outer-node h1')

```
- The snippet above will look for any `<h1></h1>` tags **inside** the element with a CSS ID of `outer-node`

- **IMPORTANT** you will get an _array-like_ object such as a `NodeList` back from some of the methods above. Refer to the chart at the bottom of this document for more info. If you need to call `Array` methods like `.map` or `.forEach`, you can convert your `NodeList` or `HTMLCollection` into an array like so:

```js
const nestedH1 = document.querySelectorAll('#outer-node h1') //NodeList

nestedH1.map //undefined

const nestedH1AsArray = Array.from(nestedH1) //array

nestedH1AsArray.map //function

```

- Refer to the [documentation if you are unfamiliar with `Array.from`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

---

### Modifying DOM Nodes
- We can assign a `node` to a variable: `const body = document.querySelector('body')`
- We can change the attributes of a `node`: `body.style.backgroundColor = red`
- `textContent`vs. `innerHTML`:
  - The `textContent` of a particular element is the text that appears in between the opening and closing tags: `<h1>HELLO WORLD</h1>` the `textContent` is the string `HELLO WORLD`
  - The `innerHTML` of a particular element is a **string representing all of the HTML and text of a particular node and its children**:

```html
<div id="outer-node">
  <div>
    <div>
      <h1>Internet Memes</h1>
    </div>
  </div>
</div>
```

```js
const outerNode = document.querySelector('#outer-node')

outerNode.textContent // 'Internet Memes'
outerNode.innerHTML
/*
"
          <div>
            <div>
              <h1>Internet Memes</h1>
            </div>
          </div>
        "
*/
```

---

### Removing Nodes
- `node.removeChild(childNode)` will remove a particular child
- `node.remove()` will remove the node on which it was called:

```html
<div id="outer-node">
  <div>
    <div>
      <h1>Internet Memes</h1>
    </div>
  </div>
</div>

<div id="container">
  <p>Add Images Here</p>
  <!-- <img src=""> -->
</div>
```

```js
const innerH1 = document.querySelector('#outer-node h1')

innerH1.remove() //removes the node from the page

//OR

const container = document.querySelector('#container')

const containerPTag = document.querySelector('#container p')

container.removeChild(containerPTag) //removes the child p tag
```

---

### Creating DOM Objects
- Creating new nodes `const myImg = document.createElement('img')`
- Adding attributes to elements `img.src = 'https://images.cool.cooool_dog.png'`
- Appending to node `document.body.appendChild(element)` will add that node to the `<body></body>`

---

### Activity
- With the person sitting next to you, navigate to your favorite website (NewYorkTimes or Twitter are good examples):
  - Select elements and save them to JavaScript variables
  - Remove at least 2 elements from the page
  - Modify elements (e.g., replace image url, change text, change CSS)
  - Create new elements and add them to the page
  - Change all instances of one word on the page
  - Replace all images on only a certain portion of the DOM
  - Change every other header
  - Bonus (Hard): replace all elements of one tag to another (e.g., `p` to `h1`)

---

### Adding Some Dank Memes to the Page

- If you look at the `index.html`, there are **two** JavaScript files being loaded: `index.js` and `dankMemes.js`. We can use JavaScript to create image tags, set the urls based on the array of strings found in `dankMemes.js` and add those `<img></img>` tags to the page.
  - First we'll need to find the container to which we'll append the images:

```js
const imgContainer = document.querySelector('#container')
```

  - Then we'll iterate over the array of memes and create a new `<img></img>` tag **forEach** 🧐 element in the array:

```js
dankMemes.forEach(function(memeUrlString) {
  const newImgTag = document.createElement('img') //create a new img tag
  newImgTag.src = memeUrlString //set the src for that img
  imgContainer.appendChild(newImgTag) //add the img tag to the DOM
})
```

  - A note about the choice to use `forEach` instead of `map`. Since we do not care about the return value of our iterator, `forEach` is fine here. If the return value––**mapped** or transformed array––mattered, then we could have mapped over the array.

---

## Manipulating the DOM with JavaScript Chart

| Selector name                      | Return shape   | Return type    | Live? | Reference             | can i call forEach? |
| ---------------------------------- | -------------- | -------------- | ----- | --------------------- | -------- |
| `document.getElementById()`        | Single element | Element        | N/A   | https://goo.gl/8cHGoy | N/A      |
| `element.getElementsByClassName()` | Collection     | HTMLCollection | Yes   | https://goo.gl/qcAhcp | No       |
| `element.getElementsByTagName()`   | Collection     | HTMLCollection | Yes   | https://goo.gl/QHozSh | No       |
| `element.querySelector()`          | Single element | Element        | N/A   | https://goo.gl/6Pqbcc | N/A      |
| `element.querySelectorAll()`       | Collection     | NodeList       | No    | https://goo.gl/vTfXza | Yes      |

---

## External Resources:

- [MDN Article on the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [MDN Article on CSS Class Selectors][mdn-css-class]
- [MDN Article on CSS ID Selectors][mdn-css-id]
- [MDN Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)
- [MDN NodeList reference](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
- [MDN HTMLCollection reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection)
- [CSS Selectors Cheatsheet](https://guide.freecodecamp.org/css/tutorials/css-selectors-cheat-sheet/)
- [MDN Document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [MDN Document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [MDN Element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
- [When are Selected HTML Elements Live](https://stackoverflow.com/questions/28163033/when-is-nodelist-live-and-when-is-it-static)
- [Difference Between the DOM and the BOM](https://stackoverflow.com/questions/4416317/what-is-the-dom-and-bom-in-javascript)


[mdn-css-class]: https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors
[mdn-css-id]: https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors



# Intro to Events

# Browser Events 🎟

## Outline

* Why events?
* What are events and event listeners
* When and why to use event listeners
* Event types
* Synthesize knowledge of forms with event listeners

---

## What are Web Events 🤔

- "In the case of the Web, events are fired inside the _browser window_, and tend to be attached to a specific item that resides in it — this might be a single HTML element, set of HTML elements, the HTML document loaded in the current tab, or the entire browser window. There are a lot of different types of events that can occur, for example:

  - The user clicking the mouse over a certain element or hovering the cursor over a certain element.
  - The user pressing a key on the keyboard.
  - The user resizing or closing the browser window.
  - A web page finishing loading.
  - **A form being submitted.**
  - A video being played, or paused, or finishing play.
  - An error occurring.
- You will gather from this (and from glancing at the [MDN Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)) that there are a lot of events that can be responded to.

- "Each available event has an **event handler**, which is a block of code (usually a user-defined **JavaScript function**) that will be run when the event fires. When such a block of code is defined to be run in response to an event firing, we say we are **registering an event handler**. Note that event handlers are sometimes called **event listeners** — they are pretty much interchangeable for our purposes, although strictly speaking, they work together. The listener **listens** out for the event happening, and the handler is the code that is run in response to it happening." - [MDN Introduction to Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events).
  - As it pertains to what we've seen so far, we can tell JavaScript to listen for certain events and invoke a **callback** function when that event occurs:

```js
const firstBtnOnPage = document.querySelector('button')

firstBtnOnPage.addEventListener('click', function() {
  console.log('BUTTON WAS CLICKED')
})
```

- We are telling `addEventListener` to invoke the **anonymous function** passed as the second argument **_when_** the event fires; we're waiting for something to happen then **responding** to this event.

---
## Listening for Events

- JavaScript allows us to [traverse the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) and find elements. Let's see how we can target a particular element and listen for events:

- Assuming our HTML looks like this:

```html
<div id="comments">
  <h3>Comments</h3>
  <form id="comment-form">
    <div class="field">
      <input id="new-comment" type="text" placeholder="New Comment" />
      <input type="submit" class="btn" value="Submit" />
    </div>
  </form>
  <div id="commentsContainer">
  </div>
</div>
```

- We can grab the `comment-form` and listen for events on it:

```javascript
const commentForm = document.getElementById('comment-form')
// OR querySelector
// const commentForm = document.querySelector('#comment-form')
```

- Something to look out for. If we are loading our js files in the `head` tag of our HTML, there is a chance that the JavaScript code we have written will start executing **before our HTML has been loaded and parsed by the browser**. This might cause some element selectors to return `null`. As a precaution, we can listen for the `DOMContentLoaded` event.
  - "The `DOMContentLoaded` event is fired when the initial HTML document has been completely loaded and parsed" - [MDN DOMContentLoaded Reference](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded). Let's add this to our code:

```javascript
document.addEventListener('DOMContentLoaded', function() {
  const commentForm = document.getElementById('comment-form')

})
```

- In the snippet above, we are adding an **event listener** to the document and listening for the `DOMContentLoaded` event. When that event is fired, the anonymous function passed to `addEventListener` will be invoked.
  - "`addEventListener()` sets up a function that will be called whenever the specified `event` is delivered to the target. Common targets are HTML `Element`, `Document`, and `Window`" - [MDN `addEventListener` Reference](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

- Now that we're waiting for our DOM content to load, let's listen for a `submit` event on our form:
  - "The `submit` event is fired when a form is submitted.
  - Note that `submit` is fired **only** on the form element, not the button or submit input. (Forms are submitted, not buttons.)" - [MDN Article on the `submit` event](https://developer.mozilla.org/en-US/docs/Web/Events/submit)

```javascript
document.addEventListener('DOMContentLoaded', function() {
  const commentForm = document.getElementById('comment-form')
  commentForm.addEventListener('submit', function(event) {
    console.log(event)
  })
})
```

- If we try adding something to the form and clicking submit, we'll see our `console.log` for a second then it will disappear.

![](https://media.giphy.com/media/1L5YuA6wpKkNO/giphy.gif)

---

![request/response cycle](https://developer.mozilla.org/files/4291/client-server.png)

- [Forms][mdn-forms] will attempt to make an HTTP `POST` request on **submission**. Recall from Mod2 that our forms would send a `POST` request that was then handled by our controller (remember HTTP and the request/response cycle?). If we give our `form` an `action` attribute, it will try to `POST` to the endpoint specified by the `action` attribute:

```html
<form id="comment-form" action="/hotdog">
  <div class="field">
    <input id="new-comment" type="text" placeholder="New Comment" />
    <input type="submit" class="btn" value="Submit" />
  </div>
</form>
```

- This form ⬆️ will try to send a `POST` request to `/hotdog`
- If our form **does not have an action attribute** it will attempt to `POST` to the URL we are currently on, making it **appear as though** our page is being refreshed. **Even though it looks like the page is being refreshed, that is not technically what is happening. The form is sending a POST request out into the void**

---

- Our current JS app is not currently sending data to a server, so we'll need some way to **prevent** this **default** action of submitting the form 🤔

![spongebob and patrick contemplate HTML forms](https://media.giphy.com/media/TPl5N4Ci49ZQY/giphy.gif)

- Let's tell our **event handler**––our callback function––to `preventDefault`:

```js
document.addEventListener('DOMContentLoaded', function() {
  const commentForm = document.getElementById('comment-form')
  commentForm.addEventListener('submit', function(event) {
    event.preventDefault() //stop form from POSTING
    console.log(event.target) //form
  })
})
```

- Some key points about the `event` object that is passed to our `formSubmitEventHandler` function as a parameter:
  - "The Event interface represents any event which takes place in the DOM; some are user-generated (such as mouse or keyboard events), while others are generated by APIs (such as events that indicate an animation has finished running, a video has been paused, and so forth). There are many types of events, some of which use other interfaces based on the main Event interface. Event itself contains the properties and methods which are common to all events." - [MDN Article on `Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event)
  - `event.target` refers to the **HTML Element** that dispatched the event. For example, if I tell my app to listen for `click` events and the user clicks on a `p` tag, `event.target` will be the `p` tag. If the user clicks on a `button` the `event.target` will be the button. In our case, the `form` is causing the `submit` event to fire.
  - This is something I'd _strongly recommend_ **burning into your memory**: HTML forms will attempt to send a POST request. Any **child** of an HTML form such as an `<input/>` or `<button></button>` will **cause the form to submit**. YOU DO NOT WANT TO LISTEN FOR A CLICK EVENT IN A FORM; YOU SHOULD BE LISTENING FOR THE `submit` EVENT!!! **super important lol**

![learn to use the internet](https://media.giphy.com/media/SPZFhfUJjsJO0/giphy.gif)

- We need to grab the user's input _from the form_. That information is stored in the `input` tag **inside the form**. If we refer back to our `form` we can see that `input` is a **child** of the `form` itself:

```html
<form id="comment-form" action="/hotdog">
  <div class="field">
    <input id="new-comment" type="text" placeholder="New Comment" />
    <input type="submit" class="btn" value="Submit" />
  </div>
</form>
```

- Since our `event.target` is the `comment-form` itself, we can grab the input using `querySelector`:

```javascript
document.addEventListener('DOMContentLoaded', function() {

  const commentForm = document.getElementById('comment-form')

  commentForm.addEventListener('submit', function(event) {
    event.preventDefault() //stop form from POSTING

    const userInputField = event.target.querySelector('#new-comment')
    //OR document.querySelector('#new-comment')

    const userInputString = userInputField.value
  })

})
```

- `userInputField` will give us the whole `input` element. Since we only care about the user's new comment, we can grab the `value` attribute which will be whatever comment the user typed into the field. Refer to the [MDN Docs for `input` tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) if you're unfamiliar.

- Let's use the information the user typed into the form to add their comment to the page:

```js
document.addEventListener('DOMContentLoaded', function () {

  const commentsContainer = document.getElementById('commentsContainer')

  const commentForm = document.getElementById('comment-form')

  commentForm.addEventListener('submit', function(event) {
    event.preventDefault() //stop form from POSTING

    const userInputField = event.target.querySelector('#new-comment')

    const userInputString = userInputField.value

    const commentPTag = document.createElement('p')
    commentPTag.textContent = userInputString

    commentsContainer.appendChild(commentPTag)

  })

})
```
- "In an HTML document, the `document.createElement()` method creates the HTML element specified by `tagName`." - [MDN Article on `createElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
  - In other words, calling `document.createElement('p')` will create a `p` tag.
  - This tag is an HTML object that we can _manipulate_ using JavaScript. We can change the style, or give it a particular [`textContent`][mdn-text-content] as a string.
- We can then `append` that `p` tag to the DOM by calling `commentsContainer.appendChild(commentPTag)`. Also note that `commentsContainer` is declared at the top of our function.

---

## Event Bubbling and Event Delegation

- Given a series of buttons deeply nested in some `<div></div>` tags on our page:

```html
<div id="helicopter-parent">
  <div>
    <br>
    <div>
      <br>
      <div>
        <p>HI</p>
        <div>
          <button class="btn" data-name="alert">Alert ME</button>
          <button class="btn" data-name="log">Console Log something</button>
          <button class="btn" data-name="error">Console Error</button>
        </div>
      </div>
    </div>
  </div>
</div>
```

- How might we listen for events on those buttons?
  - We **could** find all the buttons, loop over that collection and attach several event listeners for our buttons 😔. There must be a better way!™

---

### What about Event Delegation?

![event delegation diagram](https://javascript.info/article/bubbling-and-capturing/eventflow@2x.png)

- The diagram above outlines the flow of JS events from the target all the way up the DOM (tree) to the topmost node, the `Document`
  - In other words, **every HTML element will know about everything that happens to its children**

- Instead of iterating over the buttons and attaching duplicate event handlers, we can create **one** event handler to Rule Them All™:

```js
const helicopterNode = document.getElementById('helicopter-parent')

helicopterNode.addEventListener('click', function(event) {
  console.log(event.target) //event target will be whatever node was clicked
})
```

- Now we can introduce some control flow to our click handler and decide what to do based on which button was clicked:

```js
helicopterNode.addEventListener('click', function(event) {
  // i do not need to prevent the click default action
  //event.target is the node that was clicked
  // our buttons have a key of dataset -> { name: 'alert' }
  // i am checking the value of button.dataset.name and deciding what to do based on what i find

  if (event.target.dataset.name === 'alert') {
    window.alert('HI')
  } else if (event.target.dataset.name === 'log') {
    console.log('HI')
  } else if (event.target.dataset.name === 'error') {
    console.error('HI')
  }
})
```

- _nice_

![nice](https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif)

---

## External Resources:

- [MDN Introduction to Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [MDN Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- [MDN DOMContentLoaded Reference](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded)
- [MDN `addEventListener` Reference](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN Article on Sending Form Data][mdn-forms]
- [MDN Article on `Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event)
- [MDN Article on the `submit` event](https://developer.mozilla.org/en-US/docs/Web/Events/submit)
- [MDN Article on `input` tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input))
- [MDN Article on `createElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [MDN Article on `textContent`][mdn-text-content]
- [MDN Article on Dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)
- [JavaScript.info Article on Event Bubbling](https://javascript.info/bubbling-and-capturing)


[mdn-forms]: https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data
[mdn-text-content]: https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
