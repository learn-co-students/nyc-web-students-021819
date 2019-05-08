document.addEventListener("DOMContentLoaded", () => {
  // Mexican food

  const state = {
    quesadillas: [],
    tacos: []
  }



  function addQuesadillas(data){
    // data => {name,filling}
    state.quesadillas.push(data)
  }

  function addTacos(data){
    // data => {name,filling,shell}
    state.tacos.push(data)
  }

  function removeTaco(data){
    // data -> {name}
    state.tacos = state.tacos.filter(taco => taco.name !== data.name)
  }



  controller("ADD QUESADILLA", {name: "Cheesy boi", filling: "cheese"})
  controller("ADD QUESADILLA", {name: "Beef", filling: "steak"})
  controller("ADD QUESADILLA", {name: "Mango Chicken", filling: "chicken lo mein"})
  controller("ADD TACO", {name: "Al pastor", filling: "pineapple pork", shell: "hard"})
  controller("ADD TACO", {name: "The Alamo", filling: "texas", shell: "soft"})
  controller("ADD TACO", {name: "Zebra deluxe", filling: "the finest zebras",shell: "gluten-free"})
  controller("REMOVE TACO", {name: "Al pastor"})


  function controller(type, data) {
    switch(type){
      case "ADD QUESADILLA":
        addQuesadillas(data)
        break;
      case "ADD TACO":
        addTacos(data)
        break;
      case "REMOVE TACO":
        removeTaco(data)
        break;
    }
  }


  console.log(state)
})