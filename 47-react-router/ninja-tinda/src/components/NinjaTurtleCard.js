import React from 'react'


const colors = [
  "#8920a9",
  "#E29342",
  "#B92121",
  "#373499"
]

function NinjaTurtleCard ({ turtle, weapon }) {
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
      </div>
    </div>
  )
}

export default NinjaTurtleCard