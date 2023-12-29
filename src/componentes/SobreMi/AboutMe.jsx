import { useState } from 'react';
import './AboutMe.css'
import {FaNodeJs, FaCss3, FaHtml5, FaReact, FaNpm, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiPostman, SiDocker } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";



function AboutMe() {

    const [mostrarStack, setMostrarStack] = useState(true);
    const [mostrarTools, setMostrarTools] = useState(false);

    const handleMostrarOcultar = (boton) => {
        if (boton === 'stack') {
            setMostrarStack(!mostrarStack);
            setMostrarTools(false);
        }else if(boton === 'tools') {
            setMostrarTools(!mostrarTools);
            setMostrarStack(false);
        }
    }
    


    return(
        <div className='about-me'>
            <div className='div-texto'>
                <p id='about'>About Me</p>
                <div id='raya'></div>
                <p id='texto'>
                    Soy Desarrollador de Aplicaciones Web ubicado en Sevilla.<br/>
                    Cuento con conocimientos de diferentes Tecnoligías Web.
                    Me caracterizo por ser persistente, intentando aprender nuevas tecnologías para estar siempre actualizado y asegurar la calidad y mejora de mis proyectos.<br/>
                    Soy una persona con buenas capacidades comunicativas, con gran iniciativa y motivada para el trabajo. Además, cuento con experiencia en otros sectores como el metalúrgico.
                </p>
            </div>
            <div className='div-skills'>

                <div id='rayita'></div>

                <p id='skills'>Skills</p>

                <div className='botones'>
                        <button onClick={() => handleMostrarOcultar('stack')}
                                style=
                                {{
                                    background: mostrarStack ? 'rgb(120, 230, 230, 0.7)' : 'initial', 
                                    color: mostrarStack ? 'white' : 'initial',
                                }}>
                            Stack
                        </button>
                        {mostrarStack && (
                            <div className='boton-container'>
                                <div className='logo'><FaHtml5 size={40} color='orange' /><p>HTML</p></div>
                                <div className='logo'><FaCss3 size={40} color='#00D8FF' /><p>CSS</p></div>
                                <div className='logo'><IoLogoJavascript size={40} color='yellow'/><p>JAVASCRIPT</p></div>
                                <div className='logo'><FaNodeJs size={40} color='green'/><p>NODE</p></div>
                                <div className='logo'><FaReact size={40} color='rgb(120, 230, 230)'/><p>REACT</p></div>
                                <div className='logo'><SiTypescript  size={40} color='#00A5DA'/><p>TYPESCRIPT</p></div>
                            </div>
                        )}
                        <button onClick={() => handleMostrarOcultar('tools')}
                                style={{backgroundColor: mostrarTools ? 'rgb(120, 230, 230, 0.7)' : 'initial', color: mostrarTools ? 'white' : 'initial'  }}>
                            Tools
                        </button>
                        {mostrarTools && (
                            <div className='boton-container'>
                                <div className='logo'><FaGitAlt size={40} color='#DA4600'/><p>GIT</p></div>
                                <div className='logo'><FaNpm size={40} color='red'/><p>NPM</p></div>
                                <div className='logo'><FaGithub size={40} color='grey'/><p>GITHUB</p></div>
                                <div className='logo'><DiMysql size={40} color='orange'/><p>MYSQL</p></div>
                                <div className='logo'><SiPostman size={40} color='orange'/><p>POSTMAN</p></div>
                                <div className='logo'><SiDocker size={40} color='blue'/><p>DOCKER</p></div>
                            </div>
                        )}
                </div>

            </div>

        </div>
    )
}

export default AboutMe;