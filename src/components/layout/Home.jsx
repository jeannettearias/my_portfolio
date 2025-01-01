
import '../../styles/layout/_home.scss';
import Skills from "../home/Skills";
import PropType from 'prop-types';

function Home({ skills, achievements, activeAchievements }) {

    const handleLinkedinClick = (ev) => {
        ev.preventDefault();
        window.open(ev.target.href, '_blank', 'noopener,noreferrer')
    }

    return (
        <>
            <section className='section01'>
                <div className='photo__layout'>
                    <img className='home__picture' alt="" />
                </div>
                <div className='home__box'>
                    <h1 className='home__title' >Hi, I am Jeannette!👋</h1>
                    <div className='home__content'>
                        <p className="prh__text">
                            With 16+ years in tech and a decade in agile environments, I excel in IT project management, financial planning, and vendor coordination. Certified in PMBOK, SAFe® 4 PM/PO, and PSM I, I deliver results with strategic focus and hands-on expertise.
                        </p>
                    </div>
                    <nav className='btn__home__box'>
                        <div className='home__btn'>
                            <a
                                className='linkedin__btn'
                                href='https://www.linkedin.com/in/jeannettearias/'
                                onClick={handleLinkedinClick}>LinkedIn
                            </a>
                        </div>
                    </nav>
                </div>
            </section>
            <section className='section02'>
                <Skills skills={skills}
                    achievements={achievements}
                    activeAchievements={activeAchievements}
                />
            </section>
        </>

    );
}
Home.propTypes = {
    skills: PropType.array.isRequired,
    achievements: PropType.array.isRequired,
    activeAchievements: PropType.array.isRequired
}

export default Home;
