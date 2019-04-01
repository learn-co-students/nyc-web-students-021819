console.log('IN INDEX')

const drivers =  ["Milo", "Otis", "Garfield"]

const destructivelyAppendDriver = function(name) {
  console.log('name is:', name);
  drivers.push(name)
}

const appendDriver = function(name) {
  // const newArray = drivers.slice()
  // newArray.push(name)
  // return newArray
  return [...drivers, name]
}
