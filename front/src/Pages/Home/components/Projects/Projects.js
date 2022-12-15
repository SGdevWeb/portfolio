import styles from './Projects.module.scss';
import projects from '../../../../data/projects/projects.json';

function Projects() {
    return (
        <div className={styles.container}>
            <h2 id='projects'>My portfolio</h2>
            <div className={`${styles.cards} d-flex flex-row`}>
                {projects.map( project => (
                    <a key={project.id} href={project.link} target="_blank" rel='noreferrer' className={`${styles.card} `}>
                        <img src={project.cover} alt={project.title} />
                        <div className={`d-flex flex-column ${styles.maskHover}`}>
                            <p className={`d-flex ${styles.cardTitle}`}>{project.title}</p>
                            <p className={styles.cardSkills}>{project.skills}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Projects;