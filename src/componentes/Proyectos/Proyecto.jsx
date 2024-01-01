import './Proyecto.css';
import Imagen1 from '../../imagenes/portfolio-antiguo.png';
import Imagen2 from '../../imagenes/padel-quizz.png';
import Imagen3 from '../../imagenes/proyecto-videoclub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Proyecto(){
    return (
        <div className='div-proyecto'>
            <div className='div-1'>

            <img src={Imagen1} alt='padelquizz' style={{ width: '75%', height: '45%' }}/>
            <h2 id='titulo'>Primer Portfolio</h2>
            <p>HTML, CSS</p>
            <div className='git'><a href='https://github.com/danifcs99/Mi-Portfolio'><FontAwesomeIcon icon={faGithub}/></a></div>

            </div>

            <div className='div-1'>
            
            <img src={Imagen2} alt='padelquizz' style={{ width: '90%' }}/>
            <h2 id='titulo'>PadelQuizz</h2>
            <p>HTML, CSS, JAVASCRIPT</p>
            <div className='git'><a href='https://github.com/danifcs99/PadelQuizz'><FontAwesomeIcon icon={faGithub}/></a></div>


            </div>

            <div className='div-1'>
            
            <img src={Imagen3} alt='ProyectoVideoclub' style={{ width: '80%' }}/>
            <h2 id='titulo'>Proyecto Videoclub</h2>
            <p>JAVA</p>
            <div className='git'><a href='https://github.com/danifcs99/Proyecto_Videoclub_Java'><FontAwesomeIcon icon={faGithub}/></a></div>


            </div>
        </div>
    )
}

export default Proyecto;