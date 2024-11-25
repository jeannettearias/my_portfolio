import PropTypes from 'prop-types';
import '../../styles/project/_project.scss'
import '../../styles/App.scss'

function ProjectImage({ project }) {

    return (
        <div className="projectImage">
            {project.project_image ? (
                <img
                    src={project.project_image}
                    alt={project.project_name || 'Project'}
                    style={{
                        width: '300px', // Set width
                        height: '200px', // Set height
                        objectFit: 'cover', // Ensure image fits nicely
                    }}
                />
            ) : (
                <p>No Image Available</p>
            )}
        </div>
    )
}

ProjectImage.propTypes = {
    project: PropTypes.shape({
        idproject: PropTypes.number.isRequired,
        project_image: PropTypes.string,
        project_name: PropTypes.string,
    }).isRequired,
};

export default ProjectImage;