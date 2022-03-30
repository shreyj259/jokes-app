import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css';
export const Navbar = () => {
  return (
      <div className='navbar-container'>
      <div className='navbar'>
          <div className='home-box'>
              <Link to="./"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z"/></svg></Link>
          </div>
          <div className='links'>
              <Link  to='./programming'>Programming</Link>
              <Link  to='./misc'>Misc</Link>
              <Link  to='./dark'>Dark</Link>
              <Link  to='./pun'>Pun</Link>
              <Link  to='./spooky'>Spooky</Link>
              <Link  to='./christmas'>Christmas</Link>

          </div>
      </div>
      </div>
  )
}
