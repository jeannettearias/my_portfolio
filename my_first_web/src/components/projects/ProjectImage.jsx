import PropTypes from 'prop-types';
import '../../styles/project/_project.scss'
import '../../styles/App.scss'

function ProjectImage({ projectsArray }) {

    return (
        <div className='preview'>
            {projectsArray.map((projectimg) => (

                <div
                    key={projectimg.idproject}
                    className='projectImage'
                    style={{
                        backgroundImage: projectimg.project_image ? `url(${projectimg.project_image})` : 'none',
                    }}

                ></div>
            ))}
        </div>
    );
}

ProjectImage.propTypes = {
    projectsArray: PropTypes.array.isRequired

};

export default ProjectImage;