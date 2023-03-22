import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Jobs.css'
import { trabajos } from './objectJobs'

const Jobs = () => {
  const navigate = useNavigate();
  const navContact = () => {
    navigate('../contact/Contact.jsx')
  };

  document.addEventListener("DOMContentLoaded", function (eve) {
    const scrollContainer = document.getElementById('container-center-jobs')
    const btnMa = document.getElementById('btnMas')
    const btnMe = document.getElementById('btnMenos')
    scrollContainer.scrollLeft += eve.deltaY;
    btnMa.onclick = () => {
      scrollContainer.scrollLeft += 960;
      console.log('clicMa')
    }
    btnMe.onclick = () => {
      scrollContainer.scrollLeft -= 960;
      console.log('clicMe')
    }

  })

  return (
    <div className='div-container-jobs'>
      <section className='container-jobs'>
        <div className='jobs-title'>
          <h2>NOTEWORTHY PROYECTS</h2>
          <p>see the files</p>
        </div>

        <div className='container-center-jobs'>
          {trabajos.map(data => (
            <section
              className='jobs'
              key={data.key}
            >

              <img src={data.image} alt="" />
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
        <button className='btnMas' id='btnMas'>-</button>
        <button className='btnMenos' id='btnMenos'>+</button>
      </section>
    </div>
  )
}

export { Jobs }