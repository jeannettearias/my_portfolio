import PropTypes from 'prop-types';
import '../../styles/layout/_experience.scss';


function Experience({ exp }) {
    return (
        <>
            <section className='hero__section'>
                <label className="wip__label" htmlFor="WIP">WIP 🚧</label>
                <div className='hero__container'>
                    <div className='image__layout'>
                        <div className='experience__picture' />
                    </div>
                    <div className='hero__content'>
                        <h1 className='content__title'>About me!</h1>
                        <h2 className='content__subtitle'>
                            Passionate about learning</h2>
                        <div className='experience__content'>
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
                    <hr className="line" />
                    <div className='time-line'>
                        {exp.map((expJson, index) => (
                            <form key={index}>
                                <article className='Header'>
                                    <div className='header__content'>
                                        <img className='logo'
                                            src={import.meta.env.BASE_URL + expJson.logo}
                                        ></img>
                                        <hr className='divider' />
                                        <div className='dates'>
                                            <time className='date'>{expJson.time}</time>
                                            <legend className='location'>{expJson.location}</legend>
                                        </div>
                                    </div>
                                </article>
                                <article className='Down'>
                                    <div className='left__experience'>
                                        <div className='down__content'>
                                            <h3 className='company__card'>{expJson.company}</h3>

                                            {Array.isArray(expJson.description) ? (
                                                <ul className='description__list'>
                                                    {expJson.description.map((item, idx) => (
                                                        <li className='item__list' key={idx}>{item}</li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <ul className='description__list'>
                                                    {expJson.description.split('. ').map((item, idx) => (
                                                        item.trim() && <li className='item__list' key={idx}>{item.trim()}</li>
                                                    ))}
                                                </ul>
                                            )}
                                            {expJson.projects && (
                                                <ul className='description__list'>
                                                    {expJson.projects.map((project, idx) => (
                                                        <li key={idx} className='project__item'>
                                                            <h4 className='project__title'>{project.title} | {project.Year}</h4>
                                                            <ul >
                                                                <li className='item__link'><p>{project.description}</p></li>
                                                                <li className='item__link'>
                                                                    <a href={project.link} target='_blank' rel='noopener noreferrer'>{project.link}</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                        <div >
                                            <ul className='chips__container'>
                                                {expJson.skills.map((skills, index) => (
                                                    <li key={index} className="chip">
                                                        {skills}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='right__experience'>
                                        <div className='down__cards'>
                                            <div className="card1">
                                                <button className='Button-primary'>
                                                    <img className='user_logo'
                                                        src='{import.meta.env.BASE_URL + "images/icons/Button/User.svg"}' />
                                                </button>
                                                <p className='text__card1' >{expJson.role}</p>
                                            </div>
                                            <div className='card2'>
                                                <button className='Button-primary'>
                                                    <img className='user_logo'
                                                        src='{import.meta.env.BASE_URL + "images/icons/Button/House.svg"}' />
                                                </button>
                                                <legend className='text__card2'>{expJson.location_type}</legend>

                                            </div>
                                            <div className="card3">
                                                <button className='Button-primary'>
                                                    <img className='user_logo'
                                                        src='{import.meta.env.BASE_URL + "images/icons/Button/Clock.svg"}' />
                                                </button>
                                                <p className='text__card3'>{expJson.employment_type}</p>

                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </form>
                        ))}
                    </div>
                </div>
            </section >
        </>
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

