import React, { useState } from 'react';
import { Form as BootstrapFrom, Container, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Title from '../Title/Title';
import TextInput from './TextInput';

const Form = () => {
  const [data, setData] = useState({});
  return (
    <section id="form">
      <Title title="Formulario" />
      <Fade bottom duration={800} delay={500} distance="30px">
        <Container>
          <BootstrapFrom
            onSubmit={(e) => {
              e.preventDefault();
              alert(data.email);
            }}
          >
            <div className="form-content">
              <TextInput
                label="Correo electrónico"
                placeholder="Introduce tu correo"
                type="email"
                onChange={(e) => setData({ ...data, email: e.currentTarget.value })}
                note="Te enviaremos un correo lueguito"
              />
              <TextInput
                label="Algo1"
                placeholder="Introduce tu correo"
                type="email"
                onChange={(e) => setData({ ...data, algo: e.currentTarget.value })}
                note="Te enviaremos un correo lueguito"
              />
              <TextInput
                label="Correo electrónico"
                placeholder="Introduce tu correo"
                type="email"
                onChange={(e) => console.log(e.currentTarget.value)}
                note="Te enviaremos un correo lueguito"
              />
              <TextInput
                label="Correo electrónico"
                placeholder="Introduce tu correo"
                type="email"
                onChange={(e) => console.log(e.currentTarget.value)}
                note="Te enviaremos un correo lueguito"
              />
              <TextInput
                label="Correo electrónico"
                placeholder="Introduce tu correo"
                type="email"
                onChange={(e) => console.log(e.currentTarget.value)}
                note="Te enviaremos un correo lueguito"
              />
              <TextInput
                label="Correo electrónico"
                placeholder="Introduce tu correo"
                type="email"
                onChange={(e) => console.log(e.currentTarget.value)}
                note="Te enviaremos un correo lueguito"
              />
            </div>
            <Button type="submit" className="submit-button">
              Enviar
            </Button>
          </BootstrapFrom>
        </Container>
      </Fade>
    </section>
  );
};

export default Form;
