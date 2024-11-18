import '../styles/App.scss';
import PropTypes from 'prop-types';
import ProjectImage from './projects/ProjectImage';
import ProjectCard from './projects/ProjectCard';


function Landing({ projectsArray }) {

    return (
        <main className="main__landing">
            <ProjectImage projectsArray={projectsArray} />
            <ProjectCard projectsArray={projectsArray} />
        </main>

    );
}
Landing.propTypes = {
    projectsArray: PropTypes.array.isRequired
};
export default Landing; 