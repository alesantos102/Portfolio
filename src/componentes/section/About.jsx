import style from './About.module.css'
import { useState } from 'react'

function About() {

    const [info, setInfo] = useState(false);

    function InfoOn() {
        setInfo(true);
    }

    function InfoOf() {
        setInfo(false);
    }

    return (
        <div className={style.About} id='About'>
            <h1>About me</h1>
            <div className={style.container}>
                <div className={style.timeline} onMouseLeave={InfoOf}>
                    <ul>
                        <li>
                            <div onMouseEnter={InfoOn} className={style.content}>
                                {info === true && (<h3>2015</h3>)}
                                <div className={style.startPoint}><div className={style.point}></div></div>
                                {info === true && (<p>Ingressei no Instituto Federal do Maranhão para estudar o ensino médio e técnico de informática integral. O curso de técnico de informática era voltado nas linguagens portugol, C, Java, HTML e Banco de dados. </p>)}
                            </div>
                        </li>
                        <li>
                            <div onMouseEnter={InfoOn} className={style.content}>
                                {info === true && (<h3>2018</h3>)}
                                <div className={style.point}></div>
                                {info === true && (<p>Finalizo o Ensino Medio e o curso de técnico de informática, tendo uma base de lógica de programação que me ajudaria na faculdade e no curso da DNC.</p>
                                )} </div>
                        </li>
                        <li>
                            <div onMouseEnter={InfoOn} className={style.content}>
                                {info === true && (<h3>2020</h3>)}
                                <div className={style.point}></div>
                                {info === true && (<p>Ingressei no Instituto Federal do Maranhão para o curso superior de Sistema de Informação.</p>
                                )} </div>
                        </li>
                        <li>
                            <div onMouseEnter={InfoOn} className={style.content}>
                                {info === true && (<h3>2023</h3>)}
                                <div className={style.point}></div>
                                {info === true && (<p>Ingressei no Curso de Formação de Tecnologia pela DNC.</p>
                                )}  </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About