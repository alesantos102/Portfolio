import styles from './Navbar.module.css'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'


function Navbar() {
    return (

        <div className={styles.Navbar}>
            <span />
            <div>
                <ul>
                    <li><a href='#Projects'> <p>Projetos</p> </a></li>
                    <li><p>Tecnologias</p></li>
                    <li><a href='#About'> <p>Sobre mim</p> </a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li> <a href='https://github.com/alesantos102' target='_blank'> <img src={github} alt="github" /></a></li>
                    <li> <a href='https://www.linkedin.com/in/dev-alexsandro-soares/' target='_blank'><img src={linkedin} alt="linkedin" /></a></li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar