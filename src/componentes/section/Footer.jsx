import style from './Footer.module.css'
import Github from "../../assets/github.svg"
import Linkedin from "../../assets/linkedin.svg"
import Figma from "../../assets/figma.svg"

function Footer() {
    return (
        <div className={style.Footer}>
            <ul>
                <li>
                    <h2>
                        Meu contato:
                    </h2>
                    <p>
                        12 988888888
                    </p>
                </li>
                <li>
                    <h2>
                        Email:
                    </h2>
                    <p>
                        xxxx@xxx.com
                    </p>
                </li>
            </ul>
            <ul>
                <li><img src={Github} alt="Github" /></li>
                <li><img src={Linkedin} alt="Linkedin" /></li>
                <li><img src={Figma} alt="Figma" /></li>
            </ul>
        </div>
    )
}

export default Footer