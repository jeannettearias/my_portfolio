import PropTypes from 'prop-types';
import '../styles/App.scss'

function ProjectImage({ projectsArray }) {
    return (

        {
            projectsArray.map((project) => {
                return (
                    <>
                        <div className='projectImage'
                            style={{ backgroundImage: project.project_image ? `url(${project.project_image})` : null }}>

                        </div>
                    </>
                );
            })
        }
    );
}

ProjectImage.propTypes = {
    projectsArray: PropTypes.array.isRequired

};

export default ProjectImage;