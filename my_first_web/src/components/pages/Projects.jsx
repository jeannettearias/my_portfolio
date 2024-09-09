import '../../styles/layout/_project.scss';
import ProjectCard from './ProjectCard';
import PropTypes from 'prop-types'


function Projects({ jsonData }) {


    return (
        <section className="preview">

            <div className='projectImage'
                style={{ backgroundImage: jsonData.image ? `url(${jsonData.image})` : null }}></div>
            <ProjectCard jsonData={jsonData} />


        </section>
    );
}

Projects.propTypes = {
    jsonData: PropTypes.array.isRequired
};

export default Projects;
