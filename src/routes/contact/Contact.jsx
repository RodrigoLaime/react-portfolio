import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='container-contact'>
      <section className='activeContact 675px'></section>
      <section className='contact-right'>
        <h2>Welcome!</h2>
        <p>send us a message</p>
        <form action="" className='form-contact'>
          <li>
            {/* <label htmlFor="nombre">Name:</label> */}
            <input type="text" name='nombre' id='nombre' placeholder='Nombre'/>
          </li>
          <li>
            {/* <label htmlFor="email">Email:</label> */}
            <input type="email" name='email' id='email'placeholder='Email'/>
          </li>
          <li>
            {/* <label htmlFor="mensaje">Mensaje:</label> */}
            <textarea name="mensaje" id="mensaje" placeholder='Mensaje'/* cols="30" rows="1" */></textarea>
          </li>
          <button type='submit' className='button-contact'>Enviar</button>
        </form>
        <div className='follow-icon'>
          <p>Follow me in:</p>
          <a href="#"><i class="fa-brands fa-facebook"></i></a>
          <a href="#"><i class="fa-brands fa-linkedin"></i></a>
          <a href="#"><i class="fa-brands fa-twitter"></i></a>
        </div>
      </section>
    </div>
  )
}

export { Contact }
