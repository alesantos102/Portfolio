import style from "./Hero.module.css"
import Btn from "../elements/ButtonFade"

function Hero() {
    return (
        <div className={style.Hero}>
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                elit, sed do eiusmod tempor incididunt ut labore et <br />
                dolore magna aliqua. </p>
            <Btn text={'Saber mais'}/>
        </div>
    )
}

export default Hero