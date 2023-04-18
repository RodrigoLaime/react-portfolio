/* import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className='div-about'>About</div>
  )
}

export { About } */
import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 100px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #f5f5f5;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #f5f5f5;
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #0077cc;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #005ea2;
  }
`;

function About() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, subject, message });
    // Aquí podrías enviar el correo electrónico utilizando alguna librería o servicio de correo electrónico
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="text"
        placeholder="Asunto"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />
      <Textarea
        placeholder="Mensaje"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <Button type="submit">Enviar</Button>
    </FormContainer>
  );
}

export { About } 