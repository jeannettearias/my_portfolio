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
                        <p className='text'>{expJson.Employment_type}</p>
                        <time className="datetime" >{expJson.Time}</time>
                        {Array.isArray(expJson.Description) ? (
                            <ul className='description__list'>
                                {expJson.Description.map((item, idx) => (
                                    <li className='item__list' key={idx}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            <ul className='description__list'>
                                {expJson.Description.split('. ').map((item, idx) => (
                                    item.trim() && <li className='item__list' key={idx}>{item.trim()}</li>
                                ))}
                            </ul>
                        )}
                        {expJson.Projects && (
                            <ul className='description__list'>
                                {expJson.Projects.map((project, idx) => (
                                    <li key={idx} className='project__item'>
                                        <ul>
                                            <h4 className='project__title'>{project.Title} | {project.Year}</h4>
                                            <li className='item__link'><p>{project.Description}</p></li>
                                            <li className='item__link'>
                                                <a href={project.Link} target='_blank' rel='noopener noreferrer'>{project.Link}</a>
                                            </li>
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </fieldset>
                </form>
            ))}
        </section>
    );
}

Experience.propTypes = {
    exp: PropTypes.arrayOf(
        PropTypes.shape({
            Company: PropTypes.string.isRequired,
            Role: PropTypes.string.isRequired,
            Employment_type: PropTypes.string,
            Time: PropTypes.string.isRequired,
            Description: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.arrayOf(PropTypes.string)
            ]),
            Projects: PropTypes.arrayOf(
                PropTypes.shape({
                    Title: PropTypes.string.isRequired,
                    Year: PropTypes.number.isRequired,
                    Description: PropTypes.string.isRequired,
                    Link: PropTypes.string.isRequired
                })
            )
        })

    ).isRequired
};
export default Experience;

