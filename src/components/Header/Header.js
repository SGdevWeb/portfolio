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
                    <Link className={`p-10 ${styles.link}`} to="/cv" >Cv</Link>
                    <HashLink className={`p-10 ${styles.link}`} to='' >Contact</HashLink>
                </ul>
            </nav>
        </header>
    )
}

export default Header;