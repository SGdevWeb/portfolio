import styles from './Presentation.module.scss';

import profilPhoto from '../../../../Assets/Images/Photo-sam.jpg';
import html from '../../../../Assets/Images/logos/html.png';
import css from '../../../../Assets/Images/logos/css.png';
import javascript from '../../../../Assets/Images/logos/javascript.png';
import react from '../../../../Assets/Images/logos/react.png';
import sass from '../../../../Assets/Images/logos/sass.png';
import vsCode from '../../../../Assets/Images/logos/VS_code.png';
import node from '../../../../Assets/Images/logos/node.png';
import mongoDB from '../../../../Assets/Images/logos/mongoDB.png';
import git from '../../../../Assets/Images/logos/git.png';
import github from '../../../../Assets/Images/logos/github.png';


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
                <div className={styles.frame}>
                    <img className={styles.photo} src={profilPhoto} alt="My Profil" />
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
                            <li className='mr-15'>
                                <img className={styles.logo} src={html} alt="Visual studio code logo" />
                                <p className={styles.logoTitle}>Html</p>
                            </li>
                            <li className='mr-15'>
                                <img className={styles.logo} src={css} alt="Visual studio code logo" />
                                <p className={styles.logoTitle}>Css</p>
                            </li>
                            <li className='mr-15'>
                                <img className={styles.logo} src={sass} alt="Visual studio code logo" />
                                <p className={styles.logoTitle}>Sass</p>
                            </li>
                            <li className='mr-15'>
                                <img className={styles.logo} src={javascript} alt="Visual studio code logo" />
                                <p className={styles.logoTitle}>Javascript</p>
                            </li>
                            <li className='mr-15'>
                                <img className={styles.logo} src={react} alt="Visual studio code logo" />
                                <p className={styles.logoTitle}>React</p>
                            </li>
                        </ul>
                    </div>
                    <div className={`d-flex flex-row align-items p-20`}>
                        <p className={`p-20 ${styles.stack}`}>BackEnd {'>>'}</p>
                        <ul className='d-flex flex-fill'>
                            <li className='mr-15'>
                                <img className={styles.logo} src={node} alt="Visual studio code logo" />
                                <p className={styles.logoTitle}>Node</p>
                            </li>
                            <li className='mr-15'>
                                <img className={`px-20 ${styles.logo}`} src={mongoDB} alt="Visual studio code logo" />
                                <p className={styles.logoTitle}>Mongo DB</p>
                            </li>
                        </ul>
                    </div>
                    <div className={`p-20 ${styles.tools}`}>
                        <p className='mb-20'>
                            <i className={`fa-solid fa-chevron-down p-10 ${styles.arrowDown}`}></i>
                                Tools
                            <i className={`fa-solid fa-chevron-down p-10 ${styles.arrowDown}`}></i>
                        </p>
                        <ul className='d-flex flex-row justify-content'>
                            <li className='mr-15'>
                                <img className={styles.logo} src={vsCode} alt="Visual studio code logo" />
                                <p className={styles.logoTitle}>VS Code</p>
                            </li>
                            <li className='mr-15'>
                                <img className={styles.logo} src={git} alt="Visual studio code logo" />
                                <p className={styles.logoTitle}>Git</p>
                            </li>
                            <li className='mr-15'>
                                <img className={styles.logo} src={github} alt="Visual studio code logo" />
                                <p className={styles.logoTitle}>Github</p>
                            </li>
                        </ul>
                    </div>
                </div>
                    

            </div>
        </div>
    )
}

export default Presentation;