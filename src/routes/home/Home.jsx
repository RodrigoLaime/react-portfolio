import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'

const routeData = [];
routeData.push({
  to: '/about',
  text: 'ABOUT ME',
  clase: 'about-me'
})
routeData.push({
  to: '/contact',
  text: 'CONTAC ME',
  clase: 'contac-me'
})

const Home = () => {
  /*   const navigate = useNavigate();
    function navContact() {
      navigate('../contact/Contact.jsx')
    } */

  return (
    <main className='container-main-home'>
      <section className='container-home'>
        <h4>UI and UX design</h4>
        <h1>Best design for your <span>DIGITAL PRODUCTS.</span></h1>
        <div className='textPresent'>
          <p className='line'></p>
          <p> Hello I am Laime Rodrigo front-end developer and i love. <br /> Desing technology, the art of design.</p>
        </div>
        {routeData.map(ruta => (
          <div
            key={ruta.text}
            className='container-button'
          >
            <NavLink
              className={ruta.clase}
              key={ruta.text}
              to={ruta.to}
            >
              {ruta.text}
              <i className="fa-solid fa-arrow-right"></i>

            </NavLink>
          </div>
        ))}
        <div className='huallhaveMovil'></div>
      </section>

      <section className='conatiner-home-left'>
      </section>
    </main>
  )
}
export { Home }
{/*  <NavLink>
        <button className='clickMe two-btn'>
          CONTAC ME
          <i className="fa-solid fa-arrow-right"></i>

        </button>
        </NavLink> */}