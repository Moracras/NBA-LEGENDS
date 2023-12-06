import React from 'react'
import logo from "../assets/nba-logo.png"
const Header = () => {
  return (
    <div className='header'> 
      <img src={logo} alt={logo} />
      <h1>NBA Legends</h1>
    </div>
  )
}

export default Header