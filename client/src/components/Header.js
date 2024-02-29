import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'





const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div className='left'>
            <h1>hansha jangir</h1>
          </div>
          <div className='right'>
            
            <ul>
              <li>
                <NavLink to="/">
home
                </NavLink>
              </li>
              <li>
              <NavLink to="/Dashboard">
Dashboard
                </NavLink>
              </li>
              <li><NavLink to="/Login">
Login
                </NavLink></li>
              <li>
                <img  src='/logo192.png' style={{widht:"50px", borderRadius:"50%",}} alt=''/>
              </li>

            </ul>

          </div>
        </nav>

      </header>


    </>


  )
  }
  export default Header