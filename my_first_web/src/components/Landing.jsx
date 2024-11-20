import '../styles/App.scss';
import PropTypes from 'prop-types';
import ProjectImage from './projects/ProjectImage';
import ProjectCard from './projects/ProjectCard';


function Landing({ projectsArray }) {

    return (
        <section className="preview">
            <div className='projectImage'>
                <ProjectImage projectsArray={projectsArray} /></div>
            <ProjectCard projectsArray={projectsArray} />

        </section>

    );
}
Landing.propTypes = {
    projectsArray: PropTypes.array.isRequired
};
export default Landing; 