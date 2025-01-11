import PropTypes from 'prop-types';
import '../../styles/project/_project.scss';

function ProjectCard({ project }) {
    return (
        <div className="card">
            <h2 className="card__projectTitle">
                <span className="card__projectTitle--text">{project.project_name}</span>
            </h2>
            <div className="card__author">
                <div
                    className="card__authorPhoto">
                    <ul>
                        <li className='card__authorPhoto'>
                            <img
                                className="card__authorPhoto"
                                src={project.author_photo}
                                alt={project.author_name}
                            />
                        </li>
                    </ul>
                </div>
                <p className="card__job">{project.author_job}</p>
                <h3 className="card__name">{project.author_name}</h3>
            </div>

            <div className="card__project">
                <h3 className="card__projectName">{project.project_name}</h3>
                <p className="card__slogan">{project.project_slogan}</p>
                <div className="card__technicalInfo">
                    <ul className="card__technologies">
                        {project.project_technologies
                            ? project.project_technologies.split(',').map((tech, index) => (
                                <li key={index}>
                                    <a className={`tech__icon icon__${tech.trim().toLowerCase()}`}
                                        title={tech.trim()}></a>
                                </li>
                            ))
                            : 'No technologies listed'}
                    </ul>
                </div>
                <p className="card__description">{project.project_description}</p>

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
