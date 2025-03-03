import PropTypes from 'prop-types';
import '../../styles/layout/_experience.scss';


function Experience({ exp }) {
    return (
        <div className='exp__head'>
            <section className='hero__section'>
                <label className="wip__label" htmlFor="WIP">WIP 🚧</label>
                <div className='hero__container'>
                    <div className='hero__image__container'>
                        <div className='container__image' /></div>
                    <div className='hero__content'>
                        <h1 className='content__title'>About me!</h1>
                        <div className='content__text__container'>
                            <h2 className='content__subtitle'>
                                I am passionate about learning and travel.</h2>
                        </div>
                        <div >
                            <p className='content__text'>
                                I am passionate about learning, travel and technology, which I value for its ability to transform lives and optimize processes.
                                I have led projects as a Scrum Master, motivating teams, and more recently as a Project Manager, with a strategic and human focus.
                                My essence reflects curiosity, resilience and a constant commitment to growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className='margin__title__container'>
                <h1 className='margin__title'>Experience</h1>
            </div>
            <section className='container__section'>
                <div className='container__article'>
                    <div className='line' ></div>
                    <div className='time-line'></div>
                    <div className='container__card'>
                        {exp.map((expJson, index) => (
                            <form key={index}>
                                <article className='project__data' >
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
                                </article>
                            </form>
                        ))}
                    </div>
                </div>
            </section>
        </div>
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

