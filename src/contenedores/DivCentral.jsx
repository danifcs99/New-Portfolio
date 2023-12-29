import './DivCentral.css'
import DivImagen from '../componentes/DivCentral/DivImagen.jsx';
import DivFrase from '../componentes/DivCentral/DivFrase.jsx';


function DivCentral() {
    return (
        <div className='div-central'>
            <DivImagen/>
            <DivFrase/>
        </div>
    )
}

export default DivCentral;