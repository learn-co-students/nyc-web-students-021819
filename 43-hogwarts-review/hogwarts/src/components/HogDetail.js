import React from 'react'

const HogDetail = (props) => {
  const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
  const medal = 'highest medal achieved'

  return (
    <div>
      Specialty: { props.specialty }
      <br />
      Greased: { props.greased ? "Greasy boi" : "Not a greasy boi" }
      <br />
      Weight: { props[weight] }
      <br />
      Medal: { props[medal] }
      <br />
    </div>
  )
}

export default HogDetail
