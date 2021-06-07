import React, { useEffect } from 'react';
import firebase from 'firebase';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import { firebaseConfig } from '../../firebase.config';

export default () => {
  const { title, lang, description } = headData;
  useEffect(() => {
    if (window !== undefined) {
      firebase.initializeApp(firebaseConfig);
    }
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Splace'}</title>
        <html lang={lang || 'cat'} />
        <meta name="description" content={description || 'Splace'} />
      </Helmet>
      <App />
    </>
  );
};
