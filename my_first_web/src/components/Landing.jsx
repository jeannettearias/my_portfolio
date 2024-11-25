
import '../styles/project/_project.scss'
import PropTypes from 'prop-types';
import ProjectImage from './projects/ProjectImage';
import ProjectCard from './projects/ProjectCard';


function Landing({ projectsArray }) {
    return (
        <main className="preview">
            {projectsArray.map((project) => (
                <article key={project.idproject} className='preview__item'>
                    <div className='preview__image'>
                        <ProjectImage project={project} />
                    </div>
                    <div className='preview__card'>
                        <ProjectCard project={project} />
                    </div>
                </article>
            ))}
        </main>
    );
}
Landing.propTypes = {
    projectsArray: PropTypes.arrayOf(
        PropTypes.shape({
            idproject: PropTypes.number.isRequired,
            project_image: PropTypes.string,
            author_photo: PropTypes.string,
            author_job: PropTypes.string,
            author_name: PropTypes.string,
            project_name: PropTypes.string,
            project_slogan: PropTypes.string,
            project_description: PropTypes.string,
            project_technologies: PropTypes.string,
            project_demo: PropTypes.string,
            project_repo: PropTypes.string,
        })
    ).isRequired
};
export default Landing; 