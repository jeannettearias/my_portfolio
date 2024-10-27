import ProjectCard from './ProjectCard';
import PropTypes from 'prop-types'
import '../../styles/App.scss';


function Projects({ jsonData }) {
    return (
        <section className="preview">

            <div className='projectImage'
                style={{ backgroundImage: jsonData.project_image ? `url(${jsonData.project_image})` : null }}></div>
            <ProjectCard jsonData={jsonData} />

        </section>
    );
}

Projects.propTypes = {
    jsonData: PropTypes.object.isRequired
};

export default Projects;
