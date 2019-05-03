import React from 'react'

const Welcome = (props) => {
  console.log(props)
  return (
    <div className='flex-center'>
      <h1>Ninja Tinda</h1>
      <img
        onClick={() => props.history.push('/turtles')}
        height='200px'
        width='300px'
        alt='ninja-tinda'
        src='https://stickeroid.com/uploads/pic/full-pngmart/41c8bea25099b9c0fdf3ddc45b27f39ea615be73.png'
      />
      <p>Find your true ninja turtle match today</p>
      <p>Click on 'Find Turtles' to get started!</p>
    </div>
  )

}

export default Welcome
