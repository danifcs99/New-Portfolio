import './DivImagen.css';
import Imagen from '../../imagenes/foto-nueva-cv-removebg-preview.png';

function DivImagen() {
    return(
        <div className='div-imagen'>
            <img src={Imagen} alt='perfil'/>
        </div>
    )
}

export default DivImagen;