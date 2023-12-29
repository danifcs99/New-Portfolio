/* eslint-disable jsx-a11y/anchor-is-valid */
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// eslint-disable-next-line no-unused-vars
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

function Header() {
  const scrollTo = (element) => {
    scroller.scrollTo(element, {
      duration: 1000,
      delay: 1,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div className='header'>
      <nav>
        <p style={{ fontFamily: 'Kanit, sans-serif' }}>DanielSantaella();</p>
        <ul>
          <li>
            <a onClick={() => scrollTo('DivCentral')} style={{ fontFamily: 'Kanit, sans-serif' }}>
              Inicio
            </a>
          </li>
          <li>
            <a onClick={() => scrollTo('DivAbout')} style={{ fontFamily: 'Kanit, sans-serif' }}>
              Sobre mi
            </a>
          </li>
          <li>
            <a onClick={() => scrollTo('DivProyectos')} style={{ fontFamily: 'Kanit, sans-serif' }}>
              Proyectos
            </a>
          </li>
          <li>
            <a onClick={() => scrollTo('DivContacto')} style={{ fontFamily: 'Kanit, sans-serif' }}>
              Contacto
            </a>
          </li>
        </ul>
        <ul className='no-animacion'>
          <li>
            <a href='https://github.com/danifcs99/danifcs99' style={{ fontSize: '25px' }}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/daniel-santaella-rodr%C3%ADguez-a502a621a/' style={{ fontSize: '25px' }}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </nav>

    </div>
  );
}

export default Header;
