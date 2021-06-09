/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { Form as BootstrapFrom, Container, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import firebase from 'firebase';
import Title from '../Title/Title';
import TextInput from './TextInput';

// const config = firebaseConfig;
// let instance;
// function getFirebase() {
//   if (typeof window !== 'undefined') {
//     if (instance) return instance;
//     instance = firebase.initializeApp(config);
//     return instance;
//   }
//   return null;
// }

const NORMATIVA_URL =
  'https://firebasestorage.googleapis.com/v0/b/splace-9175b.appspot.com/o/Normativa%20de%20Splace%20(1).pdf?alt=media&token=76cb3a6c-b14d-46e4-b494-50e6d4840195';

const errorText = {
  email: 'Introdueix un correu electónic',
  websiteUrl: 'Introdueix una url',
  phone: 'Introdueix un teléfon',
  comercialName: 'Introdueix un nom comercial',
  sector: 'Introdueix un sector',
  province: 'Introdueix una província',
  locality: 'Introdueix una localitat válida',
  postalCode: 'Introdueix un códi postal',
};

const Form = () => {
  const [data, setData] = useState({checked: false});
  const [dbConfirmation, setDbConfimation] = useState({show: false, correct: false});
  const [processing, setProcessing] = useState(false);

  const showError = (value) => {
    return (value === undefined) && processing;
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
    data.postalCode !== undefined &&
    data.checked === true

  return (
    <section id="form">
      <Title title="Formulari" />
      <h4>
        Introdueixi les dades corresponents i faci click a enviar per sol·licitar la certificació
      </h4>
      <Fade bottom duration={800} delay={500} distance="30px">
        <Container>
          <BootstrapFrom
            onSubmit={(e) => {
              e.preventDefault();
              if (disabledSubmit()) {
                console.log(data);
                const ref = firebase.database().ref();
                ref.child('users').push(data, (error) => {
                  if(error === null){
                    setData({}); 
                    setDbConfimation({show: true, correct: true})
                    setProcessing(false)
                  }
                  else{
                    setDbConfimation({show: true, correct: false})
                  }
                });
              } else {
                setDbConfimation({show: false, correct: false})
                setProcessing(true);
              }
            }}
          >
            <div className="form-content">
              <TextInput
                label="Correu electrónic"
                value={data.email ?? ''}
                placeholder="Introdueix el teu correu"
                type="email"
                onChange={(e) => setData({ ...data, email: e.currentTarget.value })}
                error={errorText.email}
                showError={showError(data.email)}
                required
              />
              <TextInput
                label="Página web (https://www...)"
                placeholder="Introdueix la url de la teva página web"
                type="url"
                value={data.websiteUrl ?? ''}
                onChange={(e) => setData({ ...data, websiteUrl: e.currentTarget.value })}
                error={errorText.websiteUrl}
                showError={showError(data.websiteUrl)}
                required
              />
              <TextInput
                label="Teléfono"
                value={data.phone ?? ''}
                placeholder="Introdueix un teléfono"
                type="phone"
                onChange={(e) => setData({ ...data, phone: e.currentTarget.value })}
              />
              <TextInput
                label="Nombre comercial"
                value={data.comercialName ?? ''}
                placeholder="Introdueix el nom comercial"
                onChange={(e) => setData({ ...data, comercialName: e.currentTarget.value })}
                error={errorText.comercialName}
                showError={showError(data.comercialName)}
                required
              />
              <TextInput
                label="Sector"
                value={data.sector ?? ''}
                placeholder="Introdueix el teu sector"
                onChange={(e) => setData({ ...data, sector: e.currentTarget.value })}
                error={errorText.sector}
                showError={showError(data.sector)}
                required
              />
              <TextInput
                label="Província"
                value={data.province ?? ''}
                placeholder="Introdueix la teva província"
                onChange={(e) => setData({ ...data, province: e.currentTarget.value })}
                error={errorText.province}
                showError={showError(data.province)}
                required
              />
              <TextInput
                label="Localitat"
                value={data.locality ?? ''}
                placeholder="Introdueix la teva localitat"
                onChange={(e) => setData({ ...data, locality: e.currentTarget.value })}
                error={errorText.locality}
                showError={showError(data.locality)}
                required
              />
              <TextInput
                label="Códi postal"
                value={data.postalCode ?? ''}
                placeholder="Introdueix la teu códi postal"
                type="numeric"
                onChange={(e) => setData({ ...data, postalCode: e.currentTarget.value })}
                error={errorText.postalCode}
                showError={showError(data.postalCode)}
                required
              />
              {/* <BootstrapFrom.Check
                className="form-checkbox"
                type="checkbox"
                label="Llegeix i acepta el códi étic de Splace"
              /> */}
              <div className="form-check form-checkbox">
                <input checked={data.checked} type="checkbox" className="form-check-input" id="exampleCheck1" onChange={(e) => setData({...data, checked:e.currentTarget.checked })}/>
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Llegeix i acepta la{' '}
                  <a href={NORMATIVA_URL} target="_blank" rel="noreferrer">
                   normativa de Splace
                  </a>
                </label>
             
              </div>
            </div>
            <Button type="submit" className="submit-button">
              Enviar
            </Button>
            {dbConfirmation.show === true && dbConfirmation.correct === false && (
              <BootstrapFrom.Text style={{ color: '#E50000', fontSize: '14px' }}>
                {`Oh no, alguna cosa ha anat malament, torna a intentar o prova més tard`}
              </BootstrapFrom.Text>
            )}
            {dbConfirmation.show === true && dbConfirmation.correct === true && (
              <BootstrapFrom.Text style={{ color: '#00b2a2', fontSize: '14px' }}>
                {"Sol·licitud enviada, ens uns dies ens posarem en contacte amb tu a través del correu indicat"}
              </BootstrapFrom.Text>
            )}
          </BootstrapFrom>
        </Container>
      </Fade>
    </section>
  );
};

export default Form;
