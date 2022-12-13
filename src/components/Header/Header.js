import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styles from './Header.module.scss';

function Header() {
    return (
        <header className={`d-flex flex-row align-items bg-dark ${styles.header}`} >
            <div className={`flex-fill p-20`} >
                <Link className={`mr-5 ${styles.logo}`} to="/">
                    SG_webDev
                </Link>
            </div>
            <nav>
                <ul className='d-flex flex-row align-items mr-15'>
                    <Link className={`p-10 ${styles.link}`} to="/" >Home</Link>
                    <HashLink className={`p-10 ${styles.link}`} to='/#projects' >Projects</HashLink>
                    <HashLink className={`p-10 ${styles.link}`} to='/#contact' >Contact</HashLink>
                    <a className={`p-10 ${styles.link}`} href={process.env.PUBLIC_URL + '/Cv.pdf'} target="_blank" rel='noreferrer'>Cv</a>
                </ul>
            </nav>
        </header>
    )
}

export default Header;