import '../../styles/home/_skills.scss';

function Skills({ skills }) {

    return (
        <>
            <section className="skills__section">
                {skills.map((skill, index) => (
                    <div key={index} className="skills__card">
                        <h2 className="skills__subtitle">{skill.title}</h2>
                        <ul className="skills__list">
                            {skill.skills.map((item, idx) => (
                                <li className="skill__item" key={idx}>{item}</li>
                            ))}
                        </ul>

                    </div>
                ))}
                <h1 className="skills__title">Get to Know my skills</h1>
                <article className='skills__article'>

                    <div className='skills__card'>
                        <h2 className="skills__subtitle">Web Development</h2>
                        <ul className="skills__icons">
                            <li className="skill__icon__item"></li>
                            <li className="skill__icon__item"></li>
                            <li className="skill__icon__item"></li>
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
                    <div>

                    </div>
                </article>
            </section >
        </>
    );
}


export default Skills;
