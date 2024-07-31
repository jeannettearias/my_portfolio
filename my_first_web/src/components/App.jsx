import { useState } from 'react';
import '../styles/App.scss';
import '../styles/layout/_header.scss'

function App() {

  const [page, setPage] = useState('/');

  //EVENTS
  const handleClickLink = (ev) => {
    ev.preventDefault();

    setPage(ev.currentTarget.getAttribute('href'));
  };

  return (
    <div className='page darkmode'>
      <header className="header">
        <nav className="menu">
          <ul className="menu__list ">
            <li className="menu__item">
              <a onClick={handleClickLink} href="/" className="menu__link">
                🏠 Home
              </a>
            </li>
            <li className="menu__item">
              <a onClick={handleClickLink} href="/experience" className="menu__link">
                Experience
              </a>
            </li>
            <li className="menu__item">
              <a onClick={handleClickLink} href="/projects" className="menu__link">
                Projects
              </a>
            </li>
            <li className="menu__item">
              <a onClick={handleClickLink} href="/about-me" className="menu__link">
                About Me
              </a>
            </li>
            <li className="menu__item">
              <a onClick={handleClickLink} href="/contact" className="menu__link">
                Coontact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className='main'>
        {page}
        {page === '/' ? (
          <article>
            <h1 className='header__title' >Hi! I am Jeannette</h1>
            <img
              className='main__picture'
              src="/img/IMG_1996.jpg"
              alt="Jeannette"
            />
            <p >
              I am an agile professional, with over 16 years of experience in the technology industry, where at least 10 have been working in agile environments, handling roles both in Product, and management side, with focus on IT project management, and financial management and third party vendor management, as part of my duties. My experience is backed by PMBOK Project Management, PM/PO SAFe® 4, and Scrum Master (PSM I) certifications.
            </p>
          </article>
        ) : null}
      </main>
    </div>

  );
}
export default App;
