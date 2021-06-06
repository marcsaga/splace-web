import React, { useContext, useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import SplaceImagotype from '../../images/splace-imagotype.png';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { subtitle, cta } = hero;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 769);
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container className="main-content">
        <Fade left={!isMobile} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <img src={SplaceImagotype} alt="splace-imagotype" className="imagotype" />
          {/* <h1 className="hero-title">
            <span className="text-color-main">{title}</span>
          </h1> */}
          <h2 className="hero-subtitle">{subtitle}</h2>
        </Fade>
        <Row className="buttons">
          <Fade left={!isMobile} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <p className="hero-cta">
              <span className="cta-btn cta-btn--hero">
                <Link to="about" smooth duration={1000}>
                  {cta || 'Informació'}
                </Link>
              </span>
            </p>
          </Fade>
          <Fade left={!isMobile} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <p className="hero-cta">
              <span className="cta-btn cta-btn--hero">
                <Link to="form" smooth duration={1000}>
                  {cta || 'Formulari'}
                </Link>
              </span>
            </p>
          </Fade>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
