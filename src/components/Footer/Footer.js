import styles from './Footer.module.scss';

function Footer() {
    return (
        <footer className={`d-flex flex-row align-items justify-content bg-dark ${styles.footer}`} >
            <p>Copyright {new Date().getFullYear()}. All right reserved <span>Gustin Samuel</span></p>
        </footer>
    )
};

export default Footer;