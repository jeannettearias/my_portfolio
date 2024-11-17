import PropTypes from 'prop-types';
import '../../styles/App.scss'

function ProjectImage({ projectsArray }) {

    return (
        <div className='project__container'>
            {projectsArray.map((projectimg) => (
                <>
                    <div
                        key={projectimg.idproject}
                        className='projectImage'
                        style={{
                            backgroundImage: projectimg.project_image ? `url(${projectimg.project_image})` : null,
                        }}

                    ></div>
                    <img src={projectimg.project_image} alt="" />
                    <p>{projectimg.idproject}</p>
                </>

            ))}
        </div>
    );
}

ProjectImage.propTypes = {
    projectsArray: PropTypes.array.isRequired

};

export default ProjectImage;