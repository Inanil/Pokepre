import React from 'react'
import InputHome from './InputHome'



const HomeScreen = () => {
  return (
    <div className='container_home'>
      <img src="/src/assets/img/logo.png" alt="" />
      <h2 className='home_subtitle'><span className='home_subtitle-span'>Welcome !</span> Trainer</h2>
     
      <InputHome />
    </div>
  )
}

export default HomeScreen