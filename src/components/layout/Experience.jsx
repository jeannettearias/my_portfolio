import PropTypes from 'prop-types';
import '../../styles/layout/_experience.scss';


function Experience({ exp }) {

    return (

        <section className='exp__section'>
            <section className='Margin__Herosection'>
                <div className='Herosection'>
                    <div className='content'>
                        <div>
                            <h1 className='exp__title'>About me!</h1>
                            <label className="wip_label" htmlFor="WIP">WIP 🚧</label>
                        </div>
                        <div className='container'>
                            <h2 className='text'>
                                I am passionate about learning and travel.</h2>
                        </div>
                        <p className='exp__paragraph'>
                            I am passionate about learning, travel and technology, which I value for its ability to transform lives and optimize processes.
                            I have led projects as a Scrum Master, motivating teams, and more recently as a Project Manager, with a strategic and human focus.
                            My essence reflects curiosity, resilience and a constant commitment to growth.
                        </p>
                    </div>
                    <div className='image'>
                        <div className='background__image' />
                    </div>
                </div>
            </section>

            <section className='margin__section'>
                <div className='carrer__title__box'>
                    <h1 className='carrer__path__title'>Carrer Path</h1>
                </div>
                <div className='exp__margin'>
                    <p className='exp__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores quis quam cum neque quibusdam non id, officiis doloribus,
                        illum consectetur nihil saepe esse sunt sequi architecto eos tempora sapiente dolorem!</p>
                    <div className='frame__card'>
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
                    </div>
                </div>
            </section>
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

