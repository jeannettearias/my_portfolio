
import PropTypes from 'prop-types';
import '../../styles/home/_skills.scss';

function Skills({ skills, activeAchievements, achievements }) {
    // Check if skills array is not empty and contains the expected properties
    const skillGroup = skills.length > 0 ? skills[0] : {};

    return (
        <>

            <h1 className="skills__title">Get to Know my skills</h1>
            <section className='skills__main__section'>

                {skillGroup.title && (
                    <article className="skills__section">
                        <h2 className="skills__subtitle">{skillGroup.title}</h2>

                        <div className="skills__card">
                            <ul className="skills__list">
                                {skillGroup.skills && skillGroup.skills.map((item, idx) => (
                                    <li key={idx} className="skills__item">
                                        <span className="skill__name">{item.skill}</span>
                                        <span className="skill__level">{item.level}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </article>
                )}

                {skillGroup.technical_title && (
                    <article className='skills__section skills__section__card'>
                        <h2 className="tech__skills__subtitle">
                            <img alt="" className="title-icon" />
                            {skillGroup.technical_title}
                        </h2>
                        <div className="skills__card">
                            <ul className="skills__chips__container">
                                {skillGroup.technical_skills && skillGroup.technical_skills.map((technical_skill, idx) => (
                                    <li key={idx} className="skill__chip">{technical_skill}</li>
                                ))}
                            </ul>
                        </div>
                    </article>
                )}

                {achievements.length > 0 && (
                    <article className="skills__section">
                        {activeAchievements.map((achievement, idx) => (
                            <div key={idx} className='achievements__card'>
                                <ul className='achievements__list'>
                                    <li className='achievement__item'>
                                        <div className='achievement__graphic'>
                                            <img className='achievement__img' />
                                            <span className='achievement__metric'>{achievement.metric}</span>
                                            <span className='achievement__graphic'>{achievement.graphic}</span>
                                        </div>
                                        <p className='achievement__description'>{achievement.description}</p>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </article>
                )}
            </section>
        </>
    );
}

Skills.propTypes = {
    skills: PropTypes.array.isRequired,
    achievements: PropTypes.array.isRequired,
    activeAchievements: PropTypes.array.isRequired
};

export default Skills;