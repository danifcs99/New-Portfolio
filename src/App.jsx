import './App.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import DivCentral from './contenedores/DivCentral';
import DivAbout from './contenedores/DivAbout.jsx';
import DivSeparador from './contenedores/DivSeparador.jsx';
import Header from './componentes/DivCentral/Header.jsx';
import DivProyectos from './contenedores/DivProyectos.jsx';
import DivContacto from './contenedores/DivContacto.jsx';

function App() {
  useEffect(() => {

    AOS.init();
  }, []);


  return (
    <div className="App">
      <Header />

      <div id='DivCentral' data-aos="zoom-out" data-aos-duration="2000">
 
        <DivCentral />

      </div>

      <DivSeparador />

      <div id='DivAbout' data-aos="zoom-in-down" data-aos-duration="4000">

        <DivAbout />

      </div>

      <DivSeparador />

      <div id='DivProyectos' data-aos="zoom-in-down">

        <DivProyectos/>

      </div>

      <DivSeparador />

      <div id='DivContacto' data-aos="zoom-in-down">

        <DivContacto />

      </div>

    </div>
  );
}

export default App;
