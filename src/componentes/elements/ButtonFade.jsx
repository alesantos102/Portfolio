import style from './ButtonFade.module.css'

function ButtonFade ({text, link}) {
    return(
        <div className={style.ButtonFade}>
            <a href={link} target='_blank' ><button>{text}</button></a>
        </div>
    )
}

export default ButtonFade