import style from './Projects.module.css'
import Card from '../elements/Card.jsx'
import imgTemp from '../../assets/imgTemp.svg'

function Projects() {
    return (
        <div className={style.Projects}>
            <h1>Projects</h1>
            <section>
                <Card image={imgTemp} title={'Project 1'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                <Card image={imgTemp} title={'Project 2'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                <Card image={imgTemp} title={'Project 3'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                <Card image={imgTemp} title={'Project 4'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
            </section>
        </div>
    )
}

export default Projects