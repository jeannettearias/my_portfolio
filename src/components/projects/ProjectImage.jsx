import PropTypes from 'prop-types';
import '../../styles/project/_project.scss';

function ProjectImage({ project }) {
    return (
        <div

            style={{
                backgroundImage: project.project_image ? `url(${project.project_image})` : 'none',
            }}
        >
            {project.project_image ? (
                <img
                    className="projectImage"
                    src={project.project_image}
                    alt={project.project_name || 'Project'}
                />
            ) : (
                <p>No Image Available</p>
            )}
        </div>
    );
}

ProjectImage.propTypes = {
    project: PropTypes.object.isRequired,
};

export default ProjectImage;
