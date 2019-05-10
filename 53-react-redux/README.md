# React Redux

## SWBATs
- [x] Install the `react-redux` library so it can be used in a project.
- [x] Make the `store` available to their application by using the `Provider` component.
- [x] Use `connect` to give components the ability to listen for changes to the `store`.
- [x] Use `dispatch` in a React component.
- [x] Use `mapStateToProps` to read data from the `state` in the Redux `store`.
- [x] Rethinking in React with Redux


## Notes

### Vocabulary
- [ ] Redux - centralized (global) place to hold state. a state management system
- [ ] state - current status (state) of the application. snapshot of the application's data
- [ ] store - where global state is held inside redux
- [ ] Single Source of Truth - something that redux helps you maintain. one source of knowledge. the one state to rule them all. 
- [ ] Pure Functions - function that given some input, will always produce the same output
- [ ] Unidirectional Flow - data/information flows in a single direction through application
- [ ] getState() - allows you to read from state
- [ ] dispatch() - allows you to write to state
- [ ] action - an object containing 2 things: a type (a string) and a payload (an object containg data). these are given to `dispatch` and are used to change state in the reducer
- [ ] plain object - POJO
- [ ] type - a string that determines how we want state to change
- [ ] payload - an object containing data that will be used to update state
- [ ] reducer - purpose is to merge or REDUCE the old state and the incoming data into a new state
- [ ] pass by reference - 
- [ ] mutate - to change something
- [ ] mapStateToProps() - how our components read state
- [ ] mapDispatchToProps() - how our components write state
- [ ] Provider -  how our entire application gets access to the store
- [ ] connect() - how a particular component gets connected to the store
- [ ] ALL_THE_CAPS - how we write our action types. we can use a trick `const BEEF_STEAK = "BEEF_STEAK"` to help use debug our reducer


### Flow
