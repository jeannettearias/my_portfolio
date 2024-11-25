import PropTypes from 'prop-types';
import '../../styles/project/_project.scss'
import '../../styles/App.scss'

function ProjectImage({ project }) {

    return (
        <div
            className='projectImage'
            style={{
                backgroundImage: project.project_image ? `url(${project.project_image})` : 'none',
            }}
        ></div>
    )
}

ProjectImage.propTypes = {
    project: PropTypes.shape({
        idproject: PropTypes.number.isRequired,
        project_image: PropTypes.string,
    }).isRequired,
};

export default ProjectImage;