import '../../styles/layout/_home.scss'


function Home() {

    const handleContactMeClick = (ev) => {
        ev.preventDefault();
        window.location.href = 'mailto:example@example.com?subject=Contact&body=Hello,';
    };

    const handleLinkedinClick = (ev) => {
        ev.preventDefault();
        window.open(ev.target.href, '_blank', 'noopener,noreferrer')
    }

    return (
        <section className='home__section'>
            <div className='home__box'>
                <img className='home__picture' src="/img/me.jpeg" alt="" />
                <button className='first__home__btn' href='https://www.linkedin.com/in/jeannettearias/'
                    onClick={handleLinkedinClick}>Available to work</button>
            </div>
            <h1 className='home__title' >Hi, I am Jeannette!</h1>
            <div className='home__content'>
                <p className="prh__text">
                    A professional, with over 16 years of experience in the technology industry, where at least 10 have been working in agile environments, handling roles both in Product, and management side, with focus on IT project management, and financial management and third party vendor management, as part of my duties. My experience is backed by PMBOK Project Management, PM/PO SAFe® 4, and Scrum Master (PSM I) certifications.
                </p>
            </div>
            <nav className='btn__home__box'>
                <div className='home__btn'>
                    <button className='contact__btn' onClick={handleContactMeClick}>Contact me</button>
                    <button className='linkedin__btn' href='https://www.linkedin.com/in/jeannettearias/'
                        onClick={handleLinkedinClick}>LinkedIn</button>
                </div>
            </nav>
        </section >
    );
}

export default Home;
