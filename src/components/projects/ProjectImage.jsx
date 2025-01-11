import PropTypes from 'prop-types';
import '../../styles/project/_project.scss';

function ProjectImage({ project }) {
    return (
        <div className="projectImageContainer">
            {project.project_image ? (
                <img
                    className="projectImage"
                    src={project.project_image}
                />
            ) : (
                <p>No Image Available</p>
            )}
        </div>
    );
}

ProjectImage.propTypes = {
    project: PropTypes.shape({
        project_image: PropTypes.string,
        project_name: PropTypes.string,
    }).isRequired,
};

export default ProjectImage;
