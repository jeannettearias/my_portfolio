import PropTypes from 'prop-types';
import '../../styles/project/_project.scss';

function ProjectCard({ project }) {
    return (
        <div className="card">
            <h2 className="card__projectTitle">
                <span className="card__projectTitle--text">{project.project_name || 'Personal Project Card'}</span>
            </h2>
            <div className="card__author">
                <div
                    className="card__authorPhoto"
                    style={{
                        background: project.author_photo
                            ? `url(${project.author_photo})`
                            : null,
                    }}
                ></div>
                <p className="card__job">{project.author_job || 'Full Stack Developer'}</p>
                <h3 className="card__name">{project.author_name || 'Author Name'}</h3>
            </div>

            <div className="card__project">
                <h3 className="card__projectName">{project.project_name || 'Elegant Workspace'}</h3>
                <p className="card__slogan">{project.project_slogan || 'Exclusive Design'}</p>
                <div className="card__technicalInfo">
                    <ul className="card__technologies">
                        {project.project_technologies
                            ? project.project_technologies.split(',').map((tech, index) => (
                                <li key={index}>
                                    <a className={`tech__icon icon__${tech.trim().toLowerCase()}`} title={tech.trim()}></a>
                                </li>
                            ))
                            : 'No technologies listed'}
                    </ul>
                </div>
                <h3 className="card__descriptionTitle">Project Description</h3>
                <p className="card__description">{project.project_description || 'No description provided.'}</p>

                <footer className='card__footer'>
                    <ul className='icon'>
                        <li className='icon__link'>
                            <a className="icon icon__www" href={project.project_demo} target="_blank" rel="noopener noreferrer">
                                Web Link
                            </a>
                        </li>
                        <li className='icon__link'>
                            <a className="icon icon__github" href={project.project_repo} target="_blank" rel="noopener noreferrer">
                                GitHub Link
                            </a>
                        </li>
                    </ul>
                </footer>
            </div>
        </div >
    );
}

ProjectCard.propTypes = {
    project: PropTypes.object.isRequired,
};

export default ProjectCard;
