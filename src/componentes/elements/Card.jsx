import style from './Card.module.css'
import ButtonFade from './ButtonFade'


function Card({image,title,description}){
    return(
        <div className={style.Card}>
            <img src={image} alt='PrintProjects'/>
            <h2>{title}</h2>
            <p>{description}</p>
            <ButtonFade text={'Clique aqui'}/>
        </div>  
    )
}

export default Card