import React from 'react'

const ProfileCard  = ({ turtle: { terrestrial, name, image_url, age } }) => {
  return <div id="profile-card" style={{backgroundColor: terrestrial ? "#e29342" : "#6198b9"}}>
    <div className="img_wrapper" >
      <img alt={name} className="image" src={image_url} />
    </div>
    <div id="description">
      <h3>{name} - {age}</h3>
    </div>
  </div>
}

export default ProfileCard