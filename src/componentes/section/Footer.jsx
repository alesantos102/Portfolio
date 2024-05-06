import style from './Footer.module.css'
import Github from "../../assets/github.svg"
import Linkedin from "../../assets/linkedin.svg"
import Figma from "../../assets/figma.svg"
import { useEffect, useState } from "react"

function Footer() {

    const [text, setText] = useState("");
    const toRotate = ["(98) 9-9248-7393", "dev.alexsandrosoares@gmail.com"];
    const [loop, setLoop] = useState(0);
    const [isDeleting, SetIsDeleting] = useState(false);
    const period = 150;
    const [delta, setDelta] = useState(100);


    useEffect(() => {
        let ticker = setInterval(() => {
            toType()
        }, delta);
        return () => {
            clearInterval(ticker)
        }
    }, [text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            SetIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText == ""){
            SetIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);

        }

    }

    return (
        <div className={style.Footer}>
            <ul>
                <li>
                    <h2>
                        Contatos:
                    </h2>
                    <p>
                        {text}
                    </p>
                </li>
            </ul>
            <ul>
                <li> <a href='https://github.com/alesantos102' target='_blank'> <img src={Github} alt="github" /></a></li>
                <li> <a href='https://www.linkedin.com/in/dev-alexsandro-soares/' target='_blank'><img src={Linkedin} alt="linkedin" /></a></li>
                <li><img src={Figma} alt="Figma" /></li>
            </ul>
        </div>
    )
}

export default Footer