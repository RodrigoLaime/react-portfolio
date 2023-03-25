import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Jobs.css'
import { trabajos } from './objectJobs'
import { useRef } from 'react'

const Jobs = () => {
  const navigate = useNavigate();
  const navContact = () => {
    navigate('../contact/Contact.jsx')
  };
  const scrollRef = useRef(null);
  const clickLeft = () => {
    scrollRef.current.scrollBy({
      left: -310,
      behavior: 'smooth'
    });
  };
  const clickRight = () => {
    scrollRef.current.scrollBy({
      left: 310,
      behavior: 'smooth'
    });
  };

  return (
    <div className='div-container-jobs'>
      <section className='container-jobs'>
        <div className='jobs-title'>
          <h2>NOTEWORTHY PROYECTS</h2>
          {/* <p>see the files</p> */}
          <p>Tecnologia implementadas</p>
        </div>

        <ul
        className='list-tecnology'
         style={{
          color:'white',
          padding: '20px'}}>
            <li><div><h3>JavaScript</h3><p>Lenguajes favorito de programacion</p></div><p className='p-icon'>+</p></li>
            <li><div><h3>CSS3</h3><p>Fundamental para el front, estructura</p></div><p className='p-icon'>+</p></li>
            <li><div><h3>HTML5</h3><p>Fundamental para el front, stylos</p></div><p className='p-icon'>+</p></li>
            <li><div><h3>React</h3><p>Exelente herramienta y facil de aprender</p></div><p className='p-icon'>+</p></li>
        </ul>

        <div className='button-container'>
          <button className='btnMas' onClick={clickLeft}><i className="fa-solid fa-angles-left"></i></button>
          <button className='btnMenos' onClick={clickRight}><i className="fa-solid fa-angles-right"></i></button>
        </div>
        <div className='container-center-jobs'
          ref={scrollRef}
        >
          {trabajos.map(data => (
            <section
              className='jobs'
              key={data.key}
            >

              <img src={data.image} alt="imagen" />
              <h6>{data.project}</h6>
              <h6>{data.tools}</h6>

              <div>
                <a
                  onClick={navContact}
                  href={data.github}
                ><i className="fa-brands fa-github"></i></a>
                <a
                  href={data.github}
                ><i className="fa-regular fa-folder-open"></i></a>
                <a
                  href={data.github}
                ><i className="fa-regular fa-images"></i></a>

              </div>

            </section>
          ))}

        </div>

      </section>
    </div>
  )
}

export { Jobs }