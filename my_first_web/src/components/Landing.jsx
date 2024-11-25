import '../styles/project/_project.scss';
import PropTypes from 'prop-types';
import ProjectImage from './projects/ProjectImage';
import ProjectCard from './projects/ProjectCard';

function Landing({ projectsArray }) {
    return (
        <main className="preview">
            {projectsArray.map((project) => (
                <article key={project.idproject} className="project">
                    <ProjectImage project={project} />
                    <ProjectCard project={project} />
                </article>
            ))}
        </main>
    );
}

Landing.propTypes = {
    projectsArray: PropTypes.array.isRequired,
};

export default Landing;
