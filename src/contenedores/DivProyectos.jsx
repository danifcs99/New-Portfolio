import Proyecto from '../componentes/Proyectos/Proyecto';
import './DivProyectos.css'



function DivProyectos() {
    return (
        <div className='div-proyectos'>
            <p id='texto-proyecto'>Experiencia en Proyectos Pasados</p>
            <Proyecto/>
        </div>
    )
}

export default DivProyectos;