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
          <p>Tecnologia implementadas</p>
        </div>

        <ul
        className='list-tecnology'>
            <li><div><h3>JavaScript</h3><p>Lenguaje de programacion para el desarrollo de páginas web interactivas.</p></div><p className='p-icon iconJs'><i class="fa-brands fa-square-js"></i></p></li>
            <li><div><h3>CSS3</h3><p>Lenguaje de diseño gráfico para definir y crear la presentación de paginas web</p></div><p className='p-icon iconCss'><i class="fa-brands fa-css3-alt"></i></p></li>
            <li><div><h3>HTML5</h3><p>Lenguaje de marcado para la elaboración de páginas web.</p></div><p className='p-icon iconHtml'><i class="fa-brands fa-html5"></i></p></li>
            <li><div><h3>React</h3><p>Crea interfaces de usuario interactivas, rápidas y dinámicas.</p></div><p className='p-icon iconReact'><i class="fa-brands fa-react"></i></p></li>
        </ul>

        <div className='button-container'>
          <h2>SEE PROJECTS</h2>
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
              <h6 className='h6-proyect'>{data.project}</h6>
              <h6>{data.tools}</h6>

              <div>
                <a
                className='iconSee'
                  href={data.github}
                ><span>see project</span><i className="fa-solid fa-up-right-from-square"></i></a>
                <a
                  onClick={navContact}
                  href={data.github}
                ><span>repository</span><i className="fa-brands fa-github"></i></a>

              </div>

            </section>
          ))}

        </div>

      </section>
    </div>
  )
}

export { Jobs }