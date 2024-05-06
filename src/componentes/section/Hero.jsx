import style from "./Hero.module.css"
import Btn from "../elements/ButtonFade"

function Hero() {
    return (
        <div className={style.Hero}>
            <h1>Alexsandro Soares Teixeira</h1>
            <p>Bem Vindo ao meu Portfolio.<br />
                Ao longo desse site vocês vão encontrar projetos desde landing page à contagem de votos na eleição a Presidente utilizando Árvore binária em C.
                Acredito que antes de sermos Desemvolvedor Web ou Desemvolvedor backend, somos Desemvolvedor, indepedente da linguagem e sim da nossa capacidade em transcrever ou solucionar um problema sem depender da linguagem.</p>
            <Btn text={'Saber mais'} link={"https://www.linkedin.com/in/dev-alexsandro-soares/"} />
        </div>
    )
}

export default Hero