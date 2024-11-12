import PropTypes from 'prop-types';
import '../../styles/layout/_experience.scss';


function Experience({ exp }) {
    console.log(exp);

    return (
        <section className='exp__section'>
            {exp.map((expJson, index) => (
                <form key={index}>
                    <fieldset className='project__data' >
                        <legend>Experience Information</legend>
                        <p className="text">{expJson.Company}</p>
                        <p className="text">{expJson.Role}</p>
                        <time className="datetime" >{expJson.Time}</time>
                    </fieldset>

                    <fieldset className="description__container">
                        <legend>Job Description</legend>
                        <p className="text">
                            {expJson.Description}</p>
                    </fieldset>
                </form>
            ))}
        </section>
    );
}

Experience.propTypes = {
    exp: PropTypes.array.isRequired
};
export default Experience;

