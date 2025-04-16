import React, { useState } from 'react'
import './Navbar.css'
import siva from '../../assets/siva.jpg'

const Navbar = () => {
  const [menu,setMenu] =useState(false)
  return (
    <nav>
      
      <div className="logo">
        <img src={siva} alt="" />
        <h3>SIVA MAHALINGAM</h3>
      </div>

      <ul className={menu?"show":""}>
        <li><a href="">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>

      <svg xmlns="http://www.w3.org/2000/svg" className='menu'onClick={()=>setMenu(!menu)} viewBox="0 0 448 512" width='30px' height='30px'><path  fill="currentColor"  d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
    
    </nav>
  )
}

export default Navbar
