import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styles from './HeaderMenuMobile.module.scss';

function HeaderMenuMobile({setShowMenu}) {

    return (
        <div className={`d-flex justify-content ${styles.menuContainer}`}>
            <ul className={styles.menu}>
                    <Link onClick={() => setShowMenu(false)} className={`d-flex justify-content ${styles.link}`} to="/" >Home</Link>
                    <HashLink onClick={() => setShowMenu(false)} className={`d-flex justify-content ${styles.link}`} to='/#projects' >Projects</HashLink>
                    <HashLink onClick={() => setShowMenu(false)} className={`d-flex justify-content ${styles.link}`} to='/#contact' >Contact</HashLink>
                    <a onClick={() => setShowMenu(false)} className={`d-flex justify-content ${styles.link}`} href={process.env.PUBLIC_URL + '/Cv.pdf'} target="_blank" rel='noreferrer'>Cv</a>
            </ul>
        </div>
    )
}

export default HeaderMenuMobile;