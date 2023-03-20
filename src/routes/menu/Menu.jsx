import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'
import './menu-icon.css'

const routes = [];
routes.push({
  to: '/',
  text: 'Home'
})
routes.push({
  to: '/about',
  text: 'About'
})
routes.push({
  to: '/jobs',
  text: 'Jobs'
})
routes.push({
  to: '/contact',
  text: 'Contact'
})


const Menu = () => {


  const handleClick = () => {
    const navM = document.getElementById('navM');

    navM.classList.toggle('desplazar')
  }
  const click = () => {
    const menu1 = document.getElementById('menu1')
    menu1.classList.toggle('openmenu1');
  }
  /* <nav className={scrollnav ? 'menu-nav scrNav' : 'menu-nav'}> */
  return (
    <div className='container-nav'>
      <nav className='menu-nav'>
        <h4 className='menu-h4'> <span> PORTFOLIO</span> | RODRIGO</h4>

        <div className='container-icon-menu' onClick={handleClick}>
          <div onClick={click} className='menu1' id='menu1'>
            <div>
              <span className='line1'></span>
              <span className='line2'></span>
              <span className='line3'></span>
            </div>
          </div>
        </div>

        <section className='menu-desktop'>
          <ul className='menu-ul'>
            {routes.map(route => (
              <div
                key={route.text}
                className='menu-li'>
                <NavLink
                  className='a'
                  key={routes.text}
                  style={({ isActive }) => ({
                    color: isActive ? ' #fffffaa2' : '',
                  })}
                  to={route.to}
                >
                  {route.text}
                </NavLink >
              </div >
            ))}
          </ul >
        </section>

      </nav >

      <section id="navM" className='container-menu-movil' >
        <article className='container-movil'>
          <ul>
            {routes.map(route => (
              <div
                key={route.text}
                className='menu-li-movil'>
                <NavLink
                  className='a-movil'
                  key={routes.text}
                  style={({ isActive }) => ({
                    color: isActive ? ' #ffffffa2' : '',
                  })}
                  to={route.to}
                >
                  {route.text}
                </NavLink>
              </div>
            ))}
            <li className='follow'>
              <a href=""><i className="fa-solid fa-envelope"></i></a>
              <a href=""><i className="fa-brands fa-twitter"></i></a>
              <a href=""><i className="fa-brands fa-linkedin-in"></i></a>
              <a href=""><i className="fa-brands fa-github"></i></a>
            </li>
          </ul>
        </article>
      </section>

    </div >
  )
}


export { Menu }