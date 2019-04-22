Intro to React // JSX & Props
=============================

## SWBAT

- [ ] Visualize/Identify Components on any website
- [ ] Explain what a Component is conceptually in the UI
- [ ] Explain what a React Component actually is in code (an object, made by a class)
- [ ] Understand how create-react-app works and what it offers a developer
- [ ] Setup a new React app and play around with building UIs
- [ ] Use JSX to build custom components and render them in the browser
- [ ] Use props to make components more dynamic and reusable
- [ ] See how props are to components as arguments are to functions
- [ ] Begin to build modular & reusable components
- [ ] Begin to see the declarative nature of React

## Outline

- Vanilla JS and the problem React is meant to solve
- What is a Component?
  - Callback to => Single Responsibility Principle
- Environment Setup: How to setup a new React project
  - How to read docs!
- React Hello World
- Intro to JSX
  - JSX vs HTML
  - JSX & React Components
    - Making your first component
    - Component Composition
- JSX in Depth
  - Intro to the Virtual DOM
- JSX & props
  - `{ }` expressions
  - `props` && `this.props`
- Bringing it all together
  - Components
  - JSX
  - props
  - Declarative vs. Imperative

## Lecture Notes

### Vanilla JS

Use historical context and the Mod 3 experience to frame the problem that React is meant to solve:

- Experience with writing projects.
- Difficulties?
- What will React help with?
  - react vs react-dom
- Why React?
  - React is for building UIs!

### Components

_What are they?_

**Component** ([as React describes it](https://reactjs.org/docs/components-and-props.html))

1. Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
2. Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called **“props”**) and **return React elements** _describing_ what should appear on the screen.

- **Point 1:** Great! We did this in **Step 1** and understand it (single responsibility principle).
- **Point 2:** We see them say, _"return React elements"_. We know what an _element_ is! It's _JSX_!
  - Components return (aka: render) JSX (or null if nothing is meant to be rendered).
  - We don't know what **props** are though. That will be clarified once we learn about JSX.

**Summary:** Components are reusable pieces of our UI that return (render) JSX. You can think of them as legos. Some are the same, some are different. They can be a single lego or a block of them. They are the building blocks of your UI.

### Environment Setup

[Try React](https://reactjs.org/docs/try-react.html)

- create-react-app

  ```sh
  npx create-react-app my-app
  cd my-app
  npm start
  ```

- Briefly on what's under the hood:
  - npm / yarn
  - package.json
  - babel
  - webpack
- [Minimal HTML File](https://raw.githubusercontent.com/reactjs/reactjs.org/master/static/html/single-file-example.html)
  - This is how you would have done it if we were in Mod 3.

```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>Hello World</title>
      <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
      <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
      <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
    </head>
    <body>
      <div id="root"></div>
      <script type="text/babel">

        ReactDOM.render(
          <h1>Hello, world!</h1>,
          document.getElementById('root')
        );

      </script>
    </body>
  </html>
```

### React Hello World

The anatomy of a React app:
- `document.getElementById('root')`

### Intro to JSX (JSX vs HTML)

The anatomy of JSX.
- Looks like HTML, but it's not HTML.
- It's syntatic sugar for `React.createElement`.
  - It is transpiled into that method by Babel.
- What corresponds to what?
  - Code vs What's Displayed in Browser
  - Syntactic Sugar === Regular JavaScript
- Why do this?
  - Declarative vs. Imperative
  - Virtual DOM

JSX is just _syntactic sugar_ for a React method that returns an object. This object is an element and is a description that will be used by React to figure out what to render to the DOM.

```javascript
// This:
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
// is this:
'use strict';

ReactDOM.render(React.createElement(
  'h1',
  null,
  'Hello, world!'
), document.getElementById('root'));

// And this:
React.createElement(
  'h1',
  null,
  'Hello, world!'
)
// returns an object that looks like this:
{
  $$typeof: Symbol(react.element),
  type: "h1",
  key: null,
  ref: null,
  props: {
    children: "Hello, world!"
  }
}
```

If you give this object over to `ReactDOM.render`, it will be able to understand it and render the same output to the DOM.

**Example Component:**

```javascript
// An example component can be as simple as this JSX (NOT HTML!):
<h1>Hello, world!</h1>

// Which you can render to the DOM like so:
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

### JSX in Depth

- More about `React.createElement`
- Open & Close Tags
- Upper case vs lower case
- [Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions): An expression is any valid unit of code that resolves to a value.
  - Expressions Evaluate
- Attributes => `props`
- `children`
- Components!

#### Intro to the Virtual DOM

- HTML is just a string.
- The DOM is a representation of that string we can interact with programmatically, ask questions to, etc.
- The Virtual DOM is a representation of that representation.
- React will be in charge of making sure the real DOM looks like and will always be in sync with the virtual DOM.
  - And it will do it in a way that keeps things fast.

### JSX & props

- `props`: what are they?
  - They are those JSX attributes. On Components, they are called `props`.
  - _Sidenote:_ JSX attributes are still props as we can see in Babel that they are placed in the argument for `props` in `React.createElement()`.
- how do we use them?
  - Same way as attributes on JSX.
  - They are then accessible in your Component via `this.props`.
- passing props down
  - In doing the above, we can see that `props` are passed down from the parent Component.
  - We also see that you can name your `props` **anything**!
    - You should be naming you props so they make sense within the Component as that is where they are used.
    - Remember that Components are reusable pieces of UI. When possible, they should be self-contained in a way that makes them reusable. Sometimes for different purposes.
- **My favorite analogy:** props are to components as arguments are to functions.


```javascript
// ... in App.js
render() {
  return (
    <div className="foodini-container">
      {
        recipes.map(r => (
          <Card
            title={r.title}
            ingredients={r.ingredients}
            thumbnail={r.thumbnail}
            description={r.href}
          />
        ));
      }
    </div>
  )
}

// ... in Card.js
class Card extends Component {
  // ...
  render() {
    // ...
    return (
      <div className="card">
        <h1>{this.props.title}</h1>
        <List listOfThings={ingredientsArray} />
        <Carousel src={this.props.thumbnail} alt={this.props.title} />
        <Ratings />
        <List listOfThings={allergensArray} />
        <p>{this.props.description}</p>
      </div>
    );
  }
}
```

### Components Summary

> All React components must act like pure functions with respect to their props.

**My favorite analogy:** props are to components as arguments are to functions.

#### Modular Components

- Single Responsibility Principle is used to identify components (most of which are reusable)
- `import` / `export`
  - You can do everything in one file, but please don't!
- **Declarative vs. Imperative**
  - Declarative _declares_ what should happen.
  - Imperative is where you _instruct_ how to make things happen.
  - Abstraction, abstraction, abstraction.
    - Imperative is just abstraction on more lower level imperative stuff.
  - our renders should read like instructions on what to display to the screen

#### React.Component

- class syntax review (mod 3)
  - `extends Component` <= what is this?
- Inherits:
  - `render()` <= is required!!
    - Must always return 1 JSX, an array of JSX, or one of the things that renders as nothing (`null`, `true`, `false`, `undefined`): [See React Docs](https://reactjs.org/docs/jsx-in-depth.html#booleans-null-and-undefined-are-ignored)
  - `constructor()`
  - Among many many others.

#### Component Extras

`constructor()` vs `constructor(props)`
- https://github.com/facebook/react/issues/11671

### Declarative vs. Imperative

Abstraction, abstraction, abstraction.