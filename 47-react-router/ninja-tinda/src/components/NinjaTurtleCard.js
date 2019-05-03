import React from 'react'


const colors = [
  "#8920a9",
  "#E29342",
  "#B92121",
  "#373499"
]

function NinjaTurtleCard (props) {
  console.log(props)
  const turtleId = parseInt(props.match.params.id)
  const turtle = props.turtles.find(t => t.id === turtleId)
  const ninjaTurtle = props.ninjaTurtles.find(nt => nt.turtle_id === turtleId)
  const weapon = ninjaTurtle.weapon
  // console.log(ninjaTurtle)
  // console.log(foundTurtle)
  const style={backgroundColor: colors[Math.floor(Math.random()*colors.length)]}

  return (
    <div style={style} className="ninja-card">
      <div className="img_wrapper" >
        <img alt={turtle.name} className="image" src={turtle.image_url} />
      </div>
      <div id="description">
        <h3>Ninja {turtle.name} - {turtle.age}</h3>
        <h3>Weapon of choice: {weapon.name}</h3>
        <div className="img_wrapper" >
          <img alt={weapon.name} className="image weapon" src={weapon.image_url} />
        </div>
        <button onClick={() => props.history.goBack()}>Back</button>
      </div>
    </div>
  )
}

export default NinjaTurtleCard
