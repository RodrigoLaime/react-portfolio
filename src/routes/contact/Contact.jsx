import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4sg9omc', 'template_4kwtnf2', form.current, 'd_i8gidgtQLVD6vH8')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <div className='container-contact'>
      <section className='activeContact 675px'></section>
      <section className='contact-right'>
        <h2>Welcome!</h2>
        <p>send us a message</p>
        <form ref={form} onSubmit={sendEmail} className='form-contact'>
          <li>
            {/* <label htmlFor="nombre">Name:</label> */}
            <input type="text" name='user_name' id='nombre' placeholder='Nombre'/>
          </li>
          <li>
            {/* <label htmlFor="email">Email:</label> */}
            <input type="email" name='user_email' id='email'placeholder='Email'/>
          </li>
          <li>
            {/* <label htmlFor="mensaje">Mensaje:</label> */}
            <textarea name="message" id="mensaje" placeholder='Mensaje'/* cols="30" rows="1" */></textarea>
          </li>
          <button type='submit' value="Send" className='button-contact'>Enviar</button>
        </form>
        <div className='follow-icon'>
          <p>Follow me in:</p>
          <a href="/"><i className="fa-brands fa-facebook"></i></a>
          <a href="/"><i className="fa-brands fa-linkedin"></i></a>
          <a href="/"><i className="fa-brands fa-twitter"></i></a>
        </div>
      </section>
    </div>
  )
}

export { Contact }
