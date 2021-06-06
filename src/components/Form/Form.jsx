import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { Form as BootstrapFrom, Container, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Title from '../Title/Title';
import TextInput from './TextInput';

const errorText = {
  email: 'Introduzca un correo electónico',
  websiteUrl: 'Introduzca una url',
  phone: 'Introduzca un teléfono',
  comercialName: 'Introduzca un nombre comercial',
  sector: 'Introduzca un sector',
  province: 'Introduzca una província',
  locality: 'Introduzca una localidad válida',
  postalCode: 'Introduzca un código postal',
};

const Form = () => {
  const [data, setData] = useState({});
  const [processing, setProcessing] = useState(false);

  const showError = (value) => {
    console.log(value === undefined && processing);
    return value === undefined && processing;
  };

  useEffect(() => {
    console.log('suiu');
  }, [processing]);

  const disabledSubmit = () =>
    data.email !== undefined &&
    data.websiteUrl !== undefined &&
    data.comercialName !== undefined &&
    data.sector !== undefined &&
    data.province !== undefined &&
    data.locality !== undefined &&
    data.postalCode !== undefined;

  return (
    <section id="form">
      <Title title="Formulario" />
      <Fade bottom duration={800} delay={500} distance="30px">
        <Container>
          <BootstrapFrom
            onSubmit={(e) => {
              e.preventDefault();
              if (disabledSubmit()) {
                console.log(data);
                const ref = firebase.database().ref();
                ref.child('users').push(data);
              } else {
                setProcessing(true);
              }
            }}
          >
            <div className="form-content">
              <TextInput
                label="Correo electrónico"
                placeholder="Introduce tu correo"
                type="email"
                onChange={(e) => setData({ ...data, email: e.currentTarget.value })}
                error={errorText.email}
                showError={showError(data.email)}
                required
              />
              <TextInput
                label="Página web (url)"
                placeholder="Introduce la url de tu página web"
                type="url"
                onChange={(e) => setData({ ...data, websiteUrl: e.currentTarget.value })}
                error={errorText.websiteUrl}
                showError={showError(data.websiteUrl)}
                required
              />
              <TextInput
                label="Teléfono"
                placeholder="Introduce teléfono"
                type="phone"
                onChange={(e) => setData({ ...data, phone: e.currentTarget.value })}
              />
              <TextInput
                label="Nombre comercial"
                placeholder="Introduce el nombre comercial"
                onChange={(e) => setData({ ...data, comercialName: e.currentTarget.value })}
                error={errorText.comercialName}
                showError={showError(data.comercialName)}
                required
              />
              <TextInput
                label="Sector"
                placeholder="Introduce tu sector"
                onChange={(e) => setData({ ...data, sector: e.currentTarget.value })}
                error={errorText.sector}
                showError={showError(data.sector)}
                required
              />
              <TextInput
                label="Província"
                placeholder="Introduce tu província"
                onChange={(e) => setData({ ...data, province: e.currentTarget.value })}
                error={errorText.province}
                showError={showError(data.province)}
                required
              />
              <TextInput
                label="Localidad"
                placeholder="Introduce tu localidad"
                onChange={(e) => setData({ ...data, locality: e.currentTarget.value })}
                error={errorText.locality}
                showError={showError(data.locality)}
                required
              />
              <TextInput
                label="Código postal"
                placeholder="Introduce tu código postal"
                type="numeric"
                onChange={(e) => setData({ ...data, postalCode: e.currentTarget.value })}
                error={errorText.postalCode}
                showError={showError(data.postalCode)}
                required
              />
              <BootstrapFrom.Check
                className="form-checkbox"
                type="checkbox"
                label="Lea y acepte el código ético i la proteción de datos de Splace"
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
