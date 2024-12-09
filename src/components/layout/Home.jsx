
import '../../styles/layout/_home.scss'


function Home() {

    const handleLinkedinClick = (ev) => {
        ev.preventDefault();
        window.open(ev.target.href, '_blank', 'noopener,noreferrer')
    }

    return (
        <section className='home__section'>
            <div>
                <img className='home__picture' src="/img/me.jpeg" alt="" />
            </div>
            <div className='home__box'>
                <h1 className='home__title' >Hi, I am Jeannette! 👋</h1>
                <div className='home__content'>
                    <p className="prh__text">
                        A seasoned professional with over 16 years of experience in the technology industry, including 10+ years in agile environments. Skilled in both product and management roles, I specialize in IT project management, financial oversight, and third-party vendor coordination. My expertise is reinforced by certifications in PMBOK Project Management, SAFe® 4 PM/PO, and Scrum Master (PSM I).
                    </p>
                </div>
            </div>
            <nav className='btn__home__box'>
                <div className='home__btn'>
                    <button className='linkedin__btn' href='https://www.linkedin.com/in/jeannettearias/'
                        onClick={handleLinkedinClick}>Go to LinkedIn</button>
                </div>
            </nav>
        </section >
    );
}

export default Home;
