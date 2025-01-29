import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import css style
import './Navbar.css';




function Navbar() {

 // správná inicializace stavu
 const [click, setClick] = useState(false); // Pole rozdělené na `click` a `setClick`

 // funkce
 const handleClick = () => setClick(!click); // Přepíná stav
 const closeMobileMenu = () => setClick(false); // Nastavuje `click` na `false`

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>

                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    LOGO
                </Link>

              <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
              </div>

              <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                        About
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link to='/users' className='nav-links' onClick={closeMobileMenu}>
                        Users
                    </Link>
                </li>

                

              </ul>

            </div>
        </nav>
    </>
  );
}

export default Navbar

