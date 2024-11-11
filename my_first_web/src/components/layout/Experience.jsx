import PropTypes from 'prop-types';
import '../../styles/layout/_experience.scss';
import { useEffect } from 'react';

function Experience({ expJson, exp }) {
    // Initialize state only if you need to manage and modify `expJson` internally
    const [experienceData, setExperienceData] = useState(expJson);

    useEffect(() => {
        // Assuming expJson data might change, update the local state if needed
        setExperienceData(expJson);
    }, [expJson]);

    return (
        <section className='exp__section'>

            {exp.map((item, index) => (
                <form key={index}>
                    <fieldset className='project__data' >
                        <legend>Experience Information</legend>
                        <p className="text">{item.company || 'Experience 1'}</p>
                        <p className="text">{item.role || 'Role'}</p>
                        <time className="datetime" >{item.time || 'Date'}</time>
                    </fieldset>

                    <fieldset className="description__container">
                        <legend>Job Description</legend>
                        <p className="text">
                            {item.description || 'Working at '}</p>
                    </fieldset>
                </form>
            ))}
        </section>
    );
}

Experience.propTypes = {
    expJson: PropTypes.object.isRequired,
    exp: PropTypes.arrayOf(
        PropTypes.shape({
            company: PropTypes.string,
            role: PropTypes.string,
            time: PropTypes.string,
            description: PropTypes.string,
        })
    ).isRequired,
};
export default Experience;

