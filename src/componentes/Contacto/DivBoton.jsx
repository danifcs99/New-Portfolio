import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DivBoton.css'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

<FontAwesomeIcon icon="fa-solid fa-envelope" />

function DivBoton(){
    return(
        <div className='div-boton'>
            <div className='redes'>
                <a href='https://github.com/danifcs99/danifcs99'><FontAwesomeIcon icon={faGithub}/></a>
                <a href='https://www.linkedin.com/in/daniel-santaella-rodr%C3%ADguez-a502a621a/'><FontAwesomeIcon icon={faLinkedin}/></a>
                <a href='mailto:danielsantaellarodriguez1999@gmial.com'><FontAwesomeIcon icon={faEnvelope} /></a>
                <a href='daniel_santaella99'><FontAwesomeIcon icon={faInstagram}/></a>
                <a href='https://www.google.es/maps/@37.4114601,-5.9261703,18.25z?entry=ttu'><FontAwesomeIcon icon={faLocationDot}/></a>
                <a href='tel:+34675115766'><FontAwesomeIcon icon={faPhone}/></a>
            </div>
        </div>
    );
}

export default DivBoton;