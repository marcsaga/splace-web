import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import About2 from './About2/About';
import About3 from './About3/About';
import Contact from './Contact/Contact';
import Form from './Form/Form';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <Hero />
      <About />
      <About3 />
      <About2 />
      <Form />
      <Contact />
    </PortfolioProvider>
  );
}

export default App;
