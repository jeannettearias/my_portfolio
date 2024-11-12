import PropTypes from 'prop-types';
import '../../styles/layout/_experience.scss';

function Experience({ exp }) {
    return (
        <section className='exp__section'>
            {exp.map((expJson, index) => (
                <form key={index}>
                    <fieldset className='project__data' >
                        <legend>Experience Information</legend>
                        <p className="text">{expJson.company || 'Experience 1'}</p>
                        <p className="text">{expJson.role || 'Role'}</p>
                        <time className="datetime" >{expJson.time || 'Date'}</time>
                    </fieldset>

                    <fieldset className="description__container">
                        <legend>Job Description</legend>
                        <p className="text">
                            {expJson.description || 'Working at '}</p>
                    </fieldset>
                </form>
            ))}
        </section>
    );
}

Experience.propTypes = {
    exp: PropTypes.object.isRequired
};
export default Experience;

