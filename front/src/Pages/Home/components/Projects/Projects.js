import styles from './Projects.module.scss';
import projects from '../../../../data/projects/projects.json';

function Projects() {

    let langages = [
        { name: 'JavaScript', value: 3 },
        { name: 'HTML', value: 1 },
        { name: 'Python', value: 7 },
        { name: 'PHP', value: 5 },
        { name: 'CSS', value: 2 }
      ];
      langages.sort((a, b) => b.value - a.value);
    //   console.log(langages);
    
    let array = projects
    console.log(array)

    projects.map(p => console.log(p.id))
    console.log(projects.sort((a, b) => b.id - a.id))
    // let trie = [...projects]

    // trie = projects.sort(function (a, b) {
    //     return b.id - a.id
    // });
    // console.log(trie)

    return (
        <div className={styles.container}>
            <h2 id='projects'>Portfolio</h2>
            <div className={`${styles.cards} d-flex flex-row`}>
                {projects
                    .sort((a, b) => b.id - a.id)
                    .map( project => (
                    <a key={project.id} href={project.link} target="_blank" rel='noreferrer' className={`${styles.card} flex-fill`}>
                        <img src={project.cover} alt={project.title} />
                        <div className={`d-flex flex-column ${styles.maskHover}`}>
                            <p className={`d-flex ${styles.cardTitle}`}>{project.title}</p>
                            <p className={styles.cardSkills}>{project.skills}</p>
                        </div>
                    </a>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects;