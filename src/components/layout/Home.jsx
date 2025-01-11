
import { Link } from 'react-router-dom';
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
                <div className='container01'>
                    <div className='photo__layout'>
                        <img className='home__picture' alt="" />
                    </div>
                    <div className='home__box'>
                        <h1 className='home__title' >Hi, I am Jeannette!👋</h1>
                        <div className='home__content'>
                            <p className="prh__text">
                                With 16+ years in tech and a decade in agile environments, I excel in IT project management,
                                financial planning, and vendor coordination. Certified in PMBOK, SAFe® 4 PM/PO, and PSM I,
                                I deliver results with strategic focus and hands-on expertise.
                            </p>
                        </div>
                        <nav className='btn__home__box'>
                            <div className='home__btn'>
                                <a
                                    className='linkedin__btn'
                                    href='https://www.linkedin.com/in/jeannettearias'
                                    onClick={handleLinkedinClick}>Go to linkedIn
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </section>
            <section className='section02'>
                <Skills skills={skills}
                    achievements={achievements}
                    activeAchievements={activeAchievements}
                />
            </section>
            <section className='section03'>
                <div className='container03'>
                    <h1 className='experience__link__title'>
                        Discover more about me!
                        <br />
                        If you want to learn more about my experience and the companies I’ve worked with, click the link.
                    </h1>
                    <div className='experience__link__btn__box'>
                        <div className='experience__link__container'
                        ><Link to="/Experience" className='experience__link__btn'>Go to my experience</Link></div>
                    </div>
                </div>
                <div className='experience__link__graphic'>
                    <img className='experience__link__img' src={`${import.meta.env.BASE_URL}images/graphic__image.png`} alt='Experience graphic' />
                </div>
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
