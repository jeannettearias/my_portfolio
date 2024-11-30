import '../styles/project/_project.scss';
import PropTypes from 'prop-types';
import ProjectImage from './projects/ProjectImage';
import ProjectCard from './projects/ProjectCard';

function Landing({ projectsArray }) {
    return (
        <main className="preview">
            {projectsArray.map((project) => (
                <div key={project.idproject} className="project">
                    <div className='project-image'>
                        <ProjectImage project={project} />
                    </div>
                    <div className='project-card'>
                        <ProjectCard project={project} />
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
