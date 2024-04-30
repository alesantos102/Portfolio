import style from './ButtonFade.module.css'

function ButtonFade ({text}) {
    return(
        <div className={style.ButtonFade}>
            <button>{text}</button>
        </div>
    )
}

export default ButtonFade