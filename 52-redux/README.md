Intro to Redux
==============

## SWBATs

- [ ] Install the redux library so it can be used in a project.
- [ ] Create a `store` in redux with some default `state`.
- [ ] Create a `reducer` to change `state` based on an `action`.
- [ ] Use `dispatch` to send an `action` to the `store` to make changes to `state`.
- [ ] Read `state` in the `store`.
- [ ] Make a connection b/w Redux and one other concept learned in Mods 1-4 (message passing).

## Lecture Notes

Redux **will** test your JavaScript knowledge to the **MAX**!!!

### React Recap

**Pain Points**

_Our Pain Points_

State issues
- managing state
- fairly large state
- keeping track of when things were rendering
- passing down many levels just to change something
- multiple components responding to the same state
- sibling components triggers changes
- different pieces of state in different levels
- instances with independent state

Redux. That's what.

- That's when Redux helps the most.
- React == easy and fast to setup, but becomes a pain when it becomes too heavy.
- Redux == slow to setup (boilerplate), but makes to much easier to scale apps.


### Redux setup

1. Write a `reducer` function
```js
// the most basic template of a reducer:
const defaultState = {
  // whatever you want
}
function reducer(state = defaultState, action){
  // remember: WHATEVER is returned from the reducer BECOMES state
  return state
}
```

2. Create Store
```js
import {createStore} from 'redux'

// give the reducer to your store so it can initialize and setup your state
const store = createStore(reducer)
```

### Reading and Writing to Redux
```js
// read from redux
store.getStore()

// write to redux
store.dispatch({type: "SOME_TYPE"})
```

`dispatch` takes one argument: a POJO that we call an action. The action must at a minimum have a `type` attribute which will be used to figure out which part of your reducer to call. Any other data that is needed to change state is passed in as an attribute on the action that is called, by convention, `payload`.

```js
store.dispatch({type: "SOME_TYPE", payload: {data: "my data"}})
```


### Information Flow

Everytime `dispatch` is called, the `reducer` is called. The 1st argument is the previous state, the 2nd argument is the `action` object that was passed in when `dispatch` was called. Whatever is returned from `reducer` then **becomes** state (i.e. it does not update state, it completely **overwrites** it)

