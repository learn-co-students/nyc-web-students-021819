import React from 'react'
import withBasic from '../HOCs/withBasic'


const Goof = (props) => {
  return <div className='flex-center'>
    <h1>ya dun goofed</h1>
    <img
      alt='goof'
      src='https://gust-production.s3.amazonaws.com/uploads/startup/logo_image/764511/Turtlehead.png'
    />
  </div>
}

export default withBasic(Goof)
