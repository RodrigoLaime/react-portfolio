import React from 'react'
import { useNavigate, NavLink, Link } from 'react-router-dom'
import './Jobs.css'
import { trabajos } from './objectJobs'

const Jobs = () => {
  const navigate = useNavigate();
  const navContact = () => {
    navigate('../contact/Contact.jsx')
  };

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
                <p onClick={navContact}>{data.contact}</p>
                <h6>{data.project}</h6>
                <h6>{data.tools}</h6>
          
                  <div>
                    <a
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