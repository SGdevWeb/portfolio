import styles from './Presentation.module.scss';
import profilPhoto from '../../../../Assets/Images/Photo-sam.jpg';
import logos from '../../../../data/logos/logos.json';


function Presentation() {
    return (
        <div className={`d-flex flex-column align-items ${styles.container}`} >
            <div className={styles.presentation}>
                <div className={styles.description}>
                    <p className={`mb-20 ${styles.title}`}>Samuel</p>
                    <p className={`mb-20 ${styles.subtitle}`}>👨‍💻 Développeur Web</p>
                    <p className={styles.paragraph}>
                        Je suis prêt à relever les défis techniques de demain avec rigueur, passion et créativité.
                    </p>
                </div>
                <div className={styles.frame}>
                    <img className={styles.photo} src={profilPhoto} alt="My Profil" />
                    <div className={styles.photoIcons}>
                        <i onClick={() => window.open('https://github.com/SGdevWeb', '_blank')} className="fa-brands fa-square-github"></i>
                        <i onClick={() => window.open('https://linkedin.com/in/sgwebdev', '_blank')} className="fa-brands fa-linkedin"></i>
                        <i onClick={() => window.open('https://twitter.com/SG_devWeb', '_blank')}  className="fa-brands fa-square-twitter"></i>      
                    </div>
                </div>
            </div>
            <div className={`d-flex flex-column ${styles.skills}`}>
                    <h2>Stacks</h2>
                <div className={`${styles.fullstack}`}>
                    <div className={styles.stacks}>
                        <p className={`p-20 ${styles.stackTitle}`}>
                            FrontEnd
                            <i className="fa-solid fa-chevron-right pl-10"></i>
                            <i className="fa-solid fa-chevron-right"></i>
                        </p>
                        <ul className={styles.stack}>
                            {logos.frontend.map( logo => (
                                <li className={styles.logo} key={logo.id}>
                                    <img className={styles.logoImg} src={logo.image} alt={`${logo.title} logo`} />
                                    <div className='d-flex justify-content'>
                                        <p className={styles.logoTitle}>{logo.title}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.stacks}>
                        <p className={`p-20 ${styles.stackTitle} ${styles.backend}`}>
                            BackEnd
                            <i className="fa-solid fa-chevron-right pl-10"></i>
                            <i className="fa-solid fa-chevron-right"></i>
                        </p>
                        <ul className={styles.stack}>
                            {logos.backend.map( logo => (
                                <li className={`${styles.logo} mr-30`} key={logo.id}>
                                    <img id={logo.title} className={styles.logoImg} src={logo.image} alt={`${logo.title} logo`} />
                                    <div className='d-flex justify-content'>
                                        <p className={styles.logoTitle}>{logo.title}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`${styles.tools}`}>
                        <p className={`mb-20 ${styles.toolsTitle}`}>
                            <i className={`fa-solid fa-chevron-down p-10 ${styles.arrowDown}`}></i>
                                Tools
                            <i className={`fa-solid fa-chevron-down p-10 ${styles.arrowDown}`}></i>
                        </p>
                        <ul className={styles.tool}>
                            {logos.tools.map( logo => (
                                <li className={styles.logo} key={logo.id}>
                                    <img id={logo.title} className={styles.logoImg} src={logo.image} alt={`${logo.title} logo`} />
                                    <div className='d-flex justify-content'>
                                        <p className={styles.logoTitle}>{logo.title}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presentation;