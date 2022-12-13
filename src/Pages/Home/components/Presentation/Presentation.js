import styles from './Presentation.module.scss';
import profilPhoto from '../../../../Assets/Images/Photo-sam.jpg';
import logos from '../../../../data/logos/logos.json';


function Presentation() {
    return (
        <div className={`d-flex flex-column align-items ${styles.container}`} >
            <div className={`d-flex flex-row align-items p-20`}>
                <div className={`d-flex flex-column flex-fill ${styles.description}`}>
                    <p className={`mb-20 ${styles.title}`}>Samuel</p>
                    <p className={`mb-20 ${styles.subtitle}`}>👨‍💻 Web developer</p>
                    <p className={styles.paragraph}>
                        I'm ready to take up the technical challenges of tomorrow with rigor, passion and  creativity.
                    </p>
                </div>
                <div className={`d-flex flex-column ${styles.frame}`}>
                    <img className={styles.photo} src={profilPhoto} alt="My Profil" />
                    <div className={styles.photoIcons}>
                        <i onClick={() => window.open('https://github.com/SGdevWeb', '_blank')} className="fa-brands fa-square-github"></i>
                        <i onClick={() => window.open('https://linkedin.com/in/sgwebdev', '_blank')} className="fa-brands fa-linkedin"></i>
                        <i onClick={() => window.open('https://twitter.com/SG_devWeb', '_blank')}  className="fa-brands fa-square-twitter"></i>      
                    </div>
                </div>
            </div>
            <div className={`d-flex flex-column p-20 ${styles.skills}`}>
                <div className={`d-flex flex-column p-20`}>
                    <h2>Stacks</h2>
                </div>
                <div className={`${styles.fullstack}`}>
                    <div className={`d-flex flex-row align-items p-20`}>
                        <p className={`p-20 ${styles.stack}`}>FrontEnd {'>>'}</p>
                        <ul className='d-flex flex-fill'>
                            {logos.frontend.map( logo => (
                                <li key={logo.id} className='mr-30'>
                                    <img className={styles.logo} src={logo.image} alt={`${logo.title} logo`} />
                                    <div className='d-flex justify-content'>
                                        <p className={styles.logoTitle}>{logo.title}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`d-flex flex-row align-items p-20`}>
                        <p className={`p-20 ${styles.stack} ${styles.backend}`}>BackEnd {'>>'}</p>
                        <ul className='d-flex flex-fill'>
                            {logos.backend.map( logo => (
                                <li key={logo.id} className='mr-30'>
                                    <img id={logo.title} className={styles.logo} src={logo.image} alt={`${logo.title} logo`} />
                                    <div className='d-flex justify-content'>
                                        <p className={styles.logoTitle}>{logo.title}</p>
                                    </div>
                                    
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`p-20 ${styles.tools}`}>
                        <p className='mb-20'>
                            <i className={`fa-solid fa-chevron-down p-10 ${styles.arrowDown}`}></i>
                                Tools
                            <i className={`fa-solid fa-chevron-down p-10 ${styles.arrowDown}`}></i>
                        </p>
                        <ul className='d-flex flex-row justify-content'>
                            {logos.tools.map( logo => (
                                <li key={logo.id} className='mr-30'>
                                    <img id={logo.title} className={styles.logo} src={logo.image} alt={`${logo.title} logo`} />
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