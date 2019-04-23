Events & State
==============

## SWBATs

- [x] Add event handlers to elements in React
- [x] Explain why we have Synthetic Events
- [x] Correctly choose when to use `props` vs `state`, and explain why one would use one or the other
- [x] Instantiate `state` inside and outside of the `constructor`
- [x] Create event handler callbacks that manipulate `state`
- [x] Trigger rerenders by calling `setState`
- [x] Manipulate the DOM by changing values in `state` instead of using vanilla JS
- [ ] Draw a component hierarchy and describe the Flow of Information

## Lecture Notes

How would we change that index number in vanilla JS?

- Might have some integer in the global scope that's managing the index
- Grab the "Ninjify" button using `querySelector`
- Add a click event listener to the "Ninjify" button
- When that button is clicked, the index is incremented and then the profile-card is rerendered


## Extras

- [React Events in Depth](https://www.youtube.com/watch?v=dRo_egw7tBc)
- [Function Binding](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)
- [Class Field Declarations](https://github.com/tc39/proposal-class-fields)
- [event.target vs event.currentTarget](https://github.com/facebook/react/issues/5733)
- [JavaScript Event Delegation, and event.target vs. event.currentTarget](https://medium.com/@florenceliang/javascript-event-delegation-and-event-target-vs-event-currenttarget-c9680c3a46d1)
- [super() vs super(props)](https://overreacted.io/why-do-we-write-super-props/)