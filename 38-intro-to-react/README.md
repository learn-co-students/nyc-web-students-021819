Intro to React // JSX & Props
=============================

## SWBAT

- [x] Visualize/Identify Components on any website
- [x] Explain what a Component is conceptually in the UI
- [x] Explain what a React Component actually is in code (an object, made by a class)
- [x] Use JSX to build custom components and render them in the browser


- [ ] Understand how create-react-app works and what it offers a developer
- [ ] Setup a new React app and play around with building UIs
- [ ] Use props to make components more dynamic and reusable
- [ ] See how props are to components as arguments are to functions
- [ ] Begin to build modular & reusable components
- [ ] Begin to see the declarative nature of React


## Declarative vs Imperative Programming
*IMPERATIVE*
click on a thing
make other thing happen

Find an element on the page
Add an event listener to that element with a callback to execute upon event trigger

Go get the ingredients
Lay down the bread
Lay down the toppings
Add sauces
Smush

*DECLARATIVE* 
renderCard(name){
  return `<div>${name}</div>`
}

Order a sandwich and tell them what toppings you want 
Sandwich comes out


## Slow abstraction to JSX

First form: *STATIC HTML*
```jsx
ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
    <h1>Hello, beef!</h1>
    <h1>Hello, squid!</h1>
  </div>,
  document.getElementById('root')
);
```


Second form: *Dynamic, reusable components using regular functions and arguments*
```jsx
function Greeting(phrase,name){
  return <h1>Hello {phrase}! - {name}</h1>
}

ReactDOM.render(
  <div>
    {Greeting("world", "Alex")}
    {Greeting("beef", "Peter")}
    {Greeting("squid", "Katarina")}
  </div>, 
  document.getElementById('root')
)
```

THIRD FORM: *Static components using JSX*
```jsx
function Greeting(){
  return <h1>Hello world!</h1>
}

ReactDOM.render(
  <div>
    <Greeting />
    <Greeting />
    <Greeting />
  </div>, 
  document.getElementById('root')
)
```

FINAL FORM: *Dynamic, reusable components using JSX and props*
```jsx
function Greeting(props){
  return <h1>Hello {props.phrase}! - {props.name}</h1>
}

ReactDOM.render(
  <div>
    <Greeting phrase="world" name="Alex"/>
    <Greeting phrase="beef" name="Peter"/>
    <Greeting phrase="squid" name="Katarina"/>
  </div>, 
  document.getElementById('root')
)
```

## Thinking about props

In thinking about props, repeat this mantra: props are to components as arguments are to functions!

Think back to mod 1:
Before ActiveRecord, you passed in arguments one by one and in a particular order: `User.new("Alex", 23, "therapist"`

With ActiveRecord, you passed a single hash and mapped your values onto the specific keys they corresponded to:
`User.new(name: "Alex", age: 23, occupation: "therapist"`

This is very much analogous to the change over from regular ol' JS functions to JSX components

```jsx
// A regular ol' JS function with arguments <-- THE PAST
function Greeting(phrase, name){
  return <h1>Hello {phrase}! - {name}</h1>
}

// A JSX component using props <-- THE REACT WAY
function Greeting(props){
  return <h1>Hello {props.phrase}! - {props.name}</h1>
}
```



## More notes:

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