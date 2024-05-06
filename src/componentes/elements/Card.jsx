import style from './Card.module.css'
import ButtonFade from './ButtonFade'


function Card({image,title,description, url}){
    return(
        <div className={style.Card}>
            <img src={image} alt='PrintProjects'/>
            <h2>{title}</h2>
            <p>{description}</p>
            <ButtonFade link={url} text={'Clique aqui'}/>
        </div>  
    )
}

export default Card