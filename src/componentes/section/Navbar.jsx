import styles from './Navbar.module.css'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'


function Navbar() {
    return (

        <div className={styles.Navbar}>
            <div className={styles.icons}></div>
            <div className={styles.content}>
                <ul>
                    <li><p>Projetos</p></li>
                    <li><p>Tecnologias</p></li>
                    <li><p>Sobre mim</p></li>
                </ul>
            </div>
            <div className={styles.icons}>
                <ul>
                    <li> <img src={github} alt="github" /></li>
                    <li><img className={styles.invert} src={linkedin} alt="linkedin"  /></li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar