import PropTypes from 'prop-types';
import '../../styles/layout/_experience.scss';


function Experience({ exp }) {

    return (
        <section className='exp__section'>
            {exp.map((expJson, index) => (
                <form key={index}>
                    <fieldset className='project__data' >
                        <legend className='legend'>{expJson.Company}</legend>
                        <p className="text">{expJson.Role}</p>
                        <time className="datetime" >{expJson.Time}</time>
                        <ul className="description-list">
                            {expJson.Description.split('. ').map((point, idx) =>
                                point.trim() ? <li className='item__list' key={idx}>{point.trim()}.</li> : null
                            )}
                        </ul>
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

