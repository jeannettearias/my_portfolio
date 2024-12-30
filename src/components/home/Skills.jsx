import '../../styles/home/_skills.scss';
import PropTypes from 'prop-types';


function Skills({ skills }) {

    return (
        <section className="skills__section">
            <h1 className="skills__title">Get to Know my skills</h1>

            {skills.map((skillGroup, index) => (
                <div key={index} className="skills__card">
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

            <article className='skills__article'>
                <h2 className="skills__subtitle">Web Development</h2>

                <div className='skills__card'>
                    <ul className="skills__icons">
                        <li className="skill__icon__item">{skills.technical_skills}</li>
                    </ul>
                </div>

                <div className="skills__card">
                    <div>
                        <div className="pic__banner">
                            <img className="emo__pic" src="" alt="" />
                            <h4>+95% SNEX</h4>
                            <img className="graph__pic" src="" alt="" />
                        </div>
                        <p className="achievement__summary">“As the Product Owner in the Banco BCI project, achieved a 50% increase in the number of operational users (reaching 2K) and a 95% SNEX score (Customer Satisfaction and Efficiency) following the successful launch of the MVP into production.”</p>
                    </div>
                </div>
            </article>

            <article className="content__article">
                <h2 className='skills__subtitle'>Achievements</h2>
                <div>

                </div>
            </article>
        </section >
    );
}

Skills.propTypes = {
    skills: PropTypes.array.isRequired
}

export default Skills;
