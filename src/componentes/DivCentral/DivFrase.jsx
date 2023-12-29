import './DivFrase.css';
import { Typewriter } from 'react-simple-typewriter';


function DivFrase(){
    return(
        <div className='div-frase'>
            <p id='hola'>Hola a todos, Soy</p>
            <p id='nombre'>Daniel Santaella</p>
            <p id='web'>
                <Typewriter
                    words={['Desarrollador Web']}
                    loop={Infinity}
                    cursor
                    cursorStyle='|'
                    typeSpeed={100}
                    deleteSpeed={100}
                    delaySpeed={2500}
                />
            </p>
            <p id='welcome'>Bienvenido a Mi Web Personal.👋</p>
            <a href='/CV_Daniel_Santaella_2.pdf' download><button id='boton'>Descargar CV</button></a>
        </div>
    );
}

export default DivFrase;