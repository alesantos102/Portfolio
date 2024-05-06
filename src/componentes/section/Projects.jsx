import style from './Projects.module.css'
import Card from '../elements/Card.jsx'
import lgDnc from '../../assets/lg-dnc.png'
import lgArquitetura from '../../assets/lg-arquitetura.png'
import apiDnc from '../../assets/api-dnc.png'
import arvoreBinaria from '../../assets/arvoreBinaria.png'


function Projects() {
    return (
        <div className={style.Projects} id='Projects'>
            <h1>Projects</h1>
            <section>
                <Card image={lgDnc} title={'Project Landing Page DNC'} description={'Landing Page para o curso de tecnologia, capturando nome, email e Telefone, onde é liberado a ementa do curso.'} url={"https://escola-dnc-curso-tecnologia.netlify.app/"} />
                <Card image={lgArquitetura} title={'Project Landing Page Arquitetura'} description={'Landing page para uma empresa de arquitetura onde é capturado o nome e email para contato posterior.'} url={"https://desafio-1-arquitetura.netlify.app/"} />
                <Card image={apiDnc} title={'Project API Meteo and ViaCep'} description={'Página sobre consumo de API, onde é capturado nome e email, e para a api é requerido o CEP, Latidude e Longitute, retornando o endereço do CEP e a temperatuda da Longitude e Latitude.'} url={"https://dncdesafio2.netlify.app/"} />
                <Card image={arvoreBinaria} title={'Project Binary Tree'} description={'Programa para contabilizar votos na eleição presidencial de Luiz Inácio e Jair Bolsonaro utilizando árvore binária.'} url={"https://replit.com/@Alexsandrosoare/terceira-atv"} />
            </section>
        </div>
    )
}

export default Projects