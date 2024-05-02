import style from './About.module.css'

function About() {
    return (
        <div className={style.About}>
            <h1>About me</h1>
            <div className={style.container}>
                <div className={style.timeline}>
                    <ul>
                        <li>
                            <div className={style.content}>
                                <h3>2018</h3>
                                <div className={style.startPoint}><div className={style.point}></div></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </li>
                        <li>
                            <div className={style.content}>
                                <h3>2019</h3>
                                <div className={style.point}></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </li>
                        <li>
                            <div className={style.content}>
                                <h3>2020</h3>
                                <div className={style.point}></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </li>
                        <li>
                            <div className={style.content}>
                                <h3>2021</h3>
                                <div className={style.point}></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About