import '../styles/project/_project.scss';
import PropTypes from 'prop-types';
import ProjectImage from './projects/ProjectImage';
import ProjectCard from './projects/ProjectCard';

function Landing({ projectsArray }) {
    return (
        <main className="preview">
            {projectsArray.map((project) => (
                <div key={project.idproject} className="project">
                    <div>
                        <ProjectImage project={project} />
                        <ProjectCard project={project} className='card__wrap' />
                    </div>

                </div>
            ))}
        </main>
    );
}

Landing.propTypes = {
    projectsArray: PropTypes.array.isRequired,
};

export default Landing;
