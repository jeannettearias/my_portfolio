import '../../styles/home/_skills.scss';
import PropTypes from 'prop-types';


function Skills({ skills, achievements, activeAchievements }) {

    return (
        <>
            <h1 className="skills__title">Get to Know my skills</h1>

            <article className="skills__section">

                {skills.map((skillGroup, index) => (
                    <div key={index}
                        className="skills__card">
                        <h2 className="skills__subtitle">{skillGroup.title}</h2>
                        <ul className="skills__list">
                            {skillGroup.skills.map((item, idx) => (
                                <li key={idx} className="skill__item">
                                    <span>{item.skill}</span>
                                    <br />
                                    <span className="skill__level">{item.level}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </article>
            <article className='skills__section'>
                <h2 className="skills__subtitle">Web Development</h2>
                <div className='skills__card'>
                    <ul className="skills__icons">
                        <li className="skill__icon__item">{skills.technical_skills}</li>
                    </ul>
                </div>
            </article>

            <article className="skills__section">
                <h2 className='skills__subtitle'>Achievements</h2>
                {activeAchievements.map((achievement, index) => (
                    <div key={index}
                        className='skills__card'>
                        <ul className='achivements__list'>
                            <li className='achievements__item'>{achievement.description}
                                <br />
                                <span className='achievement__date'>{achievement.metric}</span>
                            </li>
                        </ul>
                    </div>
                ))}
            </article>
        </ >
    );
}

Skills.propTypes = {
    skills: PropTypes.array.isRequired,
    achievements: PropTypes.array.isRequired,
    activeAchievements: PropTypes.array.isRequired
}

export default Skills;
