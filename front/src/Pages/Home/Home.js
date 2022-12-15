import Contact from './components/Contact/Contact';
import Presentation from './components/Presentation/Presentation';
import Projects from './components/Projects/Projects';
import styles from './Home.module.scss';

function Home() {
    return(
        <div className={styles.container} >
            <Presentation />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home;