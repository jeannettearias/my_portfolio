import '../../styles/home/_skills.scss';

function Skills() {

    return (
        <>
            <section className="skills__section">
                <h1 className="skills__title">Get to Know my skills</h1>
                <article className='skills__article'>
                    <div className="skills__card">
                        <h2 className="skills__subtitle">Management and Analysis</h2>
                        <ul className="skills__list">
                            <li className="skill__item">Roadmapping</li>
                            <li className="skill__item">Product Discovery Process</li>
                            <li className="skill__item">Business Analysis</li>
                            <li className="skill__item">Project Management</li>
                            <li className="skill__item">Delivery Management</li>
                            <li className="skill__item">Financial Managem</li>
                        </ul>
                    </div>
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
            </section>
        </>
    );
}

export default Skills;
