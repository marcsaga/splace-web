import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, subtitle, cta } = hero;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 769);
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={!isMobile} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            <span className="text-color-main">{title}</span>
          </h1>
          <h2 className="hero-subtitle">{subtitle}</h2>
        </Fade>
        <Fade left={!isMobile} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
        </Fade>
        <Fade left={!isMobile} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="projects" smooth duration={1000}>
                {cta || 'Formulario'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
