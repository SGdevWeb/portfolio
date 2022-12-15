import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import HeaderMenuMobile from './components/HeaderMenuMobile/HeaderMenuMobile';
import styles from './Header.module.scss';

function Header() {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className={`d-flex flex-row align-items bg-dark ${styles.header}`} >
            <div className={`flex-fill p-20`} >
                <Link className={`mr-5 ${styles.logo}`} to="/">
                    SG_webDev
                </Link>
            </div>
            <nav>
                <ul className={`d-flex flex-row align-items mr-15 ${styles.headerMenu}`}>
                    <Link className={`p-10 ${styles.link}`} to="/" >Home</Link>
                    <HashLink className={`p-10 ${styles.link}`} to='/#projects' >Projects</HashLink>
                    <HashLink className={`p-10 ${styles.link}`} to='/#contact' >Contact</HashLink>
                    <a className={`p-10 ${styles.link}`} href={process.env.PUBLIC_URL + '/Cv.pdf'} target="_blank" rel='noreferrer'>Cv</a>
                </ul>
                <i onClick={()=> setShowMenu(!showMenu)} className= {showMenu ? `fa-solid fa-xmark ${styles.headerMenuMobile}` : `fa-solid fa-bars ${styles.headerMenuMobile}`}></i>
                {showMenu && 
                    <HeaderMenuMobile setShowMenu={setShowMenu}/>
                }
            </nav>
        </header>
    )
}

export default Header;